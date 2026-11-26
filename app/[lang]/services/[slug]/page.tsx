import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, serviceUi } from "@/constants/services";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import ServiceHero from "@/sections/ServiceHero";
import ProjectDetailsSection from "@/sections/ProjectDetailsSection";
import StepsSection from "@/sections/StepsSection";
import FAQSection from "@/sections/FAQSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import { alternatesFor, isLocale, locales } from "@/i18n";

export const dynamicParams = false;

const SITE = "https://www.olivervdb.com";

export async function generateStaticParams() {
  return locales.flatMap(lang => services[lang].map(service => ({ lang, slug: service.slug })));
}

function findService(lang: string, slug: string) {
  return isLocale(lang) ? services[lang].find(s => s.slug === slug) : undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const service = findService(lang, slug);
  if (!isLocale(lang) || !service) return {};
  const title = `${service.title} | Oliver Van Droogenbroeck`;

  return {
    title,
    description: service.metaDescription,
    alternates: alternatesFor(lang, `/services/${slug}`),
    openGraph: {
      url: `/${lang}/services/${slug}`,
      locale: lang === 'fr' ? 'fr_BE' : 'en_US',
      alternateLocale: [lang === 'fr' ? 'en_US' : 'fr_BE'],
      title,
      description: service.metaDescription,
      images: [{ url: service.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const service = findService(lang, slug);
  if (!isLocale(lang) || !service) notFound();

  const ui = serviceUi[lang];
  const url = `${SITE}/${lang}/services/${slug}`;
  const quoteHref = `mailto:contact@olivervdb.com?subject=${encodeURIComponent(`${ui.quoteSubject} : ${service.name}`)}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.title,
      serviceType: service.name,
      description: service.metaDescription,
      url,
      inLanguage: lang,
      provider: { "@id": `${SITE}/#service` },
      areaServed: [
        { "@type": "City", name: lang === 'fr' ? "Bruxelles" : "Brussels" },
        { "@type": "Country", name: lang === 'fr' ? "Belgique" : "Belgium" },
      ],
      offers: {
        "@type": "Offer",
        url,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: service.price.min,
          ...(service.price.max ? { maxPrice: service.price.max } : {}),
          valueAddedTaxIncluded: false,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang,
      mainEntity: service.faq.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Oliver Van Droogenbroeck", item: `${SITE}/${lang}` },
        { "@type": "ListItem", position: 2, name: service.name, item: url },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NavBar />
      <ServiceHero service={service} cta={ui.cta} quoteHref={quoteHref} />
      <ProjectDetailsSection cards={service.cards} />
      <StepsSection steps={service.steps} title={ui.stepsTitle} />
      <FAQSection categories={[{ category: ui.faqCategory, items: service.faq }]} title={ui.faqTitle} />
      <ProjectNavigation
        slug={slug}
        items={services[lang].map(s => ({ slug: s.slug, title: s.name }))}
        basePath="services"
      />
      {/* Spacer to give last-section animations enough scroll room */}
      <div className="h-[5svh] md:h-[10svh]" aria-hidden="true" />
      <Footer />
    </main>
  );
}
