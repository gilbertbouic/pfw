import {
  attributedMauritiusAmount,
  portfolioUsd,
  type Project,
} from "./types";

export function projectsToCsv(list: Project[]): string {
  const headers = [
    "id",
    "title",
    "kind",
    "sector",
    "instrument",
    "status",
    "climate_objective",
    "geography_scope",
    "mauritius_share_known",
    "country",
    "district",
    "admin_unit",
    "lat",
    "lng",
    "funders",
    "implementing_entities",
    "currency",
    "amount_label",
    "amount",
    "cofinancing",
    "total_value",
    "disbursed",
    "declared_expenditure",
    "mauritius_share",
    "usd_equivalent",
    "usd_rate",
    "usd_rate_date",
    "start_date",
    "start_year",
    "end_year",
    "source_urls",
    "last_reviewed",
    "confidence",
  ];

  const escape = (v: string | number | null | undefined) => {
    const s = v == null ? "" : String(v);
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const rows = list.map((p) =>
    [
      p.id,
      p.title,
      p.kind,
      p.sector,
      p.instrument,
      p.status,
      p.climateObjective ?? "",
      p.geographyScope,
      attributedMauritiusAmount(p) != null ? "yes" : "no",
      p.country,
      p.district,
      p.adminUnit,
      p.lat,
      p.lng,
      p.funders.join("|"),
      p.implementingEntities.join("|"),
      p.currency,
      p.amountLabel,
      p.amount,
      p.cofinancing,
      p.totalValue,
      p.disbursed,
      p.declaredExpenditure,
      p.mauritiusShare,
      p.usd?.amount ?? (p.currency === "USD" ? portfolioUsd(p) : ""),
      p.usd?.rate ?? "",
      p.usd?.rateDate ?? "",
      p.startDate ?? "",
      p.startYear ?? "",
      p.endYear ?? "",
      p.sources.map((s) => s.url).join("|"),
      p.lastReviewed,
      p.confidence,
    ]
      .map(escape)
      .join(","),
  );

  return [headers.join(","), ...rows].join("\n");
}
