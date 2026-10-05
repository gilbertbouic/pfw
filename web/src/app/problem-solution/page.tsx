import type { Metadata } from "next";
import { ProblemSolutionView } from "./view";

export const metadata: Metadata = {
  title: "Problem & Solution",
  description:
    "Why public-fund delivery fails communities - and how Public Funds Watch closes the gap.",
  alternates: { canonical: "/problem-solution" },
  openGraph: { url: "/problem-solution" },
};

export default function ProblemSolutionPage() {
  return <ProblemSolutionView />;
}
