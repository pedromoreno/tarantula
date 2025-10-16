'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/logo_negro.png" alt="Tarantula Studio" className="h-6 w-auto dark:hidden" />
        <img src="/logo_blanco.png" alt="Tarantula Studio" className="hidden h-6 w-auto dark:block" />
        <Link href="/" className="font-medium text-black dark:text-white">
          Tarantula Studio
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Estudio Creativo
        </TextEffect>
      </div>
    </header>
  )
}
