import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Landing page</h1>
      <Link href="/login">
        <button className="cursor-pointer">Login</button>
      </Link>
    </div>
  );
}
