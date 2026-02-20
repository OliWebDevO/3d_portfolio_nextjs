'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const { language, setLanguage } = useLanguage();

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-1 border rounded-lg p-1 ${
      isLight ? 'border-black-300/30 bg-black/5' : 'border-black-50 bg-black-100'
    }`}>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? isLight ? 'bg-black text-white' : 'bg-white text-black'
            : isLight ? 'bg-transparent text-black-300 hover:text-black' : 'bg-transparent text-white-50 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'fr'
            ? isLight ? 'bg-black text-white' : 'bg-white text-black'
            : isLight ? 'bg-transparent text-black-300 hover:text-black' : 'bg-transparent text-white-50 hover:text-white'
        }`}
      >
        FR
      </button>
    </div>
  );
}
