import { Metadata } from "next";
import ResumeWrapper from "@/components/ResumeWrapper";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function Resume() {
  return <ResumeWrapper />;
}
