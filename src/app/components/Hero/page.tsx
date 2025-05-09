"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export default function Hero() {
    return (
        <BackgroundGradientAnimation>
            <section className="flex flex-col items-center justify-center py-20 px-6 text-center">
                <div className="max-w-4xl">
                    <div className="h-[200px] flex items-center justify-center font-extrabold mt-16 mb-6">
                        <GooeyText
                            texts={["Crie", "seu", "pórtifolio"]}
                            morphTime={1}
                            cooldownTime={0.45}
                            textClassName="font-extrabold mt-16 mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent leading-tight"
                        />
                    </div>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
                        Transforme sua criatividade em uma experiência digital impressionante. Nosso construtor de portfólios combina design elegante, desempenho excepcional e ferramentas poderosas para destacar seu trabalho.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                        <Link href="/comece-agora">
                            <button className="bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 px-8 py-4 rounded-xl shadow-lg hover:shadow-indigo-500/50 text-white font-semibold text-lg flex items-center gap-2">
                                Comece Agora - É Grátis
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </Link>
                        <Link href="/demonstracao">
                            <button className="border border-gray-600 hover:border-indigo-500 px-8 py-4 rounded-xl text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2">
                                Ver Demonstração
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </Link>
                    </div>

                    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            {['Designers', 'Fotógrafos', 'Desenvolvedores', 'Artistas', 'Escritores', 'Arquitetos'].map((profession) => (
                                <span key={profession} className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium">{profession}</span>
                            ))}
                        </div>
                        <p className="text-gray-400">Junte-se a mais de 50.000 criativos que já transformaram suas carreiras com nossos portfólios</p>
                    </div>
                </div>
            </section>
        </BackgroundGradientAnimation>
    );
}
