import type { SourceRef } from "./types";

export const FIGURES_REVIEWED = "2026-10-08";

export type GapKind = "measurement" | "restatement" | "cash" | "claim";

export type Bilingual = { en: string; fr: string };

export type CitedRow = {
  id: string;
  gap: GapKind;
  indicator: Bilingual;
  period: string;
  display: string;
  note: Bilingual;
  source: SourceRef;
};

const defi: SourceRef = {
  title:
    "« Trou » de Rs 164,9 milliards : Pravind Jugnauth se demande si les caisses de l’État sont réellement vides",
  url: "https://defimedia.info/trou-de-rs-1649-milliards-pravind-jugnauth-se-demande-si-les-caisses-de-letat-sont-reellement-vides",
  publisher: "Le Défi Media Group",
  asOf: "2026-10-08",
};

const lexpressRebase: SourceRef = {
  title:
    "Comptes nationaux : La croissance ralentit à 3 % sur fond de révision majeure du PIB",
  url: "https://lexpress.mu/s/la-croissance-ralentit-a-3-sur-fond-de-revision-majeure-du-pib-563146",
  publisher: "L'Express, reporting Statistics Mauritius",
  asOf: "2026-10-02",
};

const ionnewsRebase: SourceRef = {
  title: "Nouvelle base de calcul : le PIB de 2023 gonfle de Rs 58 milliards",
  url: "https://ionnews.mu/nouvelle-base-de-calcul-le-pib-de-2023-gonfle-de-rs-58-milliards/",
  publisher: "ION News, reporting Statistics Mauritius",
  asOf: "2026-10-03",
};

const reutersSote: SourceRef = {
  title:
    "Mauritius prime minister: previous government misstated GDP and public debt",
  url: "https://www.reuters.com/world/asia-pacific/mauritius-prime-minister-previous-government-misstated-gdp-public-debt-2024-12-10/",
  publisher: "Reuters, reporting the State of the Economy",
  asOf: "2024-12-10",
};

const lexpressSote: SourceRef = {
  title:
    "«The State of the Economy» | Navin Ramgoolam : «L’ancien régime a légué une économie désastreuse»",
  url: "https://lexpress.mu/s/lancien-regime-a-legue-une-economie-desastreuse-540666",
  publisher: "L'Express, reporting the State of the Economy",
  asOf: "2024-12-11",
};

const imfTa: SourceRef = {
  title:
    "Mauritius: Technical Assistance Report — National Accounts and Balance of Payments Mission (March 24–28, 2025)",
  url: "https://www.imf.org/en/publications/technical-assistance-reports/issues/2025/10/10/mauritius-technical-assistance-report-report-on-the-national-accounts-and-balance-of-571077",
  publisher: "International Monetary Fund",
  asOf: "2025-10-10",
};

const imfAiv2025: SourceRef = {
  title:
    "IMF Executive Board Concludes 2025 Article IV Consultation with Mauritius",
  url: "https://www.imf.org/en/News/Articles/2025/06/18/pr-25204-mauritius-imf-concludes-2025-article-iv-consultation",
  publisher: "International Monetary Fund",
  asOf: "2025-06-18",
};

const imfAiv2026: SourceRef = {
  title:
    "Mauritius: 2026 Article IV Consultation — Press Release; Staff Report; Staff Supplement; and Statement",
  url: "https://www.imf.org/-/media/files/publications/cr/2026/english/1musea2026001.pdf",
  publisher: "International Monetary Fund",
  asOf: "2026-07-15",
};

const pfs: SourceRef = {
  title:
    "Public Finance Statistics: Consolidated General Government, July 2024 – June 2025",
  url: "https://maurice-info.mu/2026/10/01/document-public-finance-statistics-consolidated-general-government-july-2024-june-2025.html",
  publisher: "Maurice Info, reporting Statistics Mauritius / Ministry of Finance",
  asOf: "2026-10-01",
};

export const gapLabels: Record<GapKind, Bilingual> = {
  measurement: {
    en: "Measurement gap",
    fr: "Écart de mesure",
  },
  restatement: {
    en: "Restatement gap",
    fr: "Écart de révision",
  },
  cash: {
    en: "Cash gap",
    fr: "Écart de caisse",
  },
  claim: {
    en: "Press-conference claim",
    fr: "Affirmation de conférence de presse",
  },
};

export const stocks: {
  id: GapKind;
  title: Bilingual;
  body: Bilingual;
}[] = [
  {
    id: "measurement",
    title: gapLabels.measurement,
    body: {
      en: "Global Business output, merchanting, and the production-versus-expenditure GDP gap.",
      fr: "Production des Global Business, négoce international, et écart entre le PIB par la production et le PIB par la dépense.",
    },
  },
  {
    id: "restatement",
    title: gapLabels.restatement,
    body: {
      en: "A later official document replaces an earlier printed growth, deficit, or debt ratio. Both vintages are listed.",
      fr: "Un document officiel plus récent remplace un taux de croissance, un déficit ou un ratio de dette déjà imprimé. Les deux millésimes sont listés.",
    },
  },
  {
    id: "cash",
    title: gapLabels.cash,
    body: {
      en: "Revenue, expenditure, net borrowing, and the debt stock.",
      fr: "Recettes, dépenses, emprunt net et stock de dette.",
    },
  },
];

export const vintages: CitedRow[] = [
  {
    id: "gdp-2022-claim",
    gap: "claim",
    indicator: { en: "Nominal GDP", fr: "PIB nominal" },
    period: "2022",
    display: "Rs 623 billion",
    note: {
      en: "MSM press conference, 8 October 2026, as reported by Le Défi.",
      fr: "Conférence de presse du MSM, 8 octobre 2026, telle que rapportée par Le Défi.",
    },
    source: defi,
  },
  {
    id: "gdp-2023-claim-old",
    gap: "claim",
    indicator: { en: "Nominal GDP, earlier vintage cited", fr: "PIB nominal, millésime antérieur cité" },
    period: "2023",
    display: "Rs 641 billion",
    note: {
      en: "Earlier vintage named at the same press conference.",
      fr: "Millésime antérieur nommé à la même conférence.",
    },
    source: defi,
  },
  {
    id: "gdp-2023-claim-new",
    gap: "claim",
    indicator: { en: "Nominal GDP, later vintage cited", fr: "PIB nominal, millésime postérieur cité" },
    period: "2023",
    display: "Rs 695 billion",
    note: {
      en: "Later vintage named at the same press conference. Same level as the rebased Statistics Mauritius series.",
      fr: "Millésime postérieur nommé à la même conférence. Même niveau que la série rebasée de Statistics Mauritius.",
    },
    source: defi,
  },
  {
    id: "gdp-2024-claim-old",
    gap: "claim",
    indicator: { en: "Nominal GDP, earlier vintage cited", fr: "PIB nominal, millésime antérieur cité" },
    period: "2024",
    display: "Rs 698 billion",
    note: {
      en: "Earlier vintage named at the press conference. L'Express prints Rs 693.3 billion for the previous 2024 series.",
      fr: "Millésime antérieur nommé à la conférence. L'Express imprime 693,3 milliards Rs pour la série 2024 précédente.",
    },
    source: defi,
  },
  {
    id: "gdp-2024-claim-new",
    gap: "claim",
    indicator: { en: "Nominal GDP, later vintage cited", fr: "PIB nominal, millésime postérieur cité" },
    period: "2024",
    display: "Rs 756 billion",
    note: {
      en: "Later vintage named at the press conference. L'Express prints Rs 756.7 billion for the rebased 2024 series.",
      fr: "Millésime postérieur nommé à la conférence. L'Express imprime 756,7 milliards Rs pour la série 2024 rebasée.",
    },
    source: defi,
  },
  {
    id: "trou-claim",
    gap: "claim",
    indicator: {
      en: "Claimed hole in the coffers",
      fr: "Trou de caisse affirmé",
    },
    period: "Not printed",
    display: "Rs 164.9 billion",
    note: {
      en: "Named at the press conference. The article prints the total and not the addition. The two revisions it states sum to about Rs 112 billion.",
      fr: "Nommé à la conférence de presse. L'article imprime le total et pas l'addition. Les deux révisions qu'il énonce font environ 112 milliards Rs.",
    },
    source: defi,
  },
  {
    id: "gdp-2023-sm-old",
    gap: "measurement",
    indicator: { en: "Nominal GDP, previous series", fr: "PIB nominal, série précédente" },
    period: "2023",
    display: "Rs 637 billion",
    note: {
      en: "Previous series, as reported from the 30 September 2026 national-accounts estimates.",
      fr: "Série précédente, telle que rapportée depuis les estimations des comptes nationaux du 30 septembre 2026.",
    },
    source: lexpressRebase,
  },
  {
    id: "gdp-2023-sm-new",
    gap: "measurement",
    indicator: { en: "Nominal GDP, rebased series", fr: "PIB nominal, série rebasée" },
    period: "2023",
    display: "Rs 695 billion",
    note: {
      en: "New series. About Rs 58 billion, or 9.1%, above the previous series.",
      fr: "Nouvelle série. Environ 58 milliards Rs, soit 9,1 %, au-dessus de la série précédente.",
    },
    source: lexpressRebase,
  },
  {
    id: "gdp-2023-split",
    gap: "measurement",
    indicator: {
      en: "2023 rebasing split",
      fr: "Ventilation du rebasement 2023",
    },
    period: "2023",
    display: "Rs 27bn + Rs 11.3bn + about Rs 20bn",
    note: {
      en: "L'Express: about Rs 27 billion from the new benchmark and coverage, Rs 11.3 billion from SNA 2025, about Rs 20 billion from GBC merchanting and trading. ION News prints Rs 27 billion, Rs 11 billion, and Rs 20 billion for the same three changes.",
      fr: "L'Express : environ 27 milliards Rs du nouvel exercice de référence et de la couverture, 11,3 milliards Rs du SCN 2025, environ 20 milliards Rs du négoce des GBC. ION News imprime 27, 11 et 20 milliards Rs pour les mêmes trois changements.",
    },
    source: lexpressRebase,
  },
  {
    id: "gdp-2024-sm-old",
    gap: "measurement",
    indicator: { en: "Nominal GDP, previous series", fr: "PIB nominal, série précédente" },
    period: "2024",
    display: "Rs 693.3 billion",
    note: {
      en: "Previous series, as reported from the 30 September 2026 estimates.",
      fr: "Série précédente, telle que rapportée depuis les estimations du 30 septembre 2026.",
    },
    source: lexpressRebase,
  },
  {
    id: "gdp-2024-sm-new",
    gap: "measurement",
    indicator: { en: "Nominal GDP, rebased series", fr: "PIB nominal, série rebasée" },
    period: "2024",
    display: "Rs 756.7 billion",
    note: {
      en: "Rebased series.",
      fr: "Série rebasée.",
    },
    source: lexpressRebase,
  },
  {
    id: "gdp-2025-sm-old",
    gap: "measurement",
    indicator: { en: "Nominal GDP, previous series", fr: "PIB nominal, série précédente" },
    period: "2025",
    display: "Rs 743 billion",
    note: {
      en: "Previous series, as reported.",
      fr: "Série précédente, telle que rapportée.",
    },
    source: lexpressRebase,
  },
  {
    id: "gdp-2025-sm-new",
    gap: "measurement",
    indicator: { en: "Nominal GDP, rebased series", fr: "PIB nominal, série rebasée" },
    period: "2025",
    display: "Rs 810.3 billion",
    note: {
      en: "Rebased series, as reported.",
      fr: "Série rebasée, telle que rapportée.",
    },
    source: lexpressRebase,
  },
  {
    id: "sote-growth",
    gap: "restatement",
    indicator: { en: "Real GDP growth", fr: "Croissance du PIB réel" },
    period: "2023",
    display: "5.6%, not 7.0%",
    note: {
      en: "State of the Economy, reported by Reuters on 10 December 2024.",
      fr: "State of the Economy, rapporté par Reuters le 10 décembre 2024.",
    },
    source: reutersSote,
  },
  {
    id: "sote-deficit",
    gap: "restatement",
    indicator: { en: "Budget deficit", fr: "Déficit budgétaire" },
    period: "2023/24",
    display: "5.7% of GDP, not 3.9%",
    note: {
      en: "State of the Economy, as reported by Reuters.",
      fr: "State of the Economy, tel que rapporté par Reuters.",
    },
    source: reutersSote,
  },
  {
    id: "sote-debt",
    gap: "restatement",
    indicator: { en: "Public sector debt", fr: "Dette du secteur public" },
    period: "June 2024",
    display: "Above 83% of GDP, not over 77%",
    note: {
      en: "State of the Economy, reported by Reuters. Printed as a ratio.",
      fr: "State of the Economy, rapporté par Reuters. Imprimé en ratio.",
    },
    source: reutersSote,
  },
  {
    id: "sote-nominal-cut",
    gap: "restatement",
    indicator: { en: "Nominal GDP restatement", fr: "Révision du PIB nominal" },
    period: "2023 and 2024",
    display: "At least Rs 22 billion, and more than Rs 36 billion",
    note: {
      en: "L'Express on the State of the Economy: 2023 nominal GDP reduced by at least Rs 22 billion (1.4%). The 2024 nominal estimate reduced by more than Rs 36 billion.",
      fr: "L'Express sur le State of the Economy : PIB nominal 2023 réduit d'au moins 22 milliards Rs (1,4 %). L'estimation nominale 2024 réduite de plus de 36 milliards Rs.",
    },
    source: lexpressSote,
  },
  {
    id: "imf-para10",
    gap: "measurement",
    indicator: {
      en: "IMF concern on the December 2024 release",
      fr: "Réserve du FMI sur la publication de décembre 2024",
    },
    period: "Mission 24–28 March 2025",
    display: "Paragraphs 10 and 13",
    note: {
      en: "Paragraph 10: concern about the drivers of GBC output and the statistical discrepancies in the December 2024 release. Paragraph 13: miscalculation of GBC output, survey errors, misclassified costs, and the estimation method.",
      fr: "Paragraphe 10 : préoccupation sur les moteurs de la production des GBC et les écarts statistiques de la publication de décembre 2024. Paragraphe 13 : mauvais calcul de la production des GBC, erreurs d'enquête, coûts mal classés, et méthode d'estimation.",
    },
    source: imfTa,
  },
  {
    id: "revenue-fy2425",
    gap: "cash",
    indicator: { en: "General government revenue", fr: "Recettes des administrations publiques" },
    period: "July 2024 – June 2025",
    display: "Rs 197.2 billion",
    note: {
      en: "Up from Rs 170.4 billion. Revenue-to-GDP reported at 27.5%, from 25.6%.",
      fr: "En hausse depuis 170,4 milliards Rs. Recettes rapportées à 27,5 % du PIB, contre 25,6 %.",
    },
    source: pfs,
  },
  {
    id: "expenditure-fy2425",
    gap: "cash",
    indicator: { en: "General government expenditure", fr: "Dépenses des administrations publiques" },
    period: "July 2024 – June 2025",
    display: "Rs 273.2 billion",
    note: {
      en: "Up 20.5% from Rs 226.7 billion in 2023/24.",
      fr: "En hausse de 20,5 % depuis 226,7 milliards Rs en 2023/24.",
    },
    source: pfs,
  },
  {
    id: "deficit-fy2425",
    gap: "cash",
    indicator: { en: "Net lending / net borrowing", fr: "Capacité / besoin de financement" },
    period: "July 2024 – June 2025",
    display: "Rs 76.1 billion",
    note: {
      en: "Deficit, from Rs 56.2 billion. 10.6% of GDP, from 8.5%.",
      fr: "Déficit, depuis 56,2 milliards Rs. 10,6 % du PIB, contre 8,5 %.",
    },
    source: pfs,
  },
  {
    id: "debt-fy2425",
    gap: "cash",
    indicator: { en: "General government debt stock", fr: "Stock de dette des administrations publiques" },
    period: "End June 2025",
    display: "Rs 570.5 billion",
    note: {
      en: "Up 16.0% from Rs 491.9 billion at end 2023/24.",
      fr: "En hausse de 16,0 % depuis 491,9 milliards Rs à la fin de 2023/24.",
    },
    source: pfs,
  },
  {
    id: "imf-debt-2025",
    gap: "cash",
    indicator: { en: "Public sector debt ratio", fr: "Ratio de dette du secteur public" },
    period: "End June 2025",
    display: "Around 88% of GDP",
    note: {
      en: "2025 Article IV press release.",
      fr: "Communiqué de la consultation au titre de l'article IV de 2025.",
    },
    source: imfAiv2025,
  },
  {
    id: "imf-debt-2026",
    gap: "cash",
    indicator: { en: "Public debt ratio", fr: "Ratio de dette publique" },
    period: "End June 2025",
    display: "86% of GDP",
    note: {
      en: "2026 Article IV. Same date as the June 2025 press release, different printed ratio.",
      fr: "Article IV 2026. Même date que le communiqué de juin 2025, ratio imprimé différent.",
    },
    source: imfAiv2026,
  },
];

export const ionnewsCrossCheck: SourceRef = ionnewsRebase;

export function ratioOf(numerator: number, denominator: number): string {
  return `${((numerator / denominator) * 100).toFixed(1)}%`;
}

export const illustrations = [
  {
    id: "debt-over-gdp-2024",
    numerator: 570.5,
    numeratorDisplay: "Rs 570.5 billion",
    numeratorLabel: {
      en: "Debt stock, end June 2025",
      fr: "Stock de dette, fin juin 2025",
    },
    denominators: [
      {
        value: 693.3,
        display: "Rs 693.3 billion",
        label: { en: "2024 GDP, previous series", fr: "PIB 2024, série précédente" },
      },
      {
        value: 756.7,
        display: "Rs 756.7 billion",
        label: { en: "2024 GDP, rebased series", fr: "PIB 2024, série rebasée" },
      },
    ],
    caveat: {
      en: "End-June 2025 debt stock over calendar 2024 GDP.",
      fr: "Stock de dette à fin juin 2025 sur le PIB de l'année civile 2024.",
    },
  },
  {
    id: "climate-tag-over-gdp",
    numerator: 6.7,
    numeratorDisplay: "Rs 6.7 billion",
    numeratorLabel: {
      en: "Climate-tagged budget, FY 2025/26",
      fr: "Budget étiqueté climat, exercice 2025/26",
    },
    denominators: [
      {
        value: 693.3,
        display: "Rs 693.3 billion",
        label: { en: "2024 GDP, previous series", fr: "PIB 2024, série précédente" },
      },
      {
        value: 756.7,
        display: "Rs 756.7 billion",
        label: { en: "2024 GDP, rebased series", fr: "PIB 2024, série rebasée" },
      },
    ],
    caveat: {
      en: "Appendix H prints this tag as about 2.8% of appropriated expenditure. The UNDRR pilot prints 5.2% of GDP on a wider definition.",
      fr: "L'annexe H imprime cette étiquette à environ 2,8 % des dépenses appropriées. Le pilote UNDRR imprime 5,2 % du PIB sur une définition plus large.",
    },
  },
];

export const symmetry: CitedRow[] = [
  vintages.find((row) => row.id === "sote-debt")!,
  vintages.find((row) => row.id === "imf-debt-2025")!,
  vintages.find((row) => row.id === "imf-debt-2026")!,
  vintages.find((row) => row.id === "debt-fy2425")!,
  {
    id: "moodys-not-copied",
    gap: "claim",
    indicator: {
      en: "Moody's assessment",
      fr: "Évaluation de Moody's",
    },
    period: "Not copied",
    display: "Not published",
    note: {
      en: "Named at the 8 October 2026 press conference. No Moody's figure is printed in that report.",
      fr: "Nommé à la conférence du 8 octobre 2026. Aucun chiffre Moody's dans ce reportage.",
    },
    source: defi,
  },
];

export const budgetLines: {
  id: string;
  line: Bilingual;
  display: string;
  note: Bilingual;
  source: SourceRef;
}[] = [
  {
    id: "fuel",
    line: { en: "Fuel price", fr: "Prix des carburants" },
    display: "Not published",
    note: {
      en: "Named as a rise at the 8 October 2026 press conference.",
      fr: "Nommé comme une hausse à la conférence du 8 octobre 2026.",
    },
    source: defi,
  },
  {
    id: "electricity",
    line: { en: "Electricity price", fr: "Prix de l'électricité" },
    display: "Not published",
    note: {
      en: "Named as a rise at the 8 October 2026 press conference.",
      fr: "Nommé comme une hausse à la conférence du 8 octobre 2026.",
    },
    source: defi,
  },
  {
    id: "bread",
    line: { en: "Bread price", fr: "Prix du pain" },
    display: "Not published",
    note: {
      en: "Named as a rise at the 8 October 2026 press conference.",
      fr: "Nommé comme une hausse à la conférence du 8 octobre 2026.",
    },
    source: defi,
  },
  {
    id: "gas",
    line: { en: "Cooking gas price", fr: "Prix du gaz" },
    display: "Not published",
    note: {
      en: "Named as a rise at the 8 October 2026 press conference.",
      fr: "Nommé comme une hausse à la conférence du 8 octobre 2026.",
    },
    source: defi,
  },
  {
    id: "preprimary",
    line: { en: "Pre-primary subsidy", fr: "Subvention du préscolaire" },
    display: "Not published",
    note: {
      en: "Named as removed at the 8 October 2026 press conference.",
      fr: "Nommée comme supprimée à la conférence du 8 octobre 2026.",
    },
    source: defi,
  },
  {
    id: "tertiary",
    line: { en: "Tertiary subsidy", fr: "Subvention du tertiaire" },
    display: "Not published",
    note: {
      en: "Named as removed at the 8 October 2026 press conference.",
      fr: "Nommée comme supprimée à la conférence du 8 octobre 2026.",
    },
    source: defi,
  },
  {
    id: "fourteenth",
    line: {
      en: "14th-month threshold",
      fr: "Seuil du 14e mois",
    },
    display: "Rs 50,000",
    note: {
      en: "Threshold named at the 8 October 2026 press conference.",
      fr: "Seuil nommé à la conférence du 8 octobre 2026.",
    },
    source: defi,
  },
  {
    id: "prb",
    line: { en: "PRB application", fr: "Application du PRB" },
    display: "Not published",
    note: {
      en: "Press conference: applied in 2026, no retroactive payment, against a January 2025 commitment.",
      fr: "Conférence de presse : appliqué en 2026, sans paiement rétroactif, contre un engagement de janvier 2025.",
    },
    source: defi,
  },
  {
    id: "pensions",
    line: {
      en: "Retirement, widow, and invalidity transfers",
      fr: "Pensions de retraite, de veuve et d'invalidité",
    },
    display: "Not published",
    note: {
      en: "Named as reduced at the 8 October 2026 press conference.",
      fr: "Nommées comme réduites à la conférence du 8 octobre 2026.",
    },
    source: defi,
  },
];

export const waterSites = [
  "Phoenix",
  "Saint-Paul",
  "Allée Brillant",
  "Highlands",
];

export const waterNote: Bilingual = {
  en: "Named in the 8 October 2026 report of protests over potable water. Site-level spend: Not published.",
  fr: "Nommés dans le reportage du 8 octobre 2026 sur des manifestations pour l'eau potable. Dépense au site : Non publiée.",
};

export const methods: Bilingual[] = [
  {
    en: "Global Business Corporations are in the national accounts and the balance of payments. The March 2025 IMF mission reviewed survey coverage and the method for GBC output and investment income with Statistics Mauritius and the Bank of Mauritius. Merchanting entered the 30 September 2026 estimates after that work.",
    fr: "Les Global Business Corporations sont dans les comptes nationaux et la balance des paiements. La mission du FMI de mars 2025 a revu la couverture des enquêtes et la méthode de production et de revenu d'investissement des GBC avec Statistics Mauritius et la Banque de Maurice. Le négoce international est entré dans les estimations du 30 septembre 2026 après ce travail.",
  },
  {
    en: "The press conference names a hole of Rs 164.9 billion. The addition is Not published.",
    fr: "La conférence de presse nomme un trou de 164,9 milliards Rs. L'addition est Non publiée.",
  },
];

export function publicFigures() {
  return {
    reviewed: FIGURES_REVIEWED,
    rule: "Copied from a cited page, or labelled Not published.",
    stocks,
    vintages,
    illustrations: illustrations.map((item) => ({
      ...item,
      results: item.denominators.map((d) => ({
        ...d,
        calculatedRatio: ratioOf(item.numerator, d.value),
      })),
    })),
    symmetry,
    budgetLines,
    waterSites,
    waterNote,
    methods,
    crossCheck: ionnewsCrossCheck,
  };
}

export function figuresToCsv(): string {
  const header = [
    "id",
    "gap",
    "period",
    "display",
    "indicator_en",
    "note_en",
    "publisher",
    "source_title",
    "source_url",
    "as_of",
  ];
  const lines = [header.join(",")];
  for (const row of [...vintages, ...budgetLines.map(toBudgetRow)]) {
    lines.push(
      [
        row.id,
        row.gap,
        row.period,
        row.display,
        row.indicator.en,
        row.note.en,
        row.source.publisher,
        row.source.title,
        row.source.url,
        row.source.asOf,
      ]
        .map(csvCell)
        .join(","),
    );
  }
  return `${lines.join("\n")}\n`;
}

function toBudgetRow(line: (typeof budgetLines)[number]): CitedRow {
  return {
    id: line.id,
    gap: "claim",
    indicator: line.line,
    period: "Not copied",
    display: line.display,
    note: line.note,
    source: line.source,
  };
}

function csvCell(value: string): string {
  return `"${value.replaceAll('"', '""')}"`;
}
