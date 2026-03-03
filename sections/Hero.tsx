// sections/Hero.tsx
'use client'
import Image from "next/image";
import Button from "../components/Button"
import { useTranslation } from "@/hooks/useTranslation"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

// 3D model disabled — kept for reference
// import dynamic from "next/dynamic";
// const HeroExperience = dynamic(
//   () => import("@/components/models/HeroModels/HeroExperience"),
//   { ssr: false }
// );

const Hero = () => {
    const { words, t, isFrench } = useTranslation();

    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
        )
    })

return (
    <section id="hero" className="relative overflow-hidden 3xl:px-20 2xl:px-10 xl:px-6">
        <div className="hero-bg absolute top-0 left-0 z-10">
            <Image src="/images/bg.webp" alt="background" width={1920} height={1080} priority quality={80} sizes="100vw" />
        </div>
        <div className="hero-layout">
            {/* LEFT : CONTENT */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-16 md:gap-7">
                    <div className="hero-text mt-8 md:mt-0">
                        <h1>
                            {t.hero.shaping}
                            {isFrench && <br className="md:hidden" />}
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word)=> (
                                        <span key={word.id} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <Image
                                                src={word.imgPath}
                                                alt={word.text}
                                                width={48}
                                                height={48}
                                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full"
                                                style={{ backgroundColor: word.color }}
                                            />
                                            <span style={{ color: word.color }}>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>{t.hero.intoRealProjects}</h1>
                        <h1>{t.hero.deliverResults}</h1>
                    </div>
                    <p className="text-th-muted md:text-xl relative z-10 pointer-events-none md:max-w-[50%]">
                        {t.hero.description}
                    </p>
                    <Button
                        className="md:w-80 md:h-16 w-60 h-12 mb-4 md:mb-0"
                        text={t.hero.buttonText}
                        href="#work"
                    />
                </div>
            </header>
            {/* RIGHT : 3D MODEL — only loaded on desktop (prevents Three.js bundle on mobile) */}
            {/* {isDesktop && (
              <div className={`hero-3d-layout hover:cursor-grab ${isFrench ? 'max-md:top-32' : ''}`}>
                  <HeroExperience />
              </div>
            )} */}
        </div>
    </section>
  )
}

export default Hero