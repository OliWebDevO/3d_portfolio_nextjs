import { Metadata } from "next";
import { projects } from "@/constants";
import NavBar from "@/components/NavBar";
// import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ProjectDetailsSection from "@/sections/ProjectDetailsSection";
import ProjectHero from "@/sections/ProjectHero";
import ProjectNavigation from "@/components/ProjectNavigation";
import { alternatesFor, isLocale, locales } from "@/i18n";

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.flatMap(lang => projects[lang].map(project => ({ lang, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const project = projects[lang].find(p => p.slug === slug);

  return {
    title: `${project?.title || 'Project'} | Oliver Van Droogenbroeck`,
    description: project?.description || 'Project details',
    alternates: alternatesFor(lang, `/projects/${slug}`),
    openGraph: {
      title: `${project?.title || 'Project'} | Oliver Van Droogenbroeck`,
      description: project?.description || 'Project details',
      images: project?.image ? [{ url: project.image }] : [],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params before using
  
  return (
    <main>
      <NavBar />
      <ProjectHero slug={slug} />
      <ProjectDetailsSection slug={slug} />
      <ProjectNavigation slug={slug} />
      {/* Spacer to give last-section animations enough scroll room */}
      <div className="h-[5svh] md:h-[10svh]" aria-hidden="true" />
      <Footer />
    </main>
  );
}