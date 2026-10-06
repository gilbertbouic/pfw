import type { Metadata } from "next";
import { AboutView } from "./view";

export const metadata: Metadata = {
  title: "About",
  description:
    "Donor-funded projects in Mauritius with a published amount of at least USD 100,000. Climate finance is one sector.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
