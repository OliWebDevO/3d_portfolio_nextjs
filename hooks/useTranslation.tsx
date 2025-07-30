import { useLanguage } from '@/contexts/LanguageContext';

export function useTranslation() {
  const { language, t, navLinks } = useLanguage();
  
  return { 
    t, 
    locale: language,
    isEnglish: language === 'en',
    isFrench: language === 'fr',
    navLinks
  };
}