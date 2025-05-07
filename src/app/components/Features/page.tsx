"use client";

export default function Features() {

    return (
        <>
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-300 to-pink-400 bg-clip-text text-transparent">Recursos Exclusivos</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">Tudo o que você precisa para criar um portfólio que impressiona e converte</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Templates Premiados",
                                description: "Escolha entre mais de 100 templates profissionais projetados por especialistas em design.",
                                icon: "🎨"
                            },
                            {
                                title: "Personalização Total",
                                description: "Ajuste cada detalhe para combinar com seu estilo pessoal e identidade de marca.",
                                icon: "✨"
                            },
                            {
                                title: "Otimização para SEO",
                                description: "Ferramentas integradas para ajudar seu trabalho a ser encontrado pelos clientes certos.",
                                icon: "🔍"
                            },
                            {
                                title: "Galeria Interativa",
                                description: "Exiba seus projetos em galerias impressionantes com efeitos de hover e transições suaves.",
                                icon: "🖼️"
                            },
                            {
                                title: "Blog Integrado",
                                description: "Compartilhe seu processo criativo e insights com um sistema de blog poderoso.",
                                icon: "✍️"
                            },
                            {
                                title: "Analíticas Avançadas",
                                description: "Acompanhe visitantes e engajamento com nosso painel de analíticas detalhado.",
                                icon: "📊"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-indigo-500 transition-colors">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}