'use client'
import { useParams } from "next/navigation";
import Image from "next/image";
import { projects } from "@/constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectButton from "@/components/ProjectButton";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectHero() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(() => {
    // Kill previous triggers to avoid duplicates
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (logoRefs.current.length) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".tech-logos",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      });
      tl.fromTo(
        logoRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [project?.techLogos]);

  if (!project) return <div>Project not found.</div>;

  return (
    <section className="app-showcase min-h-screen flex items-center justify-center">
      <div className="showcaselayout flex flex-col md:flex-row gap-10">
        <div className="image-wrapper group relative overflow-hidden rounded-xl" style={{ background: project.bg }}>
          <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-xl  card-border p-5" />
        </div>
        <div className="text-content flex flex-col justify-center gap-4">
          <div className="tech-logos flex gap-4 mb-3">
            {project.techLogos && project.techLogos.map((logo, idx) => (
              <Image
                key={logo}
                src={logo}
                alt={`Tech logo ${idx + 1}`}
                width={80}
                height={80}
                ref={el => {logoRefs.current[idx] = el}}
              />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{project.title}</h2>
          <p className="text-white-50 md:text-xl mt-4">{project.description}</p>
          <ProjectButton className="md:w-80 md:h-16 w-60 h-12" text="Visit Project" href={project.link}/>
        </div>
      </div>
    </section>
  );
}