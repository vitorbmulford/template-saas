"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-8 py-4 bg-black/30 backdrop-blur-sm text-white flex justify-between items-center border-b border-gray-700">
      <h1 className="text-xl font-bold">Template SaaS</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link href="/" className="hover:text-indigo-400 transition-colors">
            Início
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="hover:text-indigo-400 transition-colors">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/perfil" className="hover:text-indigo-400 transition-colors">
            Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
}
