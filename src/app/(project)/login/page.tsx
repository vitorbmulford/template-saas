import { handleAuth } from "@/app/actions/handle-auth";

export default async function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            <div className="bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-md w-full text-center border border-gray-700">
                <h1 className="text-4xl font-extrabold mb-4">Bem-vindo</h1>
                <p className="text-gray-300 mb-8 text-base">
                    Faça login com sua conta do Google para continuar
                </p>
                <form action={handleAuth}>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 text-white font-medium bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 ease-in-out rounded-md shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        Entrar com Google
                    </button>
                </form>
            </div>
        </div>
    );
}
