import type { Metadata } from "next";
import { FiguresView } from "./view";

export const metadata: Metadata = {
  title: "Figures",
  description:
    "Published Mauritius GDP vintages, fiscal stocks, and the lines named at the 8 October 2026 press conference.",
  alternates: { canonical: "/figures" },
  openGraph: { url: "/figures" },
};

export default function FiguresPage() {
  return <FiguresView />;
}
