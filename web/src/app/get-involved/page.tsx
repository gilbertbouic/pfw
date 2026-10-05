import type { Metadata } from "next";
import { GetInvolvedView } from "./view";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Partner, pilot, fund, or contribute to Public Funds Watch. Contact support@mkweli.tech.",
  alternates: { canonical: "/get-involved" },
  openGraph: { url: "/get-involved" },
};

export default function GetInvolvedPage() {
  return <GetInvolvedView />;
}
