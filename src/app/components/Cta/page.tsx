"use client";

import Link from "next/link";

export default function Cta() {

    return (
        <>
            <section className="py-32 px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-600 rounded-full blur-3xl opacity-20"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                        Pronto para elevar seu trabalho a novos patamares?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Comece gratuitamente hoje mesmo e descubra como um portfólio excepcional pode transformar sua carreira criativa.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/cadastro">
                            <button className="bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 px-8 py-4 rounded-xl shadow-lg hover:shadow-indigo-500/50 text-white font-semibold text-lg">
                                Criar Meu Portfólio Agora
                            </button>
                        </Link>
                        <Link href="/contato">
                            <button className="border border-gray-600 hover:border-indigo-500 px-8 py-4 rounded-xl text-gray-300 hover:text-white transition-all duration-300">
                                Falar com Especialista
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}