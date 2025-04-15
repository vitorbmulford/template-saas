// components/Nav.tsx
"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full px-8 py-4 bg-transparent text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Template SaaS</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}
