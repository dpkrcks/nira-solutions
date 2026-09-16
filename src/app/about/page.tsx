import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NIRA SOLUTIONS integrates manpower, consulting and technology under one strategic partner model.",
};

export default function AboutPage() {
  return <AboutView />;
}
