import Image from "next/image";
import ProjectButton from "@/components/ProjectButton";
import type { ServiceType } from "@/constants/services";

// Same layout as ProjectHero (.detail-hero), with the price crest and a quote button
export default function ServiceHero({ service, cta, priceCaption, quoteHref }: { service: ServiceType; cta: string; priceCaption: string; quoteHref: string }) {
  return (
    <section className="detail-hero">
      <div className="detail-hero__layout">
        <div className="detail-hero__media bg-th-surface-alt">
          <Image
            src={service.image}
            alt={service.name}
            width={1200}
            height={800}
            quality={80}
            sizes="(min-width: 1280px) 55vw, 100vw"
            loading="eager"
            fetchPriority="high"
            className="rounded-xl card-border card-inverted card-frame p-5 block"
          />
        </div>
        <div className="detail-hero__content">
          <h1 className="detail-hero__title">{service.title}</h1>
          <p className="detail-hero__desc">{service.description}</p>
          <div className="price-badge">
            <span className="price-badge__crest" aria-hidden="true">
              {/* Price tag icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12.6V4.5A1.5 1.5 0 0 1 4.5 3h8.1a1.5 1.5 0 0 1 1.06.44l7.5 7.5a1.5 1.5 0 0 1 0 2.12l-8.1 8.1a1.5 1.5 0 0 1-2.12 0l-7.5-7.5A1.5 1.5 0 0 1 3 12.6Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
                <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
              </svg>
            </span>
            <span>
              <span className="price-badge__caption">{priceCaption}</span>
              <span className="price-badge__amount">{service.priceLabel}</span>
            </span>
          </div>
          <ProjectButton className="md:w-[26rem] md:h-16 w-72 h-14" text={cta} href={quoteHref} />
        </div>
      </div>
    </section>
  );
}
