// sections/Hero.tsx
'use client'
import React from "react";
import Button from "../components/Button"
import { useTranslation } from "@/hooks/useTranslation"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import dynamic from "next/dynamic";

const HeroExperience = dynamic(
  () => import("@/components/models/HeroModels/HeroExperience"),
  { ssr: false }
);
const Stable3DModel = React.memo(() => (
  <figure>
    <div className="hero-3d-layout hover:cursor-grab">
      <HeroExperience />
    </div>
  </figure>
));

Stable3DModel.displayName = 'Stable3DModel';

const Hero = () => {
    const { words, t } = useTranslation(); // Get translated words

    useGSAP(() => {
        gsap.fromTo('.hero-text h1', 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
        )
    })

return (
    <section id="hero" className="relative overflow-hidden 3xl:px-20 2xl:px-10 xl:px-6">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>
        <div className="hero-layout">
            {/* LEFT : CONTENT */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>
                            {t.hero.shaping}
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word)=> (
                                        <span key={word.id} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img
                                                src={word.imgPath}
                                                alt={word.text}
                                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>{t.hero.intoRealProjects}</h1>
                        <h1>{t.hero.deliverResults}</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-[50%]">
                        {t.hero.description}
                    </p>
                    <Button 
                        className="md:w-80 md:h-16 w-60 h-12" 
                        text={t.hero.buttonText}
                        href="#work"
                    />
                </div>
            </header>
            {/* RIGHT : 3D MODEL */}
            <Stable3DModel />
        </div>
    </section>
  )
}

export default Hero