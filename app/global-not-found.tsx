import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 | Oliver Van Droogenbroeck',
}

export default function GlobalNotFound() {
  return (
    <html lang="fr" data-theme="dark">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="mb-8">Page introuvable · Page not found</p>
          <Link href="/fr" className="text-blue-500 hover:underline">
            Retour à l&apos;accueil · Back home
          </Link>
        </div>
      </body>
    </html>
  )
}
