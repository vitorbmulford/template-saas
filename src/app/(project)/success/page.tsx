"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import confetti from "canvas-confetti"

export default function SuccessPage() {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        })
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-6 py-12">
            <div className="max-w-2xl w-full bg-gray-800 dark:bg-gray-900 rounded-2xl shadow-xl p-10 text-center transition-colors duration-300">
                <CheckCircle className="mx-auto h-20 w-20 text-green-500 mb-6" />
                <h1 className="text-3xl font-bold text-white mb-4">
                    Compra realizada com sucesso! 🎉
                </h1>
                <p className="text-gray-300 text-lg mb-6">
                    Obrigado por confiar em nosso produto. Sua compra foi confirmada e já está tudo pronto para você começar!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <Link href="/dashboard">
                        <Button className="w-full sm:w-auto">Acessar Dashboard</Button>
                    </Link>
                    <Link href="/">
                        <Button variant="outline" className="w-full sm:w-auto">Voltar à Home</Button>
                    </Link>
                </div>

                <p className="text-sm text-gray-500 mt-8">
                    Se tiver dúvidas, entre em contato com o nosso suporte 💬
                </p>
            </div>
        </div>
    )
}
