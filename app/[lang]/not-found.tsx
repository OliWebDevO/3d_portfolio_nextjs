'use client'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function NotFound() {
  const { t, locale } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">{t.common.notFoundTitle}</h1>
      <p className="text-th-muted mb-8">{t.common.notFoundText}</p>
      <Link href={`/${locale}`} className="text-blue-500 hover:underline">
        {t.common.backHome}
      </Link>
    </div>
  )
}
