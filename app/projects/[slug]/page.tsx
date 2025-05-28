'use client'

import NavBar from "@/components/NavBar";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ProjectDetailsSection from "@/sections/ProjectDetailsSection";
import ProjectHero from "@/sections/ProjectHero";


export default function ProjectPage() {
    return (
        <main>
            <NavBar />
            <ProjectHero />
            <ProjectDetailsSection />
            <Contact />
            <Footer />
        </main>
    );
}