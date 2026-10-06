import type { Metadata } from "next";
import { HomeView } from "../HomeView";

export const metadata: Metadata = {
  title: "Ledger",
  description:
    "Cited figures for donor-funded projects in Mauritius. Climate finance is one sector.",
  alternates: { canonical: "/ledger" },
  openGraph: { url: "/ledger" },
};

export default function LedgerPage() {
  return <HomeView />;
}
