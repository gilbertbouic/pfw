"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { useI18n } from "@/i18n/LanguageProvider";

export function AboutView() {
  const { dict } = useI18n();
  const copy = dict.about;

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <Link
            href="/ledger"
            className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            {copy.openLedger}
          </Link>
          <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">
            {copy.rulesTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {copy.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">{copy.proposed}</p>
        </Container>
      </section>
    </>
  );
}
