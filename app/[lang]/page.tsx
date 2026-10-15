import { Metadata } from "next";
import HomeWrapper from "@/components/HomeWrapper";
import { alternatesFor, isLocale } from "@/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { alternates: alternatesFor(lang) };
}

export default function Home() {
  return <HomeWrapper />;
}
