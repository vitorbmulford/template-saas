"use client";

import { useStripe } from "@/app/hooks/useStripe";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
export default function Pagamentos() {
    const {
        createPaymentStripeCheckout,
        createSubscriptionStripeCheckout,
        handleCreateStripePortal
    } = useStripe();

    return (
        <BackgroundGradientAnimation>

            <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center justify-start px-6 py-32">
                <div className="w-full max-w-3xl text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-blue-400 mb-4 drop-shadow-lg">Painel de Pagamentos</h1>
                    <p className="text-lg text-blue-200 ">
                        Escolha uma das opções abaixo para criar um pagamento único, uma assinatura ou acessar o portal Stripe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
                    {/* Card 1 */}
                    <div
                        onClick={() => createPaymentStripeCheckout({ testeId: "123", userEmail: "test@example.com" })}
                        className="cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg p-6 flex flex-col items-start justify-between transition-transform transform hover:scale-105"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-2">💳 Pagamento Único</h2>
                            <p className="text-blue-100">
                                Crie um pagamento direto e único para seus serviços com segurança Stripe.
                            </p>
                        </div>
                        <button className="mt-6 w-full py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md transition cursor-pointer">
                            Iniciar Pagamento
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div
                        onClick={() => createSubscriptionStripeCheckout({ testeId: "123", userEmail: "test@example.com" })}
                        className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg p-6 flex flex-col items-start justify-between transition-transform transform hover:scale-105"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-2">🔁 Assinatura</h2>
                            <p className="text-indigo-100">
                                Configure uma cobrança recorrente com planos personalizados para seus clientes.
                            </p>
                        </div>
                        <button className="mt-6 w-full py-3 bg-indigo-800 hover:bg-indigo-900 text-white font-semibold rounded-md transition cursor-pointer">
                            Criar Assinatura
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div
                        onClick={handleCreateStripePortal}
                        className="cursor-pointer bg-purple-600 hover:bg-purple-700 rounded-xl shadow-lg p-6 flex flex-col items-start justify-between transition-transform transform hover:scale-105"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-2">🧾 Portal do Cliente</h2>
                            <p className="text-purple-100">
                                Acesse o portal Stripe para gerenciar métodos de pagamento e visualizar histórico.
                            </p>
                        </div>
                        <button className="mt-6 w-full py-3 bg-purple-800 hover:bg-purple-900 text-white font-semibold rounded-md transition cursor-pointer">
                            Acessar Portal
                        </button>
                    </div>
                </div>


            </div>
        </BackgroundGradientAnimation>

    );
}
