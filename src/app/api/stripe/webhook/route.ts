import stripe from "@/app/lib/stripe";
import { handleStripeCancelSubscription } from "@/app/server/stripe/handle-cancel-subscription";
import { handleStripePayment } from "@/app/server/stripe/handle-payment";
import { handleStripeSubscription } from "@/app/server/stripe/handle-subscription";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature");

    if (!signature || !secret) {
      return NextResponse.json(
        { error: "Missing signature or secret" },
        { status: 400 }
      );
    }

    let event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, secret);
    } catch (error) {
      console.error("Webhook signature verification failed:", error);
      return NextResponse.json(
        {
          error: "Webhook signature verification failed",
          details: error instanceof Error ? error.message : "Unknown error",
        },
        { status: 400 }
      );
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const metadata = event.data.object.metadata;

        if (metadata?.price === process.env.STRIPE_PRODUCT_PRICE_ID) {
          await handleStripePayment(event);
        }

        if (metadata?.price === process.env.STRIPE_SUBSCRIPTION_PRICE_ID) {
          await handleStripeSubscription(event);
        }

        break;
      }

      case "checkout.session.expired":
        console.log(
          "Enviar um email falando que o pagamento do usuário expirou"
        );
        break;

      case "checkout.session.async_payment_failed":
        console.log(
          "Enviar um email falando que o pagamento do usuário falhou"
        );
        break;

      case "checkout.session.async_payment_succeeded":
        console.log(
          "Enviar um email falando que o pagamento do usuário foi realizado com sucesso"
        );
        break;

      case "customer.subscription.created":
        console.log("Enviar um email desejando boas-vindas por ter assinado");
        break;

      case "customer.subscription.updated":
        console.log("Alguma coisa mudou na assinatura");
        break;

      case "customer.subscription.deleted":
        await handleStripeCancelSubscription(event);
        break;

      default:
        console.log(`Evento não tratado: ${event.type}`);
    }
    return NextResponse.json({ message: "webhook received" }, { status: 200 });
  } catch (err) {
    console.error("Erro ao lidar com o webhook:", err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
