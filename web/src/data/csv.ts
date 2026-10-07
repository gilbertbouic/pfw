import { coverageNotes as openedNotes } from "./coverage";
import { donorReports } from "./reports";
import { fmcpAgencyLines, headlines } from "./headlines";
import { spendPlaces } from "./spend-places";
import {
  isOnMainList,
  getReviewedProjects,
} from "./projects";
import {
  LEDGER_REVIEWED,
  portfolioUsd,
  type Project,
  type SourceRef,
} from "./types";

const STOCK_BLANK = new Set([
  "Not published in the sources reviewed for this record.",
  "No source reviewed for this record states one expenditure figure.",
]);

export type PublicLine = {
  lineId: string;
  recordId: string;
  onMainList: boolean;
  inRegistrySum: boolean;
  title: string;
  line: string;
  label: string;
  amount: number | null;
  currency: string;
  instrument: string;
  sentence: string;
  page: string;
  url: string;
  opened: string;
  publisher: string;
};

function sourceFor(project: Project, url?: string | null): SourceRef | undefined {
  if (url) {
    const match = project.sources.find((source) => source.url === url);
    if (match) return match;
  }
  return project.sources[0];
}

function blankNote(note?: string | null): boolean {
  return !note || STOCK_BLANK.has(note);
}

export function publicLines(): PublicLine[] {
  const lines: PublicLine[] = [];

  function add(line: Omit<PublicLine, "lineId">) {
    if (
      line.amount == null &&
      !line.sentence &&
      !line.url
    ) {
      return;
    }
    lines.push({ ...line, lineId: `${line.recordId}:${line.line}:${lines.length + 1}` });
  }

  for (const project of getReviewedProjects()) {
    const onMainList = isOnMainList(project.id);
    const summed = onMainList ? portfolioUsd(project) : null;
    const primary = sourceFor(project);

    function money(
      line: string,
      label: string,
      amount: number | null,
      note: string | undefined,
      opts?: { url?: string | null; currency?: string; instrument?: string; sum?: boolean },
    ) {
      if (amount == null && blankNote(note)) return;
      const source = sourceFor(project, opts?.url);
      const currency = opts?.currency ?? project.currency;
      add({
        recordId: project.id,
        onMainList,
        inRegistrySum: Boolean(opts?.sum && summed != null && amount === summed && currency === "USD"),
        title: project.title,
        line,
        label,
        amount,
        currency,
        instrument: opts?.instrument ?? "",
        sentence: note ?? "",
        page: source?.page ?? "",
        url: opts?.url || source?.url || "",
        opened: source?.asOf || project.lastReviewed,
        publisher: source?.publisher ?? "",
      });
    }

    money("amount", project.amountLabel, project.amount, project.amountNote, {
      instrument: project.instrument,
      sum: project.currency === "USD" && project.mauritiusShare == null && project.geographyScope !== "multi_country",
    });
    money("cofinancing", "Co-financing", project.cofinancing, project.cofinancingNote);
    money("total_value", "Total value", project.totalValue, project.totalValueNote);
    money("disbursed", "Disbursed", project.disbursed, project.disbursedNote);
    money("mauritius_amount", "Mauritius amount", project.mauritiusShare, project.mauritiusShareNote, {
      sum: project.currency === "USD",
    });
    money("expenditure", "Declared expenditure", project.declaredExpenditure, project.declaredExpenditureNote);
    money("per_diems", project.perDiems.label, project.perDiems.amount, project.perDiems.note, {
      url: project.perDiems.sourceUrl,
      currency: project.perDiems.currency,
    });
    money("overheads", project.overheads.label, project.overheads.amount, project.overheads.note, {
      url: project.overheads.sourceUrl,
      currency: project.overheads.currency,
    });
    for (const shared of project.sharedExpenditure) {
      money("shared_expenditure", "Shared expenditure", shared.amount, shared.what, {
        url: shared.sourceUrl,
        currency: shared.currency,
      });
    }
    if (project.usd) {
      add({
        recordId: project.id,
        onMainList,
        inRegistrySum: summed != null && project.usd.amount === summed,
        title: project.title,
        line: "usd_equivalent",
        label: "USD equivalent",
        amount: project.usd.amount,
        currency: "USD",
        instrument: "",
        sentence: project.usd.note,
        page: "",
        url: project.usd.rateUrl ?? "",
        opened: project.usd.rateDate ?? "",
        publisher: "European Central Bank via Frankfurter",
      });
    }
    for (const source of project.sources) {
      const sentence = [source.quote, source.notes, source.title].filter(Boolean).join(" ");
      add({
        recordId: project.id,
        onMainList,
        inRegistrySum: false,
        title: project.title,
        line: "source",
        label: source.title,
        amount: null,
        currency: "",
        instrument: "",
        sentence,
        page: source.page ?? "",
        url: source.url,
        opened: source.asOf,
        publisher: source.publisher,
      });
    }
    for (const result of project.publishedResults) {
      const source = sourceFor(project, result.sourceUrl);
      add({
        recordId: project.id,
        onMainList,
        inRegistrySum: false,
        title: project.title,
        line: "result",
        label: "Result",
        amount: null,
        currency: "",
        instrument: "",
        sentence: result.label,
        page: source?.page ?? "",
        url: result.sourceUrl,
        opened: source?.asOf || project.lastReviewed,
        publisher: source?.publisher ?? "",
      });
    }
    for (const gap of project.discrepancies) {
      for (const url of gap.sourceUrls) {
        const source = sourceFor(project, url);
        add({
          recordId: project.id,
          onMainList,
          inRegistrySum: false,
          title: project.title,
          line: "discrepancy",
          label: "Published figures differ",
          amount: null,
          currency: "",
          instrument: "",
          sentence: gap.statement,
          page: source?.page ?? "",
          url,
          opened: source?.asOf || project.lastReviewed,
          publisher: source?.publisher ?? "",
        });
      }
    }
    for (const flag of project.outsideAgreed) {
      const source = sourceFor(project, flag.sourceUrl);
      add({
        recordId: project.id,
        onMainList,
        inRegistrySum: false,
        title: project.title,
        line: "outside_agreed",
        label: flag.sourceTitle,
        amount: null,
        currency: "",
        instrument: "",
        sentence: flag.statement,
        page: source?.page ?? "",
        url: flag.sourceUrl,
        opened: source?.asOf || project.lastReviewed,
        publisher: source?.publisher ?? "",
      });
    }
  }

  for (const place of spendPlaces) {
    add({
      recordId: place.projectId,
      onMainList: isOnMainList(place.projectId),
      inRegistrySum: false,
      title: place.name,
      line: "place",
      label: place.name,
      amount: place.spendAmount,
      currency: place.spendAmount == null ? "" : place.spendCurrency,
      instrument: "",
      sentence: [place.worksNote, place.spendNote].filter(Boolean).join(" "),
      page: "",
      url: place.sourceUrl,
      opened: place.asOf,
      publisher: place.sourcePublisher,
    });
  }

  for (const report of donorReports) {
    add({
      recordId: report.projectId,
      onMainList: isOnMainList(report.projectId),
      inRegistrySum: false,
      title: report.title,
      line: "report",
      label: report.type,
      amount: null,
      currency: "",
      instrument: "",
      sentence: [
        report.title,
        report.reportingPeriod ? `Period ${report.reportingPeriod}` : "",
        report.coverDate ? `Cover date ${report.coverDate}` : "",
        report.geographyNote ?? "",
      ]
        .filter(Boolean)
        .join(". "),
      page: "",
      url: report.url,
      opened: "",
      publisher: report.publisher,
    });
  }

  for (const figure of headlines) {
    const sentence = figure.source.quote
      ? `${figure.display}. ${figure.source.quote}`
      : `${figure.display}. ${figure.detail}`;
    add({
      recordId: figure.id,
      onMainList: false,
      inRegistrySum: false,
      title: figure.label,
      line: "headline",
      label: figure.label,
      amount: null,
      currency: "",
      instrument: "",
      sentence,
      page: figure.source.page ?? "",
      url: figure.source.url,
      opened: figure.source.asOf,
      publisher: figure.source.publisher,
    });
  }

  const fmcp = headlines.find((figure) => figure.id === "fmcp-received");
  for (const agency of fmcpAgencyLines) {
    add({
      recordId: "fmcp-received",
      onMainList: false,
      inRegistrySum: false,
      title: agency.agency,
      line: "agency",
      label: agency.agency,
      amount: agency.usdMillion,
      currency: "USD million",
      instrument: agency.instrument,
      sentence: "",
      page: fmcp?.source.page ?? "",
      url: fmcp?.source.url ?? "",
      opened: fmcp?.source.asOf ?? "",
      publisher: fmcp?.source.publisher ?? "",
    });
  }

  for (const note of openedNotes) {
    add({
      recordId: note.url,
      onMainList: false,
      inRegistrySum: false,
      title: note.title,
      line: "reviewed",
      label: note.funderClass,
      amount: null,
      currency: "",
      instrument: "",
      sentence: note.reason,
      page: "",
      url: note.url,
      opened: "",
      publisher: note.funderClass,
    });
  }

  return lines;
}

function escape(value: string | number | boolean | null | undefined): string {
  const text =
    value == null ? "" : typeof value === "boolean" ? (value ? "yes" : "no") : String(value);
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

export const PUBLIC_LINE_HEADERS = [
  "line_id",
  "record_id",
  "on_main_list",
  "in_registry_sum",
  "title",
  "line",
  "label",
  "amount",
  "currency",
  "instrument",
  "sentence",
  "page",
  "url",
  "opened",
  "publisher",
] as const;

export function publicLineCells(line: PublicLine): Array<string | number | null> {
  return [
    line.lineId,
    line.recordId,
    line.onMainList ? "yes" : "no",
    line.inRegistrySum ? "yes" : "no",
    line.title,
    line.line,
    line.label,
    line.amount,
    line.currency,
    line.instrument,
    line.sentence,
    line.page,
    line.url,
    line.opened,
    line.publisher,
  ];
}

export function publicLinesToCsv(lines = publicLines()): string {
  const rows = lines.map((line) => publicLineCells(line).map(escape).join(","));
  return [PUBLIC_LINE_HEADERS.join(","), ...rows].join("\n");
}

export function publicLedger() {
  return {
    ledgerReviewed: LEDGER_REVIEWED,
    lines: publicLines(),
    projects: getReviewedProjects().map((project) => ({
      ...project,
      onMainList: isOnMainList(project.id),
    })),
  };
}
