'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(fr|en)(?=\/|$)/, '');

  const isLight = variant === 'light';

  return (
    <div suppressHydrationWarning className="flex items-center gap-1 rounded-lg p-1"
      style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.05)' : 'var(--color-surface)' }}
    >
      <Link
        href={`/en${rest}`}
        hrefLang="en"
        aria-current={language === 'en' ? 'true' : undefined}
        onClick={(e) => { e.preventDefault(); setLanguage('en'); }}
        suppressHydrationWarning
        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? isLight ? 'bg-black text-white' : ''
            : isLight ? 'bg-transparent text-black-300 hover:text-black' : 'bg-transparent'
        }`}
        style={
          !isLight
            ? language === 'en'
              ? { backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }
              : { color: 'var(--color-text-muted)' }
            : undefined
        }
      >
        EN
      </Link>
      <Link
        href={`/fr${rest}`}
        hrefLang="fr"
        aria-current={language === 'fr' ? 'true' : undefined}
        onClick={(e) => { e.preventDefault(); setLanguage('fr'); }}
        suppressHydrationWarning
        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'fr'
            ? isLight ? 'bg-black text-white' : ''
            : isLight ? 'bg-transparent text-black-300 hover:text-black' : 'bg-transparent'
        }`}
        style={
          !isLight
            ? language === 'fr'
              ? { backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }
              : { color: 'var(--color-text-muted)' }
            : undefined
        }
      >
        FR
      </Link>
    </div>
  );
}
