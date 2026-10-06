import type { SourceRef } from "./types";

export type ReviewChange = {
  id: string;
  kind: "added" | "removed" | "off_list" | "conversion";
  display: string;
  label: string;
  labelFr: string;
  source: SourceRef;
};

/** Public-ledger changes between the 2026-09-16 review and 2026-10-05. */
export const reviewChanges: ReviewChange[] = [
  {
    id: "added-p180266",
    kind: "added",
    display: "USD 16,000,000",
    label: "World Bank Rodrigues airport grant",
    labelFr: "Don de la Banque mondiale, aéroport de Rodrigues",
    source: {
      title: "World Bank Projects API, P180266",
      url: "https://search.worldbank.org/api/v2/projects?format=json&id=P180266",
      publisher: "World Bank",
      asOf: "2026-10-05",
      group: "world_bank",
    },
  },
  {
    id: "off-coastal",
    kind: "off_list",
    display: "USD 9,119,240",
    label: "Adaptation Fund coastal programme, started 2012, completed",
    labelFr: "Programme côtier du Fonds d'adaptation, commencé en 2012, achevé",
    source: {
      title: "Adaptation Fund project page",
      url: "https://www.adaptation-fund.org/project/climate-change-adaptation-programme-in-the-coastal-zone-of-mauritius/",
      publisher: "Adaptation Fund",
      asOf: "2011-11-16",
      group: "other",
    },
  },
  {
    id: "removed-fp135",
    kind: "removed",
    display: "Mauritius amount not published",
    label: "GCF FP135",
    labelFr: "GCF FP135",
    source: {
      title: "GCF FP135 project page",
      url: "https://www.greenclimate.fund/project/fp135",
      publisher: "Green Climate Fund",
      asOf: "2026-09",
      group: "other",
    },
  },
  {
    id: "removed-fp161",
    kind: "removed",
    display: "Mauritius amount not published",
    label: "GCF FP161",
    labelFr: "GCF FP161",
    source: {
      title: "GCF FP161 project page",
      url: "https://www.greenclimate.fund/project/fp161",
      publisher: "Green Climate Fund",
      asOf: "2026-09",
      group: "other",
    },
  },
  {
    id: "removed-fp095",
    kind: "removed",
    display: "Mauritius amount not published",
    label: "GCF FP095",
    labelFr: "GCF FP095",
    source: {
      title: "GCF FP095 project page",
      url: "https://www.greenclimate.fund/project/fp095",
      publisher: "Green Climate Fund",
      asOf: "2026-09",
      group: "other",
    },
  },
  {
    id: "removed-fp099",
    kind: "removed",
    display: "Mauritius amount not published",
    label: "GCF FP099",
    labelFr: "GCF FP099",
    source: {
      title: "GCF FP099 project page",
      url: "https://www.greenclimate.fund/project/fp099",
      publisher: "Green Climate Fund",
      asOf: "2026-09",
      group: "other",
    },
  },
  {
    id: "removed-fp223",
    kind: "removed",
    display: "Mauritius amount not published",
    label: "GCF FP223",
    labelFr: "GCF FP223",
    source: {
      title: "GCF FP223 project page",
      url: "https://www.greenclimate.fund/project/fp223",
      publisher: "Green Climate Fund",
      asOf: "2026-09",
      group: "other",
    },
  },
  {
    id: "conversion-farmer",
    kind: "conversion",
    display: "EUR 600,000 · USD 698,640",
    label: "Farmer grant, pinned dollar test",
    labelFr: "Don agricole, test en dollars figé",
    source: {
      title:
        "Commonwealth support secures grant to help Mauritian farmers adapt to changing climate",
      url: "https://thecommonwealth.org/news/commonwealth-support-secures-grant-help-mauritian-farmers-adapt-changing-climate",
      publisher: "Commonwealth Secretariat",
      asOf: "2026-05-31",
      group: "other",
      notes:
        "ECB rate via Frankfurter for 2026-05-29, the business day before the Sunday source date. EUR 600,000 × 1.1644.",
    },
  },
];
