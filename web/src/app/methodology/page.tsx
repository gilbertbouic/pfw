import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Methodology",
  description: "Methods and sources for the Public Funds Watch ledger.",
  alternates: { canonical: "/sources" },
};

export default function MethodologyPage() {
  return (
    <Container className="py-16">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        Methods and sources
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        The citation rules, the older-than-10-years note, and the records that
        were reviewed and not added are on the sources page.
      </p>
      <Link
        href="/sources"
        className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white"
      >
        Open sources
      </Link>
    </Container>
  );
}
