// sections/ProjectHero.tsx
'use client'
import Image from "next/image";
import { useParams } from "next/navigation";
// Remove this line: import { projects } from "@/constants";
import { useTranslation } from "@/hooks/useTranslation"; // Add this
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectButton from "@/components/ProjectButton";

gsap.registerPlugin(ScrollTrigger);

function getSlug(param: string | string[] | undefined): string {
  if (Array.isArray(param)) return param[0];
  return param || "";
}

export default function ProjectHero({ slug: staticSlug }: { slug?: string }) {
  const { projects, t } = useTranslation(); // Add this to get translated projects
  
  // Always call useParams
  const params = useParams();
  const paramSlug = getSlug(params?.slug);

  // Prefer staticSlug if provided, otherwise use paramSlug
  const slug = staticSlug || paramSlug;
  const project = projects.find((p) => p.slug === slug); // Remove .en since projects is now an array

  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(() => {
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
    <>
    <section className="detail-hero">
      <div className="detail-hero__layout">
        <div className="detail-hero__media" style={{ background: project.bg }}>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            quality={80}
            sizes="(min-width: 1280px) 55vw, 100vw"
            loading="lazy"
            className="rounded-xl card-border card-inverted card-frame p-5 block"
          />
        </div>
        <div className="detail-hero__content">
          <div className="tech-logos flex gap-4">
            {project.techLogos && project.techLogos.map((logo, idx) => (
              <Image
                key={logo}
                src={logo}
                alt={`Tech logo ${idx + 1}`}
                width={80}
                height={80}
                loading="lazy"
                ref={el => {logoRefs.current[idx] = el}}
              />
            ))}
          </div>
          <h1 className="detail-hero__title">{project.title}</h1>
          <p className="detail-hero__desc">{project.description}</p>
          <ProjectButton className="md:w-96 md:h-16 w-72 h-14" text={t.projectpage.visitProject} href={project.link}/>
        </div>
      </div>
    </section>
    </>
  );
}