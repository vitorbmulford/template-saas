import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4 text-white">
            <div className="bg-gray-800/80 backdrop-blur-md shadow-lg rounded-2xl p-10 max-w-md w-full flex flex-col items-center space-y-6 border border-gray-700">
                <Image
                    src={session?.user?.image || "/placeholder-avatar.png"}
                    alt="Foto do usuário"
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-gray-600 shadow-md"
                />
                <h1 className="text-2xl font-bold">
                    Olá, {session?.user?.name || "Usuário"}
                </h1>
                <p className="text-gray-300 text-sm">
                    {session?.user?.email || "Email não disponível"}
                </p>

                {session?.user?.email && (
                    <form action={handleAuth}>
                        <button
                            className="mt-4 bg-red-600 hover:bg-red-500 transition-colors duration-200 text-white font-medium px-4 py-2 rounded-md"
                            type="submit"
                        >
                            Logout
                        </button>
                    </form>
                )}
                <Link href="/pagamentos">Pagementos</Link>
            </div>
        </div>
    );
}
