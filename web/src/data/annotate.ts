import type {
  Discrepancy,
  Instrument,
  Project,
  ReportingProfile,
  UsdEquivalent,
} from "./types";
import { unpublishedLine } from "./types";

/** A ledger row as stored before money-chain fields are filled in. */
export type Seed = Omit<
  Project,
  | "sector"
  | "instrument"
  | "declaredExpenditure"
  | "usd"
  | "perDiems"
  | "overheads"
  | "sharedExpenditure"
  | "outsideAgreed"
  | "discrepancies"
  | "excludeFromSum"
  | "reporting"
  | "startDate"
>;

function instrumentFromLabel(label: string): Instrument {
  return label.toLowerCase().includes("grant") ? "grant" : "unknown";
}

function reportingFor(seed: Seed): ReportingProfile {
  const sourceUrl = seed.sources[0]?.url ?? "https://www.greenclimate.fund/";
  if (seed.id.startsWith("mu-gcf-fp")) {
    return {
      reportName: "GCF project page and annual performance reports",
      identifier: seed.id.slice("mu-gcf-".length).toUpperCase(),
      sourceUrl,
      cycle: "annual",
      fields: ["committed", "disbursed", "status", "end"],
    };
  }
  if (seed.id.startsWith("mu-af-")) {
    return {
      reportName: "Adaptation Fund project page and project performance reports",
      identifier: seed.id,
      sourceUrl,
      cycle: "annual",
      fields: ["committed", "disbursed", "status"],
    };
  }
  if (seed.id.startsWith("mu-gcf-")) {
    return {
      reportName: "GCF readiness or country document",
      identifier: seed.id,
      sourceUrl,
      cycle: "annual",
      fields: ["committed", "disbursed", "status"],
    };
  }
  if (seed.id === "mu-farmers-gcca") {
    return {
      reportName: "Commonwealth Secretariat news report",
      identifier: "GCCA farmer grant",
      sourceUrl,
      cycle: "project_record",
      fields: ["committed"],
    };
  }
  return {
    reportName: "Cited project record",
    identifier: seed.id,
    sourceUrl,
    cycle: "project_record",
    fields: ["committed", "status"],
  };
}

const FARMER_USD: UsdEquivalent = {
  amount: 698_640,
  rate: 1.1644,
  rateDate: "2026-05-29",
  rateUrl: "https://api.frankfurter.app/2026-05-29?from=EUR&to=USD",
  note: "ECB reference rate via Frankfurter. The source date is 31 May 2026, a Sunday, so the rate is the business day Frankfurter returned, 29 May 2026. EUR 600,000 × 1.1644. The euro figure stays the cited amount.",
};

const FP033_DISCREPANCY: Discrepancy = {
  statement:
    "The UNDP project page says more than 2,000 families received a rooftop solar kit. UN Mauritius (April 2026) says more than 3,000 households. Both figures are published and are not reconciled on this record.",
  sourceUrls: [
    "https://www.undp.org/mauritius-seychelles/projects/accelerating-transformational-shift-low-carbon-economy-republic-mauritius",
    "https://mauritius.un.org/en/314358-clean-energy-circular-innovation-mauritius-powers-just-green-transition",
  ],
};

export function annotate(seed: Seed): Project {
  return {
    ...seed,
    sector: "climate",
    instrument: instrumentFromLabel(seed.amountLabel),
    declaredExpenditure: null,
    declaredExpenditureNote:
      "No source reviewed for this record states one expenditure figure.",
    usd: seed.id === "mu-farmers-gcca" ? FARMER_USD : null,
    perDiems: unpublishedLine("Per diems", seed.currency),
    overheads: unpublishedLine("Overheads", seed.currency),
    sharedExpenditure: [],
    outsideAgreed: [],
    discrepancies: seed.id === "mu-gcf-fp033" ? [FP033_DISCREPANCY] : [],
    excludeFromSum: false,
    reporting: reportingFor(seed),
    startDate: null,
    ageNote:
      seed.startYear == null ? "start_unpublished" : undefined,
  };
}
