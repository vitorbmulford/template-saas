"use client";

export default function Testimonials() {

    return (
        <>
            <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-gray-900/20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">O que dizem nossos usuários</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">Criativos de todo o mundo transformaram suas carreiras com PortfólioPro</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Meu portfólio gerou 3x mais oportunidades de trabalho nos primeiros dois meses. Incrível!",
                                author: "Ana Silva, Designer de Produto",
                                role: "São Paulo, Brasil"
                            },
                            {
                                quote: "Finalmente posso mostrar meu trabalho do jeito que ele merece. Os clientes amam a experiência!",
                                author: "Carlos Mendes, Fotógrafo",
                                role: "Lisboa, Portugal"
                            },
                            {
                                quote: "A ferramenta mais intuitiva que já usei. Criei meu portfólio em um dia e já recebi elogios.",
                                author: "Sophie Laurent, Ilustradora",
                                role: "Paris, França"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                                <p className="text-lg italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                                <div>
                                    <p className="font-bold">{testimonial.author}</p>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}