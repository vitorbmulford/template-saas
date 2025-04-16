import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-4xl font-extrabold mb-6">Bem-vindo ao Template SaaS</h1>
      <p className="text-gray-300 mb-8 text-center max-w-md">
        Sua solução moderna e elegante para começar rápido.
      </p>
      <Link href="/login">
        <button className="bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 px-6 py-3 rounded-lg shadow-md hover:shadow-xl text-white font-semibold">
          Acessar Login
        </button>
      </Link>
    </div>
  );
}
