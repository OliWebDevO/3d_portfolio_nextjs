'use client'
import { useParams } from "next/navigation";

import Image from "next/image";
import { projects } from "@/constants";

export default function ProjectHero() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found.</div>;

  return (
    <section className="app-showcase min-h-screen flex items-center justify-center">
      <div className="showcaselayout flex flex-col md:flex-row gap-10">
        <div className="image-wrapper group relative overflow-hidden rounded-xl" style={{ background: project.bg }}>
          <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-xl object-contain" />
            {/* <div className="showcase-animated-bg flex items-center justify-center">
                {project.techLogos && project.techLogos.map((logo, idx) => (
                    <Image
                    key={logo}
                    src={logo}
                    alt={`Tech logo ${idx + 1}`}
                    width={80}
                    height={80}
                    className="opacity-100 hover:opacity-80 hover:scale-90  duration-500 transition-all-ease-in-out"
                    />
                ))}
            </div> */}
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
                    />
                ))}
            </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{project.title}</h2>
          <p className="text-white-50 md:text-xl mt-4">{project.description}</p>
          {/* Add more details here if you want */}
        </div>
      </div>
    </section>
  );
}