'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-black-50 rounded-lg p-1 bg-black-100">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-white text-black' 
            : 'bg-transparent text-white-50 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'fr'
            ? 'bg-white text-black' 
            : 'bg-transparent text-white-50 hover:text-white'
        }`}
      >
        FR
      </button>
    </div>
  );
}