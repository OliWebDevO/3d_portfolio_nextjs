'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, navLinks, words, abilities, expCards } from '@/constants';


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];
  const currentNavLinks = navLinks[language]; 
  const currentWords = words[language];
  const currentAbilities = abilities[language];
  const currentExperience = expCards[language];

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      t,
      navLinks: currentNavLinks,
      words: currentWords,
      abilities: currentAbilities,
      expCards: currentExperience
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}