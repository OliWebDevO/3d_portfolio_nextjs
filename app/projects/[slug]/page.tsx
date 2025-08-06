import { projects } from "@/constants";
import NavBar from "@/components/NavBar";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ProjectDetailsSection from "@/sections/ProjectDetailsSection";
import ProjectHero from "@/sections/ProjectHero";

export async function generateStaticParams() {
  return projects.en.map(project => ({ slug: project.slug }));
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