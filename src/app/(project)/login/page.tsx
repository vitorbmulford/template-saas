import { handleAuth } from "@/app/actions/handle-auth";

export default async function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-10">Login</h1>
            <form
                action={handleAuth}
            >
                <button className="cursor-pointer border rounded-md px-2 bg-gray-200 " type="submit">Signin with Google</button>
            </form>
        </div>
    )
}