'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, navLinks, words, abilities, expCards, techStackIcons, projects, projectDetailsCards } from '@/constants';


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;

    if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
      // User has a saved preference, use it
      setLanguage(savedLanguage);
    } else {
      // First visit: detect browser language
      const browserLang = navigator.language.toLowerCase();
      const detectedLang: Language = browserLang.startsWith('fr') ? 'fr' : 'en';
      setLanguage(detectedLang);
      localStorage.setItem('language', detectedLang);
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
  const currentTechStackIcons = techStackIcons[language];
  const currentProjects = projects[language];
  const currentProjectDetails = projectDetailsCards[language];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      t,
      navLinks: currentNavLinks,
      words: currentWords,
      abilities: currentAbilities,
      expCards: currentExperience,
      techStackIcons: currentTechStackIcons,
      projects: currentProjects,
      projectDetailsCards: currentProjectDetails,
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