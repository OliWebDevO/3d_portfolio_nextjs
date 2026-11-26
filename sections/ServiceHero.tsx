import Image from "next/image";
import ProjectButton from "@/components/ProjectButton";
import type { ServiceType } from "@/constants/services";

// Same layout as ProjectHero (classes from .app-showcase), with the price and a quote button
export default function ServiceHero({ service, cta, quoteHref }: { service: ServiceType; cta: string; quoteHref: string }) {
  return (
    <section className="app-showcase min-h-screen flex items-center justify-center mobile-padding">
      <div className="showcaselayout flex flex-col md:flex-row gap-10">
        <div className="image-wrapper group relative overflow-hidden rounded-xl h-fit bg-th-surface-alt">
          <Image
            src={service.image}
            alt={service.name}
            width={600}
            height={400}
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
            fetchPriority="high"
            className="rounded-xl card-border card-inverted card-frame p-5 block"
          />
        </div>
        <div className="text-content flex flex-col justify-center gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{service.title}</h1>
          <p className="text-th-muted md:text-xl mt-4">{service.description}</p>
          <p className="text-xl md:text-2xl font-semibold mt-4">{service.priceLabel}</p>
          <ProjectButton className="md:w-80 md:h-16 w-60 h-12" text={cta} href={quoteHref} />
        </div>
      </div>
    </section>
  );
}
