import { db } from "@/app/lib/firebase";
import stripe from "@/app/lib/stripe";
import "server-only";

export async function getOrCreateCustomer(userId: string, userEmail: string) {
  try {
    const userRef = db.collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return null;
    }

    const stripeCustomerId = userDoc.data()?.stripeCustomerId;

    if (stripeCustomerId) {
      return stripeCustomerId;
    }

    const userName = userDoc.data()?.name;

    const stripeCustmer = await stripe.customers.create({
      email: userEmail,
      ...(userName ? { name: userName } : {}),
      metadata: {
        userId,
      },
    });

    await userRef.update({
      stripeCustomerId: stripeCustmer,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}
