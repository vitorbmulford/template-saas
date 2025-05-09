import { auth } from "@/app/lib/auth";
import { db } from "@/app/lib/firebase";
import stripe from "@/app/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json({ eror: "unauthorized" }, { status: 401 });
  }

  try {
    const userRef = db.collection("usser").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const costumerId = userDoc.data()?.stripeCustomerId;

    if (!costumerId) {
      return NextResponse.json(
        { error: "Costumer not found" },
        { status: 404 }
      );
    }

    const portalSessions = await stripe.billingPortal.sessions.create({
      customer: costumerId,
      return_url: `${req.headers.get("origin")}/dashboard`,
    });

    return NextResponse.json({ url: portalSessions }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
