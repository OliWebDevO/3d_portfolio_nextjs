import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./providers/LenisProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oliver Van Droogenbroeck | Web Developer",
  description: "Welcome to my portfolio website! I am Oliver Van Droogenbroeck, a web developer based in Belgium. Explore my projects, skills, and experiences. I am proficient in React, Next.js, and TypeScript, and I am passionate about creating innovative web solutions.",
  robots: "index, follow",
  metadataBase: new URL("https://www.olivervdb.com"),
  openGraph: {
    title: "Oliver Van Droogenbroeck | Portfolio",
    description: "Portfolio of Oliver Van Droogenbroeck, web developer based in Belgium.",
    url: "https://www.olivervdb.com",
    siteName: "Oliver Van Droogenbroeck Portfolio",
    images: [
      {
        url: "/images/portfolioCover.png",
        width: 800,
        height: 600,
        alt: "Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Van Droogenbroeck | Portfolio",
    description: "Portfolio of Oliver Van Droogenbroeck, web developer based in Belgium.",
    images: ["/images/portfolioCover.png"],
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
    <html lang="en" className={geistSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Oliver Van Droogenbroeck",
              url: "https://olivervdb.com",
              sameAs: [
                "https://www.linkedin.com/in/oliver-van-droogenbroeck-44b699151/",
                "https://github.com/OliWebDevO"
              ],
              jobTitle: "Front-End Developer",
              worksFor: {
                "@type": "Organization",
                name: "Your Company"
              }
            }),
          }}
        />
      </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <LenisProvider>
          {children}
        </LenisProvider>
        </body>
      
    </html>
  );
}
