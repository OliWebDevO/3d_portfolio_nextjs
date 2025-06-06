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
