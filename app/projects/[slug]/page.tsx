import { projects } from "@/constants";
import NavBar from "@/components/NavBar";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ProjectDetailsSection from "@/sections/ProjectDetailsSection";
import ProjectHero from "@/sections/ProjectHero";

export async function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <NavBar />
      <ProjectHero slug={params.slug} />
      <ProjectDetailsSection slug={params.slug} />
      <Contact />
      <Footer />
    </main>
  );
}