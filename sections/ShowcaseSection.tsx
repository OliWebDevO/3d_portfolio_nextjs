'use client'
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { projects } from "@/constants";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 0.3 * (index + 0.3),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            // toggleActions: "play none none reset",
          },
        }
      );
    });

    gsap.fromTo(
      showcaseRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  // Split projects for layout: first two on left, others stacked right
  const leftProjects = projects.slice(0, 2);
  const rightProjects = projects.slice(2);

  return (
    <section id="work" className="app-showcase" ref={showcaseRef}>
      <div className="w-full  xxl:px-40">
        <div className="showcaselayout xl:flex xl:gap-10 block">
          {/* LEFT : First two projects */}
          <div className="first-project-wrapper xl:w-[60%] w-full mb-10 xl:mb-0 flex flex-col gap-10">
            {leftProjects.map((project, idx) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="project-card group flex-1 rounded-xl transition-transform duration-300"
              >
                <div
                  ref={el => { cardRefs.current[idx] = el; }}
                  className="image-wrapper group relative overflow-hidden rounded-xl"
                  style={{ background: project.bg }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1800}
                    height={1200}
                    className="rounded-xl object-contain main-img"
                  />
                  <div className="showcase-animated-bg flex items-center justify-center">
                    {project.techLogos &&
                      project.techLogos.map((logo, logoIdx) => (
                        <Image
                          key={logo}
                          src={logo}
                          alt={`Tech logo ${logoIdx + 1}`}
                          width={80}
                          height={80}
                          className="opacity-100 hover:opacity-80 hover:scale-90  duration-500 transition-all-ease-in-out"
                        />
                      ))}
                  </div>
                </div>
                <div className="text-content flex flex-col justify-center mt-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{project.title}</h2>
                  <p className="text-white-50 md:text-xl mt-4">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          {/* RIGHT : Other projects stacked */}
          <div className="project-list-wrapper flex flex-col gap-10 xl:w-[40%] w-full">
            {rightProjects.map((project, idx) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="project-card group flex-1 rounded-xl transition-transform duration-300"
              >
                <div
                  ref={el => { cardRefs.current[idx + leftProjects.length] = el; }}
                  className="image-wrapper group relative overflow-hidden rounded-xl"
                  style={{ background: project.bg }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className=" main-img "
                  />
                  <div className="showcase-animated-bg flex items-center justify-center">
                    {project.techLogos &&
                      project.techLogos.map((logo, logoIdx) => (
                        <Image
                          key={logo}
                          src={logo}
                          alt={`Tech logo ${logoIdx + 1}`}
                          width={80}
                          height={80}
                          className="opacity-100 hover:opacity-80 hover:scale-90 duration-500 transition-all-ease-in-out"
                        />
                      ))}
                  </div>
                </div>
                <div className="text-content flex flex-col justify-center mt-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{project.title}</h2>
                  <p className="text-white-50 md:text-xl mt-4">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;