'use client'
import Image from "next/image"
import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslation } from "@/hooks/useTranslation"
import { useRef } from "react"

const stepLogos = [
  "/images/steps/step1.svg",
  "/images/steps/step2.svg",
  "/images/steps/step3.svg",
  "/images/steps/step4.svg",
  "/images/steps/step5.svg",
  "/images/steps/step6.svg",
  "/images/steps/step7.svg",
];

const stepGradients = [
  "from-[#a78bfa] to-[#3b1f7e]", // soft purple
  "from-[#818cf8] to-[#2e1a6e]", // indigo
  "from-[#e879a8] to-[#6e1a3d]", // rose
  "from-[#f472b6] to-[#831843]", // pink
  "from-[#60a5fa] to-[#1e3a5f]", // blue
  "from-[#38bdf8] to-[#0c4a6e]", // sky
  "from-[#67e8f9] to-[#083344]", // cyan
];

gsap.registerPlugin(ScrollTrigger)

const StepsSection = () => {
  const { t, processSteps, locale } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Cards animation
    gsap.utils.toArray<HTMLElement>('.step-timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      });
    });

    // Text animation
    gsap.utils.toArray<HTMLElement>('.step-text').forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      });
    });

    // Timeline (black background) - shrinks as you scroll
    gsap.to('.step-timeline', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        invalidateOnRefresh: true,
      },
      scaleY: 0,
      transformOrigin: 'bottom center',
      ease: 'none',
    });

    const timeoutId = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(timeoutId);
  }, { scope: sectionRef, dependencies: [locale], revertOnUpdate: true });

  return (
    <section id="process" ref={sectionRef} className="w-full section-padding">
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader title={t.home.process.title} sub={t.home.process.subtitle} cn="mb-28"/>
            <div className="mt-3 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {processSteps.map((step, index) => (
                        <div key={`${step.title}-${locale}`} className="exp-card-wrapper">
                           <div className="xl:w-2/6 step-timeline-card relative z-50 md:z-auto">
                                <GlowCard card={{ review: step.review }} index={index}>
                                </GlowCard>
                            </div>
                            <div className="xl:w-4/6">
                                <div className="flex items-start">
                                    <div className="timeline-wrapper">
                                        <div className="step-timeline timeline"/>
                                        <div className="gradient-line w-1 h-full"/>
                                    </div>
                                    <div className="step-text flex xl:gap-20 md:gap-10 gap-5 relative z-20 min-w-0">
                                        <div className="flex-none flex flex-col items-center">
                                            <div className="timeline-logo xl:translate-x-5 2xl:translate-x-7 3xl:translate-x-10">
                                                <Image src={stepLogos[index % stepLogos.length]} alt="" width={60} height={60} loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="min-w-0 max-w-[calc(100vw-8rem)] md:max-w-none">
                                            <h1 className="font-semibold text-3xl flex gap-3 md:h-20 h-10 items-baseline mb-5 md:-translate-y-6 -translate-y-2">
                                                <span className={`text-5xl md:text-7xl font-black bg-gradient-to-b ${stepGradients[index % stepGradients.length]} bg-clip-text text-transparent`}>
                                                    {step.number}
                                                </span>
                                                <span className="-translate-y-1 hidden md:inline">{step.title}</span>
                                                <span className="-translate-y-1 md:hidden">{step.shortTitle}</span>
                                            </h1>
                                            <div className="border border-white/20 rounded-xl p-5 flex flex-col gap-3">
                                                {step.checkpoints.map((point, i) => (
                                                    <div key={i} className="flex items-start gap-3">
                                                        <div className="flex-none mt-1 w-5 h-5 rounded-md bg-black-200 border border-black-300 flex items-center justify-center">
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                        </div>
                                                        <p className="text-white-50 text-lg">{point}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default StepsSection
