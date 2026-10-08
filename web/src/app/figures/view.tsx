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
    title: "Published vintages, not a single hole",
    description:
      "GDP revisions, fiscal stocks, and the budget lines a coffers debate names. A figure is copied from a cited page or labelled Not published.",
    reviewed: "Figures page reviewed",
    notRegistry: "These rows do not enter the donor registry.",
    registry: "Registry",
    rulesOn: "Citation rules:",
    sources: "Sources",
    vintageTitle: "One row per published figure",
    vintageLead:
      "The 8 October 2026 press conference, the December 2024 State of the Economy, the IMF notes, and the September 2026 rebasing are separate rows. They are not added together.",
    gap: "Gap",
    indicator: "Indicator",
    period: "Period",
    figure: "Figure",
    source: "Source",
    ionnews: "The Rs 58 billion split is also printed by",
    ratioTitle: "Denominator sensitivity",
    ratioLead:
      "A higher GDP makes a ratio look smaller. The rupee stock stays. Ratios below are calculated here and labelled as calculated.",
    symmetryTitle: "Same debate, different documents",
    symmetryLead:
      "Debt is printed as a ratio in some documents and as a rupee stock in another. Moody's is named in the press conference and not copied.",
    budgetTitle: "Lines the conference named",
    budgetLead:
      "The amount stays Not published until an Estimates line or a tariff order prints it. The Rs 50,000 threshold is copied from the press report only.",
    line: "Line",
    copied: "Copied",
    note: "Note",
    claimSource: "Press report",
    waterTitle: "Water localities named",
    mapLink: "Places map",
    methodsTitle: "Why a GDP revision is not cash",
    downloadNote: "Calculated ratios in the JSON are marked as calculated.",
  },
  fr: {
    eyebrow: "Chiffres",
    title: "Millésimes publiés, pas un trou unique",
    description:
      "Révisions du PIB, stocks budgétaires, et lignes qu'un débat sur les caisses nomme. Un chiffre est copié d'une page citée ou marqué Non publié.",
    reviewed: "Page des chiffres revue le",
    notRegistry: "Ces lignes n'entrent pas dans le registre des bailleurs.",
    registry: "Registre",
    rulesOn: "Règles de citation :",
    sources: "Sources",
    vintageTitle: "Une ligne par chiffre publié",
    vintageLead:
      "La conférence de presse du 8 octobre 2026, le State of the Economy de décembre 2024, les notes du FMI et le rebasement de septembre 2026 sont des lignes distinctes. Elles ne sont pas additionnées.",
    gap: "Écart",
    indicator: "Indicateur",
    period: "Période",
    figure: "Chiffre",
    source: "Source",
    ionnews: "La ventilation des 58 milliards Rs est aussi imprimée par",
    ratioTitle: "Sensibilité au dénominateur",
    ratioLead:
      "Un PIB plus élevé rend un ratio plus petit. Le stock en roupies reste. Les ratios ci-dessous sont calculés ici et marqués comme calculés.",
    symmetryTitle: "Même débat, documents différents",
    symmetryLead:
      "La dette est imprimée en ratio dans certains documents et en stock de roupies dans un autre. Moody's est nommé à la conférence et n'est pas copié.",
    budgetTitle: "Lignes nommées à la conférence",
    budgetLead:
      "Le montant reste Non publié tant qu'une ligne des Estimates ou un arrêté tarifaire ne l'imprime pas. Le seuil de 50 000 Rs est copié du seul reportage.",
    line: "Ligne",
    copied: "Copié",
    note: "Note",
    claimSource: "Reportage",
    waterTitle: "Localités d'eau nommées",
    mapLink: "Carte des lieux",
    methodsTitle: "Pourquoi une révision du PIB n'est pas de la caisse",
    downloadNote: "Les ratios calculés du JSON sont marqués comme calculés.",
  },
} as const;
