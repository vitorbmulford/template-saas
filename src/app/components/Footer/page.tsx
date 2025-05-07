"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-gray-800 relative z-10 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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

            <div className="relative z-10 max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm">© 2025 PortfólioPro. Todos os direitos reservados.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    {/* Ícones das redes sociais */}
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="..." clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
