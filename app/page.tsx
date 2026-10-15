import { Metadata } from "next";
import HomeWrapper from "@/components/HomeWrapper";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeWrapper />;
}
