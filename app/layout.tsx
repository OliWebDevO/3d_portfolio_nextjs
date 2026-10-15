import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "./providers/LenisProvider"
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ScrollToTop from '@/components/ScrollToTop';

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oliver Van Droogenbroeck | Développeur web freelance à Bruxelles · Web Developer Belgium",
  description: "Développeur web freelance à Bruxelles : sites vitrines, WordPress, applications web React & Next.js. Freelance web developer in Belgium specializing in React, Next.js and modern websites.",
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
    title: "Oliver Van Droogenbroeck | Développeur web freelance · Web Developer Portfolio",
    description: "Développeur web freelance à Bruxelles : découvrez mes projets et parlons de votre site. Freelance web developer in Belgium — React, Next.js, WordPress.",
    url: "https://www.olivervdb.com",
    siteName: "Oliver Van Droogenbroeck - Web Developer Portfolio",
    images: [
      {
        url: "/images/portfolioCover.webp",
        width: 1200,
        height: 630,
        alt: "Oliver Van Droogenbroeck - Frontend Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    alternateLocale: ["fr_BE"],
    type: "website",
    emails: ["contact@olivervdb.com"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Van Droogenbroeck | Développeur web Bruxelles · Web Developer Belgium",
    description: "Développeur web freelance à Bruxelles — sites et applications React, Next.js, WordPress. Freelance web developer based in Belgium.",
    images: ["/images/portfolioCover.webp"],
  },
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth" className={monaSans.variable} suppressHydrationWarning>
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
        <meta name="language" content="en,fr" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Oliver Van Droogenbroeck",
                url: "https://www.olivervdb.com",
                image: "https://www.olivervdb.com/images/portfolioCover.webp",
                description: "Frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies",
                sameAs: [
                  "https://www.linkedin.com/in/oliver-van-droogenbroeck-44b699151/",
                  "https://github.com/OliWebDevO"
                ],
                jobTitle: "Frontend Web Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Freelance"
                },
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "BE",
                  addressRegion: "Belgium"
                },
                knowsAbout: [
                  "JavaScript",
                  "TypeScript", 
                  "React",
                  "Next.js",
                  "Node.js",
                  "Three.js",
                  "GSAP",
                  "Tailwind CSS",
                  "Web Development",
                  "Frontend Development",
                  "Responsive Design",
                  "UI/UX Design"
                ],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Web Developer",
                  occupationLocation: {
                    "@type": "Country",
                    name: "Belgium"
                  },
                  skills: "React, Next.js, TypeScript, JavaScript, Three.js, GSAP"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Oliver Van Droogenbroeck Portfolio",
                url: "https://www.olivervdb.com",
                description: "Portfolio website showcasing web development projects and skills",
                author: {
                  "@type": "Person",
                  name: "Oliver Van Droogenbroeck"
                },
                inLanguage: ["en", "fr"],
                isAccessibleForFree: true,
                keywords: "web developer, frontend developer, React, Next.js, portfolio"
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Oliver Van Droogenbroeck Web Development Services",
                provider: {
                  "@type": "Person",
                  name: "Oliver Van Droogenbroeck"
                },
                serviceType: "Web Development",
                areaServed: {
                  "@type": "Country",
                  name: "Belgium"
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Web Development Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Frontend Development",
                        description: "Modern, responsive web applications using React and Next.js"
                      }
                    },
                    {
                      "@type": "Offer", 
                      itemOffered: {
                        "@type": "Service",
                        name: "Full-Stack Development",
                        description: "Complete web solutions from frontend to backend"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service", 
                        name: "3D Web Development",
                        description: "Interactive 3D experiences using Three.js"
                      }
                    }
                  ]
                }
              }
            ]),
          }}
        />
      </head>
        <body
          className={`${monaSans.variable} antialiased`}
          suppressHydrationWarning
        >
        <ThemeProvider>
        <LanguageProvider>
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
