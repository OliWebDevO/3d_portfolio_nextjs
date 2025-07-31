import { useLanguage } from '@/contexts/LanguageContext';

export function useTranslation(): UseTranslationReturn {
  const { language, t, navLinks, words } = useLanguage();
  
  return { 
    t, 
    locale: language,
    isEnglish: language === 'en',
    isFrench: language === 'fr',
    navLinks,
    words
  };
}