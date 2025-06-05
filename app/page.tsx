// import Image from "next/image";

import Slider from "@/components/models/MaterialUiSlider/Slider";
import NavBar from "@/components/NavBar";
import Contact from "@/sections/Contact";
import ExperienceSection from "@/sections/ExperienceSection";
import FeatureCards from "@/sections/FeatureCards";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import LogoSection from "@/sections/LogoSection";
import ShowcaseSection from "@/sections/ShowcaseSection";
import TechStack from "@/sections/TechStack";
// import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <NavBar/>
        <Hero/>
        <Slider/>
        <ShowcaseSection/>
        <LogoSection/>
        <FeatureCards/>
        <ExperienceSection/>
        <TechStack/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
      </main>
    </>
    
  );
}
