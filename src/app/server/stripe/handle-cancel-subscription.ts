import { db } from "@/app/lib/firebase";
import "server-only";
import type Stripe from "stripe";

export async function handleStripeCancelSubscription(event: Stripe.Event) {
  if (event.type === "customer.subscription.deleted") {
    const customerId = event.data.object.customer;

    const userRef = await db
      .collection("users")
      .where("stripeCustomerId", "==", customerId)
      .get();

    if (userRef.empty) {
      console.log("user not found");
      return;
    }
    const userId = userRef.docs[0].id;
    await db.collection("users").doc(userId).update({
      subscriptionStauts: "inativo",
    });
  }
}
