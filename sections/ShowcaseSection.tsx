'use client'
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

  const showcaseRef = useRef<HTMLDivElement>(null);
  const projectOneRef = useRef<HTMLDivElement>(null);
  const projectTwoRef = useRef<HTMLDivElement>(null);
  const projectThreeRef = useRef<HTMLDivElement>(null);

  

  useGSAP(() => {

    const projects = [projectOneRef.current, projectTwoRef.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reset",
          },
        }
      )
    });
    
    gsap.fromTo(
      projectThreeRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: projectThreeRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      showcaseRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
       
      }
    );

  }, [])


  return (
    <section id="work" className="app-showcase" ref={showcaseRef}>
        <div className="w-full">
            <div className="showcaselayout">
              {/* LEFT */}
              <div className="first-project-wrapper" ref={projectOneRef}>
                <div className="image-wrapper group relative overflow-hidden">
                  <img src="/images/project1.png" alt="Ryde" />
                  <div className="showcase-animated-bg"></div>
                </div>
                <div className="text-content">
                  <h2>Ryde : On-demand rides made simple with powerful, userfriendly UI</h2>
                  <p className="text-white-50 md:text-xl">A car-sharing platform that connects drivers with available cars in their area.</p>
                </div>
              </div>
              {/* RIGHT */}
              <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={projectTwoRef}>
                  <div className="image-wrapper bg-[#ffefdb] group relative overflow-hidden">
                    <img src="/images/project2.png" alt="library management system" />
                    <div className="showcase-animated-bg"></div>
                  </div>
                  <div className="text-content">
                    <h2>Library Management System</h2>
                    <p className="text-white-50 md:text-xl">Streamlining book management for libraries</p>
                  </div>
                </div>
                 <div className="project" ref={projectThreeRef}>
                  <div className="image-wrapper bg-[#ffe7eb] group relative overflow-hidden">
                    <img src="/images/project3.png" alt="yc directory" />
                    <div className="showcase-animated-bg"></div>
                  </div>
                  <div className="text-content">
                    <h2>YC Directory </h2>
                    <p className="text-white-50 md:text-xl">Discover and connect with top startups</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection