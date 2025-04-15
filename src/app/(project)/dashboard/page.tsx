import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import Image from "next/image";

export default async function Dashboard() {
    const session = await auth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4">
            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full flex flex-col items-center space-y-6">
                <Image
                    src={session?.user?.image || "/placeholder-avatar.png"}
                    alt="Foto do usuário"
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-indigo-300 shadow-md"
                />
                <h1 className="text-1xl font-extrabold text-indigo-700">
                    Bem-vindo, {session?.user?.name || "Usuário"}
                </h1>
                <p className="text-gray-600 text-lg">
                    {session?.user?.email || "Email não disponível"}
                </p>
                {
                    session?.user?.email && (
                        <form
                            action={handleAuth}
                        >
                            <button
                                className="text-white cursor-pointer rounded-md px-2 py-1 bg-red-600"
                                type="submit"
                            >
                                Logout
                            </button>

                        </form>
                    )
                }
            </div>
        </div>
    );
}
