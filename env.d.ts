interface ButtonProps {
  className?: string; 
  id?: string;
  text?: string;
  href?: string;
}
interface ButtonProjectProps {
  className?: string; 
  text?: string;
  href: string;
}

interface LogoIconType {
  imgPath: string;
}
interface TitleHeaderProps {
  title: string;
  sub?: string;
  cn?: string;
}

interface CardType {
  review: string;
  imgPath?: string;
  name?: string;
  logoPath?: string;
  title?: string;
  date?: string;
  responsibilities?: string[];
}

interface GlowCardProps {
  card: CardType;
  children?: ReactNode;
  index: number;
}

interface ModelType {
  model: TechIconType;
}

interface TechIconType {
  name: string;
  modelPath: string;
  scale: number;
  rotation: number[];
}
interface ProjectType {
  title: string;
  slug: string;
  description: string;
  image: string;
  bg: string;
  techLogos?: string[];
}


interface WordType {
  id: number;
  text: string;
  imgPath: string;
}


interface WordsType {
  en: WordType[];
  fr: WordType[];
}

interface NavTranslations {
  contact: string;
}

interface AbilityType {
  imgPath: string;
  title: string;
  desc: string;
}

interface AbilitiesTranslations {
  en: AbilityType[];
  fr: AbilityType[];
}

interface ExpCardType {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

interface ExpCardsType {
  en: ExpCardType[];
  fr: ExpCardType[];
}

interface HeroTranslations {
  shaping: string;
  intoRealProjects: string;
  deliverResults: string;
  description: string;
  buttonText: string;
}

interface SliderTranslations {
  title: string;
  subtitle: string;
}

interface ShowcaseTranslations {
  title: string;
  subtitle: string;
}



interface ProjectsTranslations {
  library: ProjectTranslations;
  artgallery: ProjectTranslations;
  portfolio: ProjectTranslations;
  lenoyer: ProjectTranslations;
  annick: ProjectTranslations;
  [key: string]: ProjectTranslations
}

interface ProjectTranslations {
  title: string;
  description: string;
}

interface SkillsTranslations {
  title: string;
  subtitle: string;
}
interface ExperienceTranslations {
  title: string;
  subtitle: string;
  resp: string;
}

interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  slider: SliderTranslations;
  showcase: ShowcaseTranslations;
  projects: ProjectsTranslations;
  skills: SkillsTranslations;
  experience: ExperienceTranslations;
}


type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  navLinks: { name: string; link: string }[];
  words: WordType[];
  abilities: AbilityType[];
  expCards: ExpCardType[];
}

interface UseTranslationReturn {
  t: Translations;
  locale: Language;
  isEnglish: boolean;
  isFrench: boolean;
  navLinks: { name: string; link: string }[];
  words: WordType[];
  abilities: AbilityType[];
  expCards: ExpCardType[];
}