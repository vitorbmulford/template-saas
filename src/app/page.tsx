import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-800/15 via-purple-700/15 to-pink-600/15 opacity-40 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-indigo-700 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-pink-600 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[150px] h-[150px] bg-purple-500 rounded-full blur-3xl opacity-15 pointer-events-none" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mt-16 mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent leading-tight">
            Dê vida ao seu trabalho com um portfólio deslumbrante
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
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

      {/* Features Section */}
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

      {/* Testimonials */}
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">PortfólioPro</h3>
            <p className="text-gray-400">A plataforma definitiva para criativos exibirem seu trabalho e conquistarem o mundo.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><Link href="/recursos" className="text-gray-400 hover:text-white transition-colors">Recursos</Link></li>
              <li><Link href="/precos" className="text-gray-400 hover:text-white transition-colors">Preços</Link></li>
              <li><Link href="/templates" className="text-gray-400 hover:text-white transition-colors">Templates</Link></li>
              <li><Link href="/integracao" className="text-gray-400 hover:text-white transition-colors">Integrações</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><Link href="/ajuda" className="text-gray-400 hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link href="/tutoriais" className="text-gray-400 hover:text-white transition-colors">Tutoriais</Link></li>
              <li><Link href="/comunidade" className="text-gray-400 hover:text-white transition-colors">Comunidade</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="text-gray-400 hover:text-white transition-colors">Termos</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 PortfólioPro. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}