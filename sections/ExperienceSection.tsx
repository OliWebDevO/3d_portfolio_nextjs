'use client'
import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { expCards } from "../constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const ExperienceSection = () => {

   useGSAP(() => {
  // Responsive ScrollTrigger 
  ScrollTrigger.matchMedia({
    // Desktop
    "(min-width: 768px)": function() {
    gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%', // earlier trigger
          toggleActions: 'play none none reverse',
        }
      });
    });

    gsap.utils.toArray<HTMLElement>('.expText').forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%', // earlier trigger
          toggleActions: 'play none none reverse',
        }
      });
    });

    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center', // earlier trigger
        end: '70% center',
        scrub: true,
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          })
        }
      }
    });
    },
    // Mobile
    "(max-width: 767px)": function() {
      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
        gsap.from(card, {
          xPercent: -100,
          opacity: 0,
          transformOrigin: 'left left',
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%', // Mobile: original value
            toggleActions: 'play none none reverse',
          }
        });
      });

      gsap.utils.toArray<HTMLElement>('.expText').forEach((text) => {
        gsap.from(text, {
          xPercent: 0,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: text,
            start: 'top 60%', // Mobile: original value
            toggleActions: 'play none none reverse',
          }
        });
      });

      gsap.to('.timeline', {
        transformOrigin: 'bottom bottom',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top center',
          end: '70% center',
          scrub: true,
          onUpdate: (self) => {
            gsap.to('.timeline', {
              scaleY: 1 - self.progress,
            })
          }
        }
      });
    }
  });
    // --- Refresh ScrollTrigger after all images are loaded ---
    const images = Array.from(document.images);
    if (images.length) {
      let loaded = 0;
      images.forEach(img => {
        if (img.complete) {
          loaded++;
        } else {
          img.addEventListener('load', () => {
            loaded++;
            if (loaded === images.length) {
              ScrollTrigger.refresh();
            }
          });
          img.addEventListener('error', () => {
            loaded++;
            if (loaded === images.length) {
              ScrollTrigger.refresh();
            }
          });
        }
      });
      if (loaded === images.length) {
        ScrollTrigger.refresh();
      }
    } else {
      ScrollTrigger.refresh();
    }
    // --------------------------------------------------------

    // --- Listen for 3D model loaded event and refresh ScrollTrigger ---
    const handler = () => ScrollTrigger.refresh();
    window.addEventListener("room-loaded", handler);
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("room-loaded", handler);
    };
    // --------------------------------------------------------


}, []);
    setTimeout(() => {
  ScrollTrigger.refresh();
}, 800); // 800ms is a safe default, adjust as needed


  return (
    <section id="experience" className="w-full section-padding">
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader title='Professional Work Experience' sub='💼  My career Overview' cn="mb-28"/>
            <div className="mt-3 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {expCards.map((card, index) => (
                        <div key={card.title} className="exp-card-wrapper">
                           <div className="xl:w-2/6">
                                <GlowCard card={card} index={index}>
                                    {/* <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div> */}
                                </GlowCard>
                            </div>
                            <div className="xl:w-4/6 ">
                                <div className="flex items-start">
                                    <div className="timeline-wrapper">
                                        <div className="timeline"/>
                                        <div className="gradient-line w-1 h-full"/> 
                                    </div>
                                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                        <div className="timeline-logo xl:translate-x-5 2xl:translate-x-7 3xl:translate-x-10">
                                            <img src={card.logoPath} alt="logo" />
                                        </div>
                                        <div className="">
                                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                                            <p className="my-5 text-white-50">
                                                📅 {card.date}
                                            </p>
                                            <p className="text-[#839cb5] italic">
                                               Responsibilities
                                            </p>
                                            <ul className="list-disc ms-g mt-5 flex flex-col gap-5 text-white-50">
                                                {card.responsibilities.map((responsibility, index) => (
                                                    <li key={index} className="text-lg">
                                                        {responsibility}
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

export default ExperienceSection