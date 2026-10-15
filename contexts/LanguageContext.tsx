'use client';
import { createContext, useContext, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { translations, navLinks, homeNavLinks, words, abilities, homeAbilities, expCards, techStackIcons, techStackImgs, projects, projectDetailsCards, serviceKeywords, processSteps, productCards, faqItems } from '@/constants';


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, lang }: { children: ReactNode; lang: Language }) {
  const language = lang;
  const pathname = usePathname();
  const router = useRouter();

  const handleSetLanguage = (next: Language) => {
    if (next === language) return;
    document.cookie = `lang=${next}; path=/; max-age=31536000; samesite=lax`;
    const rest = pathname.replace(new RegExp(`^/${language}(?=/|$)`), '');
    router.push(`/${next}${rest}${window.location.hash}`);
  };

  const t = translations[language];
  const currentNavLinks = navLinks[language];
  const currentHomeNavLinks = homeNavLinks[language];
  const currentWords = words[language];
  const currentAbilities = abilities[language];
  const currentHomeAbilities = homeAbilities[language];
  const currentExperience = expCards[language];
  const currentTechStackIcons = techStackIcons[language];
  const currentTechStackImgs = techStackImgs[language];
  const currentProjects = projects[language];
  const currentProjectDetails = projectDetailsCards[language];
  const currentServiceKeywords = serviceKeywords[language];
  const currentProcessSteps = processSteps[language];
  const currentProductCards = productCards[language];
  const currentFaqItems = faqItems[language];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      t,
      navLinks: currentNavLinks,
      homeNavLinks: currentHomeNavLinks,
      words: currentWords,
      abilities: currentAbilities,
      homeAbilities: currentHomeAbilities,
      expCards: currentExperience,
      techStackIcons: currentTechStackIcons,
      techStackImgs: currentTechStackImgs,
      projects: currentProjects,
      projectDetailsCards: currentProjectDetails,
      serviceKeywords: currentServiceKeywords,
      processSteps: currentProcessSteps,
      productCards: currentProductCards,
      faqItems: currentFaqItems,
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