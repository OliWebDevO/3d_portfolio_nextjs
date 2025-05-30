'use client'
// import AnimatedCounter from "../components/AnimatedCounter"
import Button from "../components/Button"
import HeroExperience from "@/components/models/HeroModels/HeroExperience"
import { words } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"

const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h1', 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
        )
    })

  return (
    <section id="hero" className="relative overflow-hidden xxl:px-40">
        <div className="absolute top-0 left-0 z-10">
            <Image src="/images/bg.png" alt="background" width={300} height={250} priority />
        </div>
        <div className="hero-layout">
            {/* LEFT : CONTENT */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>
                            Shapping 
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word)=> (
                                        <span key={word.id} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <Image
                                                src={word.imgPath}
                                                alt={word.text}
                                                width={48}
                                                height={48}
                                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>Into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Hi I'm Oliver, a developer based in Belgium 
                    <br /> with a passion for creating immersive designs.</p>
                    <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See My Work" href="#work"/>
                </div>
            </header>
            {/* RIGHT : 3D MODEL */}
            <figure>
                <div className="hero-3d-layout hover:cursor-grab">
                    <HeroExperience />
                </div>
            </figure>
        </div>
        {/* <AnimatedCounter /> */}
    </section>
  )
}

export default Hero