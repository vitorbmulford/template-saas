"use client";

import { useStripe } from "@/app/hooks/useStripe";

export default function Pagamentos() {
    const {
        createPaymentStripeCheckout,
        createSubscriptionStripeCheckout,
        handleCreateStripePortal
    } = useStripe();

    return (
        <div className="pt-24 px-6 min-h-screen bg-gray-50 flex flex-col items-center justify-start">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">Pagamentos</h1>

            <div className="flex flex-col gap-6 w-full max-w-md">
                <button
                    onClick={() => createPaymentStripeCheckout({
                        testeId: "123",
                        userEmail: "test@example.com"
                    })}

                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-200"
                >
                    Criar pagamento Stripe
                </button>

                <button
                    onClick={() => createSubscriptionStripeCheckout({
                        testeId: "123",
                        userEmail: "test@example.com"
                    })}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-200"
                >
                    Criar assinatura de pagamentos
                </button>

                <button
                    onClick={handleCreateStripePortal}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-200"
                >
                    Criar portal de pagamentos
                </button>
            </div>
        </div>
    );
}
