'use client'
import { projectDetailsCards } from "../constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GlowCardDetails from "@/components/GlowCardDetails"
import { useParams } from "next/navigation"


gsap.registerPlugin(ScrollTrigger)

const ProjectDetailsSection = () => {

    const { slug } = useParams<{ slug: string }>();
    const details = projectDetailsCards.find(p => p.slug === slug)?.cards;


    useGSAP(() => {

        gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            })
        });

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress,
                    })
                }
            }
        });

        gsap.utils.toArray<HTMLElement>('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                }
            })
        })
        
    }, [] )

  return (
    <section id="experience" className="w-full md:mt-4 mt2 xl:px-0 section-padding">
        <div className="w-full h-full md:px-20 px-5">
            <div className="mt-3 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {details?.map((card, index) => (
                        <div key={card.title} className="exp-card-wrapper">
                           <div className="xl:w-2/6">
                                <GlowCardDetails card={card} index={index}>
                                    <div>
                                        <img src={card.imgPath} alt={card.imgPath} />
                                    </div>
                                </GlowCardDetails>
                            </div>
                            <div className="xl:w-4/6 ">
                                <div className="flex items-start">
                                    <div className="timeline-wrapper">
                                        <div className="timeline"/>
                                        <div className="gradient-line w-1 h-full"/> 
                                    </div>
                                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                        <div className="timeline-logo">
                                            <img src={card.logoPath} alt="logo" />
                                        </div>
                                        <div className="">
                                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                                            {/* <p className="my-5 text-white-50">
                                                📅 {card.date}
                                            </p> */}
                                            <p className="text-[#839cb5] italic">
                                               Responsibilities
                                            </p>
                                            <ul className="list-disc ms-g mt-5 flex flex-col gap-5 text-white-50">
                                                {card.details?.map((detail, index) => (
                                                    <li key={index} className="text-lg">
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
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

export default ProjectDetailsSection