import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "../globals.css";
import LenisProvider from "./providers/LenisProvider"
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ScrollToTop from '@/components/ScrollToTop';
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

const seo = {
  fr: {
    title: "Oliver Van Droogenbroeck | Développeur web freelance à Bruxelles",
    description: "Développeur web freelance à Bruxelles : sites vitrines WordPress, plateformes interactives et applications de gestion sur mesure en React et Next.js.",
    ogLocale: "fr_BE",
    ogAlternate: "en_US",
  },
  en: {
    title: "Oliver Van Droogenbroeck | Freelance Web Developer in Brussels",
    description: "Freelance web developer in Brussels: WordPress showcase websites, interactive platforms and custom management apps built with React and Next.js.",
    ogLocale: "en_US",
    ogAlternate: "fr_BE",
  },
} as const;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { title, description, ogLocale, ogAlternate } = seo[lang];

  return {
    title,
    description,
  keywords: [
    "développeur",
    "développeur web",
    "Belgique",
    "Belgian",
    "Développement web",
    "développeur frontend",
    "freelance",
    "Bruxelles",
    "React",
    "web developer", 
    "frontend developer", 
    "React developer", 
    "Next.js developer", 
    "TypeScript", 
    "JavaScript", 
    "Belgium web developer", 
    "freelance developer", 
    "portfolio",
    "web design", 
    "responsive design",
    "Three.js",
    "GSAP animations",
    "Tailwind CSS",
    "UI/UX developer"
  ],
    authors: [{ name: "Oliver Van Droogenbroeck" }],
    creator: "Oliver Van Droogenbroeck",
    publisher: "Oliver Van Droogenbroeck",
    robots: "index, follow",
    category: "Technology",
    classification: "Portfolio Website",
    metadataBase: new URL("https://www.olivervdb.com"),
    openGraph: {
      title,
      description,
      url: `https://www.olivervdb.com/${lang}`,
      siteName: "Oliver Van Droogenbroeck - Web Developer Portfolio",
      images: [
        {
          url: "/images/portfolioCover.webp",
          width: 1200,
          height: 630,
          alt: "Oliver Van Droogenbroeck - Frontend Web Developer Portfolio",
        },
      ],
      locale: ogLocale,
      alternateLocale: [ogAlternate],
      type: "website",
      emails: ["contact@olivervdb.com"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/portfolioCover.webp"],
    },
    icons: {
      icon: "/fav.png",
    },
  };
}

const schemaText = {
  fr: {
    personDescription: "Développeur web freelance à Bruxelles, spécialisé en React, Next.js et TypeScript : sites vitrines, plateformes web et applications de gestion sur mesure.",
    jobTitle: "Développeur web freelance",
    locality: "Bruxelles",
    region: "Belgique",
    occupation: "Développeur web",
    siteName: "Oliver Van Droogenbroeck - Portfolio",
    siteDescription: "Portfolio de projets web et de compétences en développement web",
    siteKeywords: "développeur web, développeur web freelance, Bruxelles, Belgique, React, Next.js, portfolio",
    serviceName: "Oliver Van Droogenbroeck - Développement web",
    serviceType: "Développement web",
    catalog: "Services de développement web",
    offers: [
      { name: "Sites vitrines", description: "Sites vitrines sur mesure avec WordPress, administrables en toute autonomie" },
      { name: "Plateformes web interactives", description: "Applications web dynamiques : espace membre, réservations, paiement" },
      { name: "Applications de gestion", description: "Outils sur mesure : tableaux de bord, accès par rôles, automatisation" },
    ],
  },
  en: {
    personDescription: "Freelance web developer in Brussels specializing in React, Next.js and TypeScript: showcase websites, web platforms and custom management apps.",
    jobTitle: "Freelance Web Developer",
    locality: "Brussels",
    region: "Belgium",
    occupation: "Web Developer",
    siteName: "Oliver Van Droogenbroeck Portfolio",
    siteDescription: "Portfolio website showcasing web development projects and skills",
    siteKeywords: "web developer, freelance web developer, Brussels, Belgium, React, Next.js, portfolio",
    serviceName: "Oliver Van Droogenbroeck Web Development Services",
    serviceType: "Web Development",
    catalog: "Web Development Services",
    offers: [
      { name: "Showcase websites", description: "Custom showcase websites built with WordPress, easy to manage on your own" },
      { name: "Interactive web platforms", description: "Dynamic web applications: member area, bookings, payment" },
      { name: "Management apps", description: "Custom tools: dashboards, role-based access, automation" },
    ],
  },
} as const;

function structuredData(lang: Language) {
  const x = schemaText[lang];

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Oliver Van Droogenbroeck",
      url: `https://www.olivervdb.com/${lang}`,
      image: "https://www.olivervdb.com/images/portfolioCover.webp",
      description: x.personDescription,
      sameAs: [
        "https://www.linkedin.com/in/oliver-van-droogenbroeck-44b699151/",
        "https://github.com/OliWebDevO",
      ],
      jobTitle: x.jobTitle,
      worksFor: { "@type": "Organization", name: "Freelance" },
      address: {
        "@type": "PostalAddress",
        addressCountry: "BE",
        addressLocality: x.locality,
        addressRegion: x.region,
      },
      knowsAbout: [
        "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "WordPress", "GSAP",
        "Tailwind CSS", "Web Development", "Frontend Development", "Responsive Design", "UI/UX Design",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: x.occupation,
        occupationLocation: { "@type": "Country", name: x.region },
        skills: "React, Next.js, TypeScript, JavaScript, WordPress, GSAP",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: x.siteName,
      url: `https://www.olivervdb.com/${lang}`,
      description: x.siteDescription,
      author: { "@type": "Person", name: "Oliver Van Droogenbroeck" },
      inLanguage: lang,
      isAccessibleForFree: true,
      keywords: x.siteKeywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: x.serviceName,
      provider: { "@type": "Person", name: "Oliver Van Droogenbroeck" },
      serviceType: x.serviceType,
      areaServed: { "@type": "Country", name: x.region },
      inLanguage: lang,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: x.catalog,
        itemListElement: x.offers.map((offer) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: offer.name, description: offer.description },
        })),
      },
    },
  ];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} data-theme="dark" data-scroll-behavior="smooth" className={monaSans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}else{var d=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',d)}}catch(e){}})()` }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="BE" />
        <meta name="geo.country" content="Belgium" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData(lang)),
          }}
        />
      </head>
        <body
          className={`${monaSans.variable} antialiased`}
          suppressHydrationWarning
        >
        <ThemeProvider>
        <LanguageProvider lang={lang}>
          <LenisProvider>
          <div id="theme-content">
            {children}
            <ScrollToTop />
          </div>
        </LenisProvider>
        </LanguageProvider>
        </ThemeProvider>
        </body>
      
    </html>
  );
}
