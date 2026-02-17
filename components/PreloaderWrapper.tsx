'use client';
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";

const Preloader = dynamic(
  () => import("@/components/Lottie/LottiePreloader"),
  { ssr: false }
);

const Slider = dynamic(() => import("@/components/models/MaterialUiSlider/Slider"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "80svh" }} />,
});
const ShowcaseSection = dynamic(() => import("@/sections/ShowcaseSection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "100svh" }} />,
});
const LogoSection = dynamic(() => import("@/sections/LogoSection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "20svh" }} />,
});
const FeatureCards = dynamic(() => import("@/sections/FeatureCards"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "40svh" }} />,
});
const ExperienceSection = dynamic(() => import("@/sections/ExperienceSection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "100svh" }} />,
});
const TechStack = dynamic(() => import("@/sections/TechStack"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "60svh" }} />,
});
const Contact = dynamic(() => import("@/sections/Contact"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "60svh" }} />,
});
const Footer = dynamic(() => import("@/sections/Footer"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "10svh" }} />,
});

export default function PreloaderWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoading(false);
      return;
    }

    const isMobile = window.innerWidth <= 768;

    // On mobile, no 3D loads — skip preloader immediately
    if (isMobile) {
      setLoading(false);
      localStorage.setItem("hasVisited", "true");
      return;
    }

    const handleRoomLoaded = () => {
      setLoading(false);
      localStorage.setItem("hasVisited", "true");
    };

    window.addEventListener("room-loaded", handleRoomLoaded);

    const timeout = setTimeout(() => {
      setLoading(false);
      localStorage.setItem("hasVisited", "true");
    }, 5000);

    return () => {
      window.removeEventListener("room-loaded", handleRoomLoaded);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <main>
        <NavBar />
        <Hero />
        <Slider />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
