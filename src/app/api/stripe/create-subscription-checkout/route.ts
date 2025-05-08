import stripe from "@/app/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { testeId } = await req.json();
  const price = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;

  if (!price) {
    return NextResponse.json({ error: "price not found" }, { status: 500 });
  }

  const metadata = {
    testeId,
  };
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      mode: "subscription",
      payment_method_types: ["card"],
      customer: testeId,
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/`,
      metadata
      //costumes
    });
    if (!session.url) {
    }
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
