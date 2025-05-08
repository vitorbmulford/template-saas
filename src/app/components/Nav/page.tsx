"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";

export default function Nav() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession()
      .then((sess) => setSession(sess))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <nav className="w-full fixed top-0 left-0 z-50 px-8 py-4 bg-black/30 backdrop-blur-sm text-white flex justify-between items-center border-b border-gray-700">
        <h1 className="text-xl font-bold">Template SaaS</h1>
        <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse"></div>
      </nav>
    );
  }

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-8 py-4 bg-black/30 backdrop-blur-sm text-white flex justify-between items-center border-b border-gray-700">
      <h1 className="text-xl font-bold">Template SaaS</h1>

      <ul className="flex gap-6 text-sm font-medium items-center">
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
        {session ? (
          <li className="flex flex-col items-center gap-1">
            <Link href="/perfil" className="flex flex-col items-center hover:text-indigo-400 transition-colors">
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full border border-gray-500 "
                  priority
                />
              )}
            </Link>
          </li>

        ) : (
          <li>
            <Link
              href="/login"
              className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2 rounded-md text-white text-sm font-medium"
            >
              Entrar
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}