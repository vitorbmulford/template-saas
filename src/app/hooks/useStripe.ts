import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";

export function useStripe() {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    async function loadStripeAsync() {
      const stripeInstance = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!
      );
      setStripe(stripeInstance);
    }
    loadStripeAsync();
  }, []);

  async function createPaymentStripeCheckout(checkoutData: {
    testeId: string;
    userEmail?: string;
  }) {
    if (!stripe) return;

    try {
      const response = await fetch("api/stripe/create-pay-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      });
      console.log("Response status:", response.status);
      const data = await response.json();

      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (error) {
      console.error(error);
    }
  }

  async function createSubscriptionStripeCheckout(checkoutData: {
    testeId: string;
    userEmail?: string;
  }) {
    if (!stripe) return;

    try {
      const response = await fetch("api/stripe/create-subscription-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      });
      const data = await response.json();

      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreateStripePortal() {
    try {
      const response = await fetch("/api/stripe/create-portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.error) {
        console.error("Error from API:", data.error);
        return;
      }

      if (!data.url) {
        console.error("Portal URL not found in response");
        return;
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Error creating portal session:", error);
    }
  }

  return {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  };
}
