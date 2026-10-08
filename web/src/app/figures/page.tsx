import type { Metadata } from "next";
import { FiguresView } from "./view";

export const metadata: Metadata = {
  title: "Figures",
  description:
    "Published Mauritius GDP vintages, fiscal stocks, and the lines a coffers debate names but does not print. Each figure is cited or labelled Not published.",
  alternates: { canonical: "/figures" },
  openGraph: { url: "/figures" },
};

export default function FiguresPage() {
  return <FiguresView />;
}
