'use client'

import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import ProjectDetailsSection from "@/sections/ProjectDetailsSection";
import ProjectHero from "@/sections/ProjectHero";


export default function ProjectPage() {
    return (
        <main>
            <NavBar />
            <ProjectHero />
            <ProjectDetailsSection />
            <Footer />
        </main>
    );
}