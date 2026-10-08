"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SourceBanner } from "@/components/SourceBanner";
import {
  FIGURES_REVIEWED,
  budgetLines,
  gapLabels,
  illustrations,
  ionnewsCrossCheck,
  methods,
  ratioOf,
  stocks,
  symmetry,
  vintages,
  waterNote,
  waterSites,
  type GapKind,
} from "@/data/figures";
import { useI18n } from "@/i18n/LanguageProvider";

const ORDER: GapKind[] = ["measurement", "restatement", "cash", "claim"];

export function FiguresView() {
  const { lang } = useI18n();
  const copy = ui[lang];

  return (
    <>
      <SourceBanner />
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <section className="py-12 sm:py-14">
        <Container className="space-y-10">
          <p className="max-w-3xl text-sm text-muted">
            {copy.reviewed} {FIGURES_REVIEWED}. {copy.notRegistry}{" "}
            <Link href="/projects" className="font-semibold text-primary">
              {copy.registry}
            </Link>
            . {copy.rulesOn}{" "}
            <Link href="/sources" className="font-semibold text-primary">
              {copy.sources}
            </Link>
            .
          </p>

          <div className="grid gap-4 lg:grid-cols-3">
            {stocks.map((stock) => (
              <article key={stock.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {stock.title[lang]}
                </p>
                <p className="mt-2 text-sm text-foreground">{stock.body[lang]}</p>
              </article>
            ))}
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">{copy.vintageTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">{copy.vintageLead}</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">{copy.gap}</th>
                    <th className="px-4 py-3 font-semibold">{copy.indicator}</th>
                    <th className="px-4 py-3 font-semibold">{copy.period}</th>
                    <th className="px-4 py-3 font-semibold">{copy.figure}</th>
                    <th className="px-4 py-3 font-semibold">{copy.source}</th>
                  </tr>
                </thead>
                <tbody>
                  {ORDER.flatMap((gap) =>
                    vintages
                      .filter((row) => row.gap === gap)
                      .map((row) => (
                        <tr key={row.id} className="border-b border-border align-top last:border-0">
                          <td className="px-4 py-3 text-muted">{gapLabels[row.gap][lang]}</td>
                          <td className="px-4 py-3">
                            <p className="font-medium text-foreground">{row.indicator[lang]}</p>
                            <p className="mt-1 text-muted">{row.note[lang]}</p>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">{row.period}</td>
                          <td className="px-4 py-3 font-semibold whitespace-nowrap">{row.display}</td>
                          <td className="px-4 py-3">
                            <a
                              href={row.source.url}
                              className="font-semibold text-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {row.source.title}
                            </a>
                            <p className="mt-1 text-xs text-muted">
                              {row.source.publisher}, {row.source.asOf}
                            </p>
                          </td>
                        </tr>
                      )),
                  )}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              {copy.ionnews}{" "}
              <a
                href={ionnewsCrossCheck.url}
                className="font-semibold text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ionnewsCrossCheck.title}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">{copy.ratioTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">{copy.ratioLead}</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {illustrations.map((item) => (
                <article key={item.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">
                    {item.numeratorLabel[lang]}: {item.numeratorDisplay}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {item.denominators.map((d) => (
                      <li key={d.display} className="flex items-baseline justify-between gap-3">
                        <span className="text-muted">
                          {d.label[lang]} ({d.display})
                        </span>
                        <span className="font-semibold text-foreground">
                          {ratioOf(item.numerator, d.value)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted">{item.caveat[lang]}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">{copy.symmetryTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">{copy.symmetryLead}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {symmetry.map((row) => (
                <article key={row.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {row.source.publisher}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{row.display}</p>
                  <p className="mt-1 text-sm text-foreground">{row.indicator[lang]}</p>
                  <p className="mt-2 text-sm text-muted">{row.note[lang]}</p>
                  <a
                    href={row.source.url}
                    className="mt-3 inline-flex text-sm font-semibold text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.source.title} →
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">{copy.budgetTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">{copy.budgetLead}</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">{copy.line}</th>
                    <th className="px-4 py-3 font-semibold">{copy.copied}</th>
                    <th className="px-4 py-3 font-semibold">{copy.note}</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetLines.map((line) => (
                    <tr key={line.id} className="border-b border-border align-top last:border-0">
                      <td className="px-4 py-3 font-medium">{line.line[lang]}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{line.display}</td>
                      <td className="px-4 py-3 text-muted">
                        {line.note[lang]}{" "}
                        <a
                          href={line.source.url}
                          className="font-semibold text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {copy.claimSource}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">{copy.waterTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">{waterNote[lang]}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {waterSites.map((site) => (
                <li
                  key={site}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground"
                >
                  {site}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">
              <Link href="/map" className="font-semibold text-primary">
                {copy.mapLink}
              </Link>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">{copy.methodsTitle}</h2>
            <div className="mt-4 space-y-3 text-sm text-muted">
              {methods.map((paragraph) => (
                <p key={paragraph.en}>{paragraph[lang]}</p>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted">
            <a href="/data/figures.json" className="font-semibold text-primary">
              JSON
            </a>
            {" · "}
            <a href="/data/figures.csv" className="font-semibold text-primary">
              CSV
            </a>
            . {copy.downloadNote}
          </p>
        </Container>
      </section>
    </>
  );
}

const ui = {
  en: {
    eyebrow: "Figures",
    title: "GDP vintages and fiscal stocks",
    description:
      "Figures from the press conference, the State of the Economy, the IMF, and Statistics Mauritius. Each figure has a URL.",
    reviewed: "Reviewed",
    notRegistry: "Donor projects stay on the",
    registry: "registry",
    rulesOn: "Sources:",
    sources: "Sources",
    vintageTitle: "Published figures",
    vintageLead:
      "Press conference of 8 October 2026, State of the Economy of December 2024, IMF notes, and the September 2026 rebasing.",
    gap: "Gap",
    indicator: "Indicator",
    period: "Period",
    figure: "Figure",
    source: "Source",
    ionnews: "The Rs 58 billion split is also printed by",
    ratioTitle: "Debt stock over each GDP series",
    ratioLead: "Rs 570.5 billion over each published 2024 GDP series. Rs 6.7 billion climate tag over the same series.",
    symmetryTitle: "Debt, as each document prints it",
    symmetryLead: "Ratio in the IMF and State of the Economy releases. Rupee stock in the public-finance statistics. Moody's: Not published.",
    budgetTitle: "Lines named at the press conference",
    budgetLead: "Amount as printed in the 8 October 2026 report. Other lines: Not published.",
    line: "Line",
    copied: "Copied",
    note: "Note",
    claimSource: "Press report",
    waterTitle: "Water localities named",
    mapLink: "Places map",
    methodsTitle: "Global Business in the accounts",
    downloadNote: "Same rows as the table.",
  },
  fr: {
    eyebrow: "Chiffres",
    title: "Millésimes du PIB et stocks budgétaires",
    description:
      "Chiffres de la conférence de presse, du State of the Economy, du FMI et de Statistics Mauritius. Chaque chiffre a une URL.",
    reviewed: "Revu le",
    notRegistry: "Les projets des bailleurs restent dans le",
    registry: "registre",
    rulesOn: "Sources :",
    sources: "Sources",
    vintageTitle: "Chiffres publiés",
    vintageLead:
      "Conférence de presse du 8 octobre 2026, State of the Economy de décembre 2024, notes du FMI, et rebasement de septembre 2026.",
    gap: "Écart",
    indicator: "Indicateur",
    period: "Période",
    figure: "Chiffre",
    source: "Source",
    ionnews: "La ventilation des 58 milliards Rs est aussi imprimée par",
    ratioTitle: "Stock de dette sur chaque série de PIB",
    ratioLead: "570,5 milliards Rs sur chaque série de PIB 2024 publiée. Étiquette climat de 6,7 milliards Rs sur les mêmes séries.",
    symmetryTitle: "Dette, telle que chaque document l'imprime",
    symmetryLead: "Ratio dans les publications du FMI et du State of the Economy. Stock en roupies dans les statistiques de finances publiques. Moody's : Non publié.",
    budgetTitle: "Lignes nommées à la conférence de presse",
    budgetLead: "Montant tel qu'imprimé dans le reportage du 8 octobre 2026. Autres lignes : Non publié.",
    line: "Ligne",
    copied: "Copié",
    note: "Note",
    claimSource: "Reportage",
    waterTitle: "Localités d'eau nommées",
    mapLink: "Carte des lieux",
    methodsTitle: "Global Business dans les comptes",
    downloadNote: "Mêmes lignes que le tableau.",
  },
} as const;
