import { NextRequest, NextResponse } from "next/server";
import stripe from "@/app/lib/stripe";
import { auth } from "@/app/lib/auth";
import { getOrCreateCustomer } from "@/app/server/stripe/get-customer-id";

export async function POST(req: NextRequest) {
  const session = await auth();
  const userId = session?.user?.id;
  const userEmail = session?.user?.email;

  if (!userId || !userEmail) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const customerId = await getOrCreateCustomer(userId, userEmail);

  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${req.headers.get("origin")}/dashboard`, 
    });

    if (!portalSession.url) {
      return NextResponse.json(
        { error: "Portal URL not found" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: portalSession.url });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Stripe error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    console.error("Unknown error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
