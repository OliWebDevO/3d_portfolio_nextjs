import { Metadata } from "next";
import { projects } from "@/constants";
import NavBar from "@/components/NavBar";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ProjectDetailsSection from "@/sections/ProjectDetailsSection";
import ProjectHero from "@/sections/ProjectHero";

export async function generateStaticParams() {
  return projects.en.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.en.find(p => p.slug === slug);

  return {
    title: `${project?.title || 'Project'} | Oliver Van Droogenbroeck`,
    description: project?.description || 'Project details',
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
      <Contact />
      <Footer />
    </main>
  );
}