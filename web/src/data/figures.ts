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
      en: "How Global Business output, merchanting, and the production-versus-expenditure GDP gap are measured. A level change here is not cash in the Treasury.",
      fr: "Comment sont mesurés la production des Global Business, le négoce international, et l'écart entre le PIB par la production et le PIB par la dépense. Un changement de niveau n'est pas de la trésorerie.",
    },
  },
  {
    id: "restatement",
    title: gapLabels.restatement,
    body: {
      en: "A later official document replaces an earlier printed growth, deficit, or debt ratio. Both vintages stay. This page does not pick a winner.",
      fr: "Un document officiel plus récent remplace un taux de croissance, un déficit ou un ratio de dette déjà imprimé. Les deux millésimes restent. Cette page ne choisit pas un vainqueur.",
    },
  },
  {
    id: "cash",
    title: gapLabels.cash,
    body: {
      en: "Revenue, expenditure, net borrowing, and the debt stock. Only this stock is a hole in the coffers. A higher GDP does not fill it.",
      fr: "Recettes, dépenses, emprunt net et stock de dette. Seul ce stock est un trou de caisse. Un PIB plus élevé ne le comble pas.",
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
      en: "Figure stated at the 8 October 2026 MSM press conference, as reported. Not a Statistics Mauritius release.",
      fr: "Chiffre énoncé à la conférence de presse du MSM du 8 octobre 2026, tel que rapporté. Ce n'est pas une publication de Statistics Mauritius.",
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
      en: "Earlier vintage named at the same press conference. The addition to Rs 164.9 billion is not printed.",
      fr: "Millésime antérieur nommé à la même conférence. L'addition jusqu'à 164,9 milliards Rs n'est pas imprimée.",
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
      en: "Later vintage named at the same press conference. Matches the rebased level reported from Statistics Mauritius.",
      fr: "Millésime postérieur nommé à la même conférence. Correspond au niveau rebasé rapporté depuis Statistics Mauritius.",
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
      en: "Earlier vintage named at the press conference. L'Express reports the pre-rebase 2024 level as Rs 693.3 billion.",
      fr: "Millésime antérieur nommé à la conférence. L'Express rapporte le niveau 2024 avant rebasement à 693,3 milliards Rs.",
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
      en: "Later vintage named at the press conference. L'Express reports the rebased 2024 level as Rs 756.7 billion.",
      fr: "Millésime postérieur nommé à la conférence. L'Express rapporte le niveau 2024 rebasé à 756,7 milliards Rs.",
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
      en: "Named at the press conference. The article does not print the addition. The two revisions it states (Rs 641 to 695 billion, and Rs 698 to 756 billion) sum to about Rs 112 billion. This page does not reconstruct the rest.",
      fr: "Nommé à la conférence de presse. L'article n'imprime pas l'addition. Les deux révisions qu'il énonce (641 à 695 milliards Rs, et 698 à 756 milliards Rs) font environ 112 milliards Rs. Cette page ne reconstruit pas le reste.",
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
      en: "New series. About Rs 58 billion, or 9.1%, above the previous series. Not new cash.",
      fr: "Nouvelle série. Environ 58 milliards Rs, soit 9,1 %, au-dessus de la série précédente. Pas de trésorerie nouvelle.",
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
      en: "Rebased series. A higher level changes a debt ratio. It does not change the rupee stock.",
      fr: "Série rebasée. Un niveau plus élevé change un ratio de dette. Il ne change pas le stock en roupies.",
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
      en: "State of the Economy, as reported by Reuters on 10 December 2024. The document said the previous government had overstated GDP, the deficit, and debt.",
      fr: "State of the Economy, tel que rapporté par Reuters le 10 décembre 2024. Le document disait que le gouvernement précédent avait surestimé le PIB, le déficit et la dette.",
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
      en: "State of the Economy, as reported by Reuters. A ratio, not a rupee stock.",
      fr: "State of the Economy, tel que rapporté par Reuters. Un ratio, pas un stock en roupies.",
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
    display: "Not a rupee figure",
    note: {
      en: "Paragraph 10: the IMF African Department raised concern about the drivers of GBC output and the statistical discrepancies in the December 2024 release. Paragraph 13 attributes a large share of the production-versus-expenditure gap to a miscalculation of GBC output, survey errors and misclassified costs, and the estimation method. The mission was not a cash audit.",
      fr: "Paragraphe 10 : le département Afrique du FMI s'est inquiété des moteurs de la production des GBC et des écarts statistiques de la publication de décembre 2024. Le paragraphe 13 attribue une large part de l'écart production/dépense à un mauvais calcul de la production des GBC, à des erreurs d'enquête et de classement des coûts, et à la méthode d'estimation. La mission n'était pas un audit de caisse.",
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
      en: "Deficit, from Rs 56.2 billion. Reported at 10.6% of GDP, from 8.5%. This is the cash-relevant hole in that release.",
      fr: "Déficit, depuis 56,2 milliards Rs. Rapporté à 10,6 % du PIB, contre 8,5 %. C'est le trou de caisse de cette publication.",
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
      en: "Up 16.0% from Rs 491.9 billion at end 2023/24. A rupee stock. The ratio depends on which GDP vintage is used.",
      fr: "En hausse de 16,0 % depuis 491,9 milliards Rs à la fin de 2023/24. Un stock en roupies. Le ratio dépend du millésime de PIB utilisé.",
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
      en: "2025 Article IV press release. A projection in that release, not the later Statistics Mauritius stock.",
      fr: "Communiqué de la consultation au titre de l'article IV de 2025. Une projection de ce communiqué, pas le stock ultérieur de Statistics Mauritius.",
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
      en: "2026 Article IV. Same date, different printed ratio from the June 2025 press release. Both stay.",
      fr: "Article IV 2026. Même date, ratio imprimé différent du communiqué de juin 2025. Les deux restent.",
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
      en: "Calculated on this page. Not a published ratio. The debt stock is end-June 2025. The GDP figures are calendar 2024. A rebasing moves the ratio without moving the rupees.",
      fr: "Calculé sur cette page. Ce n'est pas un ratio publié. Le stock de dette est à fin juin 2025. Les PIB sont ceux de l'année civile 2024. Un rebasement déplace le ratio sans déplacer les roupies.",
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
      en: "Illustration only. Appendix H prints the Rs 6.7 billion tag as about 2.8% of appropriated expenditure, not as a share of GDP. The UNDRR pilot's 5.2% of GDP uses a wider definition.",
      fr: "Illustration seulement. L'annexe H imprime l'étiquette de 6,7 milliards Rs à environ 2,8 % des dépenses appropriées, pas en part du PIB. Le pilote UNDRR à 5,2 % du PIB utilise une définition plus large.",
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
      en: "The 8 October 2026 press conference said the government cites Moody's and not the IMF. This page does not copy a Moody's figure. No Moody's URL is attached.",
      fr: "La conférence du 8 octobre 2026 a dit que le gouvernement cite Moody's et pas le FMI. Cette page ne copie pas de chiffre Moody's. Aucune URL Moody's n'est jointe.",
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
      en: "Named at the press conference as a rise. The Estimates line is not copied here.",
      fr: "Nommé à la conférence comme une hausse. La ligne des Estimates n'est pas copiée ici.",
    },
    source: defi,
  },
  {
    id: "electricity",
    line: { en: "Electricity price", fr: "Prix de l'électricité" },
    display: "Not published",
    note: {
      en: "Named as a rise. The tariff or subsidy line is not copied here.",
      fr: "Nommé comme une hausse. La ligne de tarif ou de subvention n'est pas copiée ici.",
    },
    source: defi,
  },
  {
    id: "bread",
    line: { en: "Bread price", fr: "Prix du pain" },
    display: "Not published",
    note: {
      en: "Named as a rise. The subsidy line is not copied here.",
      fr: "Nommé comme une hausse. La ligne de subvention n'est pas copiée ici.",
    },
    source: defi,
  },
  {
    id: "gas",
    line: { en: "Cooking gas price", fr: "Prix du gaz" },
    display: "Not published",
    note: {
      en: "Named as a rise. The subsidy line is not copied here.",
      fr: "Nommé comme une hausse. La ligne de subvention n'est pas copiée ici.",
    },
    source: defi,
  },
  {
    id: "preprimary",
    line: { en: "Pre-primary subsidy", fr: "Subvention du préscolaire" },
    display: "Not published",
    note: {
      en: "Named as removed. The vote line is not copied here.",
      fr: "Nommée comme supprimée. La ligne de vote n'est pas copiée ici.",
    },
    source: defi,
  },
  {
    id: "tertiary",
    line: { en: "Tertiary subsidy", fr: "Subvention du tertiaire" },
    display: "Not published",
    note: {
      en: "Named as removed. The vote line is not copied here.",
      fr: "Nommée comme supprimée. La ligne de vote n'est pas copiée ici.",
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
      en: "The press conference named a split at Rs 50,000. The Estimates line that would confirm two categories of workers is not copied here.",
      fr: "La conférence a nommé un seuil à 50 000 Rs. La ligne des Estimates qui confirmerait deux catégories de travailleurs n'est pas copiée ici.",
    },
    source: defi,
  },
  {
    id: "prb",
    line: { en: "PRB application", fr: "Application du PRB" },
    display: "Not published",
    note: {
      en: "The press conference said the PRB was given in 2026 with no retroactive payment, against a January 2025 commitment. No retroactive amount is copied here.",
      fr: "La conférence a dit que le PRB a été accordé en 2026 sans paiement rétroactif, contre un engagement de janvier 2025. Aucun montant rétroactif n'est copié ici.",
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
      en: "Named as reduced. The vote line is not copied here.",
      fr: "Nommées comme réduites. La ligne de vote n'est pas copiée ici.",
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
  en: "Named in the 8 October 2026 report of protests the day after demonstrations over potable water. The donor registry has no Central Water Authority project page. Site-level spend for these localities is Not published. Community evidence is not operating on this site.",
  fr: "Nommés dans le reportage du 8 octobre 2026 sur des manifestations, au lendemain de défilés pour l'eau potable. Le registre des bailleurs n'a pas de fiche Central Water Authority. La dépense au site pour ces localités est Non publiée. Les signalements de terrain ne fonctionnent pas sur ce site.",
};

export const methods: Bilingual[] = [
  {
    en: "A Global Business Corporation is recorded in the national accounts and the balance of payments. The March 2025 IMF mission worked with Statistics Mauritius and the Bank of Mauritius on survey coverage and the method used for GBC output and investment income. Merchanting was brought into the 30 September 2026 estimates after that work. That raises the measured level of GDP. It does not put rupees in the Treasury.",
    fr: "Une Global Business Corporation est enregistrée dans les comptes nationaux et la balance des paiements. La mission du FMI de mars 2025 a travaillé avec Statistics Mauritius et la Banque de Maurice sur la couverture des enquêtes et la méthode de production et de revenu d'investissement des GBC. Le négoce international est entré dans les estimations du 30 septembre 2026 après ce travail. Cela relève le niveau mesuré du PIB. Cela ne met pas de roupies au Trésor.",
  },
  {
    en: "This page does not publish a single hole of Rs 164.9 billion. A document that prints that total and the addition can be added. Until then the cell stays a claim, and the addition stays Not published.",
    fr: "Cette page ne publie pas un trou unique de 164,9 milliards Rs. Un document qui imprime ce total et l'addition peut être ajouté. D'ici là, la cellule reste une affirmation, et l'addition reste Non publiée.",
  },
  {
    en: "Loans are not grants. A GDP vintage is not a donor project. Rows here do not enter the registry total.",
    fr: "Les prêts ne sont pas des dons. Un millésime de PIB n'est pas un projet de bailleur. Les lignes d'ici n'entrent pas dans le total du registre.",
  },
];

export function publicFigures() {
  return {
    reviewed: FIGURES_REVIEWED,
    rule: "Copied from a cited page, or labelled Not published. Calculated ratios are marked as calculated.",
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
