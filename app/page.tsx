// import Image from "next/image";
'use client';
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
import Preloader from "@/components/Lottie/LottiePreloader";
import { useEffect, useState } from "react";
// import Testimonials from "@/sections/Testimonials";

export default function Home() {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Your asset loading logic here
    setTimeout(() => setLoading(false), 2000); // Example: 2s delay
  }, []);
  return (

    <>
     {loading && <Preloader />}
      <main style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}>
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
