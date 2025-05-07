import { handleAuth } from "@/app/actions/handle-auth";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";

export default async function Login() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
            {/* Efeitos de fundo */}
            <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px] opacity-20"></div>
            <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-20"></div>

            <div className="relative z-10 bg-gray-900/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 sm:p-10 max-w-md w-full mx-4 border border-gray-700/50 overflow-hidden">
                {/* Efeito de brilho */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="mb-6">
                        <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            PortfólioPro
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">
                        Acesse sua conta
                    </h1>

                    <p className="text-gray-400 mb-8 text-center text-sm sm:text-base leading-relaxed">
                        Transforme sua criatividade em um portfólio impressionante. Faça login para acessar todas as funcionalidades.
                    </p>

                    {/* Formulário de login */}
                    <form action={handleAuth} className="w-full">
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-3 py-3.5 px-6 text-white font-medium bg-gray-800 hover:bg-gray-700/90 border border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg group"
                        >
                            <FcGoogle className="text-xl" />
                            <span>Continuar com Google</span>
                            <FiArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </form>

                    {/* Termos e política */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-500">
                            Ao continuar, você concorda com nossos{' '}
                            <a href="#" className="text-gray-400 hover:text-indigo-400 underline transition-colors">
                                Termos de Serviço
                            </a>{' '}
                            e{' '}
                            <a href="#" className="text-gray-400 hover:text-indigo-400 underline transition-colors">
                                Política de Privacidade
                            </a>.
                        </p>
                    </div>

                    {/* Rodapé */}
                    <div className="mt-10 pt-6 border-t border-gray-800 w-full text-center">
                        <p className="text-sm text-gray-500">
                            Não tem uma conta?{' '}
                            <a href="/cadastro" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                                Cadastre-se
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 