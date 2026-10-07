import { getAllProjects } from "@/data/projects";
import { portfolioUsd, type HazardType, type Instrument, type Project, type ProjectStatus, type Sector } from "@/data/types";
export { publicLinesToCsv } from "@/data/csv";

export type ProjectFilters = {
  q?: string;
  status?: ProjectStatus | "all";
  district?: string;
  hazard?: HazardType | "all";
  funder?: string;
  objective?: string;
  geography?: string;
  sector?: Sector | "all";
  instrument?: Instrument | "all";
};

export function filterProjects(
  filters: ProjectFilters,
  list = getAllProjects(),
): Project[] {
  const q = filters.q?.trim().toLowerCase() ?? "";
  const status = filters.status && filters.status !== "all" ? filters.status : null;
  const district =
    filters.district && filters.district !== "all" ? filters.district : null;
  const hazard =
    filters.hazard && filters.hazard !== "all" ? filters.hazard : null;
  const funder =
    filters.funder && filters.funder !== "all"
      ? filters.funder.toLowerCase()
      : null;
  const objective =
    filters.objective && filters.objective !== "all" ? filters.objective : null;
  const geography =
    filters.geography && filters.geography !== "all" ? filters.geography : null;
  const sector =
    filters.sector && filters.sector !== "all" ? filters.sector : null;
  const instrument =
    filters.instrument && filters.instrument !== "all"
      ? filters.instrument
      : null;

  return list.filter((p) => {
    if (status && p.status !== status) return false;
    if (district && p.district !== district && p.adminUnit !== district)
      return false;
    if (hazard && !p.hazards.includes(hazard)) return false;
    if (objective && p.climateObjective !== objective) return false;
    if (geography && p.geographyScope !== geography) return false;
    if (sector && p.sector !== sector) return false;
    if (instrument && p.instrument !== instrument) return false;
    if (
      funder &&
      !p.funders.some((f) => f.toLowerCase().includes(funder))
    )
      return false;
    if (q) {
      const hay = [
        p.title,
        p.summary,
        p.district,
        p.adminUnit,
        p.id,
        ...p.funders,
        ...p.implementingEntities,
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function uniqueDistricts(list = getAllProjects()): string[] {
  return Array.from(new Set(list.map((p) => p.district))).sort();
}

export function uniqueFunders(list = getAllProjects()): string[] {
  return Array.from(new Set(list.flatMap((p) => p.funders))).sort();
}

export function portfolioStats(list = getAllProjects()) {
  const counted = list.filter((p) => portfolioUsd(p) != null);
  const attributedSum = counted.reduce((s, p) => s + (portfolioUsd(p) ?? 0), 0);
  const regional = list.filter((p) => p.geographyScope === "multi_country").length;
  const completed = list.filter((p) => p.status === "completed").length;
  return {
    count: list.length,
    attributedSum,
    attributedCount: counted.length,
    regional,
    completed,
  };
}
