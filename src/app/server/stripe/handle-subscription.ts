import { db } from "@/app/lib/firebase";
import "server-only";
import Stripe from "stripe";

export async function handleStripeSubscription(
  event: Stripe.CheckoutSessionCompletedEvent
) {
  if (event.data.object.payment_status === "paid") {
    console.log(
      "Pagamento realizado com sucesso, Enviar um email para liberar acesso"
    );
    const metadata = event.data.object.metadata;
    const userId = metadata?.userId;

    if (!userId) {
      throw new Error("userId is missing in metadata");
    }

    await db.collection("users").doc(userId).update({
      stripeCustomerId: event.data.object.customer,
      stripeSubscriptionId: event.data.object.subscription,
      subscriptionStauts: "Active",
    });
  }
}
