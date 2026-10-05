import type { Metadata } from "next";
import { AboutView } from "./view";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Public Funds Watch is, and how the Mauritius public-funding ledger is sourced.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
