/**
 * Data check for the published ledger.
 *
 * Every money figure must be either:
 *   - a finite, non-negative number with an https source URL behind it, or
 *   - null, which the site shows as "Not published".
 * It also checks currencies, pinned USD equivalents, spend places, and that the
 * amounts in the generated CSV parse back to the same numbers.
 *
 * Run with `npm run check:data`. Exits 1 and lists every problem it finds.
 */
import { getReviewedProjects } from "../src/data/projects";
import { spendPlaces } from "../src/data/spend-places";
import { headlines } from "../src/data/headlines";
import {
  PUBLIC_LINE_HEADERS,
  publicLedger,
  publicLinesToCsv,
} from "../src/data/csv";
import { formatMoney, type Project } from "../src/data/types";

const NOT_PUBLISHED = "Not published";
const errors: string[] = [];
let checkedFigures = 0;

function fail(where: string, problem: string) {
  errors.push(`${where}: ${problem}`);
}

function isHttpsUrl(value: unknown): value is string {
  if (typeof value !== "string" || !value) return false;
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

function isCurrency(code: unknown): boolean {
  if (typeof code !== "string" || !/^[A-Z]{3}$/.test(code)) return false;
  try {
    new Intl.NumberFormat("en", { style: "currency", currency: code }).format(1);
    return true;
  } catch {
    return false;
  }
}

/** null is fine (shown as "Not published"); anything else must be a finite, non-negative number. */
function checkAmount(where: string, amount: unknown): amount is number {
  if (amount === null) return false;
  if (typeof amount !== "number" || !Number.isFinite(amount)) {
    fail(where, `amount ${JSON.stringify(amount)} is not a number or null`);
    return false;
  }
  if (amount < 0) fail(where, `amount ${amount} is negative`);
  checkedFigures += 1;
  return true;
}

// The site renders null money as "Not published". Guard that contract.
if (formatMoney(null) !== NOT_PUBLISHED) {
  fail("formatMoney", `null no longer renders as "${NOT_PUBLISHED}"`);
}

const CORE_MONEY_FIELDS = [
  "amount",
  "cofinancing",
  "totalValue",
  "disbursed",
  "declaredExpenditure",
  "mauritiusShare",
] as const satisfies ReadonlyArray<keyof Project>;

const projects = getReviewedProjects();
for (const p of projects) {
  const at = `project ${p.id}`;
  const sourced = p.sources.some((s) => isHttpsUrl(s.url));
  if (!p.sources.length) fail(at, "has no sources");
  for (const s of p.sources) {
    if (!isHttpsUrl(s.url)) fail(at, `source "${s.title}" has no valid https URL`);
  }
  if (!isCurrency(p.currency)) fail(at, `currency "${p.currency}" is not an ISO 4217 code`);

  for (const field of CORE_MONEY_FIELDS) {
    if (checkAmount(`${at}.${field}`, p[field]) && !sourced) {
      fail(`${at}.${field}`, "has a figure but the record has no https source");
    }
  }

  for (const key of ["perDiems", "overheads"] as const) {
    const line = p[key];
    if (checkAmount(`${at}.${key}`, line.amount)) {
      if (!isHttpsUrl(line.sourceUrl)) fail(`${at}.${key}`, "has a figure but no https sourceUrl");
      if (!isCurrency(line.currency)) fail(`${at}.${key}`, `currency "${line.currency}" is not ISO 4217`);
    } else if (line.amount === null && !line.note.trim()) {
      fail(`${at}.${key}`, "is unpublished but has no note saying so");
    }
  }

  p.sharedExpenditure.forEach((shared, i) => {
    const where = `${at}.sharedExpenditure[${i}]`;
    if (!isHttpsUrl(shared.sourceUrl)) fail(where, "has no https sourceUrl");
    if (checkAmount(where, shared.amount) && !isCurrency(shared.currency)) {
      fail(where, `currency "${shared.currency}" is not ISO 4217`);
    }
  });

  if (p.usd) {
    const where = `${at}.usd`;
    if (checkAmount(where, p.usd.amount) && p.currency !== "USD") {
      if (typeof p.usd.rate !== "number" || !Number.isFinite(p.usd.rate) || p.usd.rate <= 0) {
        fail(where, "converted from another currency without a positive pinned rate");
      }
      if (!p.usd.rateDate || Number.isNaN(Date.parse(p.usd.rateDate))) {
        fail(where, "has no parseable rateDate");
      }
      if (!isHttpsUrl(p.usd.rateUrl)) fail(where, "has no https rateUrl");
    }
  }
}

for (const place of spendPlaces) {
  const where = `spend place ${place.id}`;
  if (!isHttpsUrl(place.sourceUrl)) fail(where, "has no https sourceUrl");
  if (checkAmount(where, place.spendAmount) && !isCurrency(place.spendCurrency)) {
    fail(where, `currency "${place.spendCurrency}" is not ISO 4217`);
  }
}

for (const figure of headlines) {
  const where = `headline ${figure.id}`;
  if (!isHttpsUrl(figure.source.url)) fail(where, "has no https source URL");
  if (!/\d/.test(figure.display)) fail(where, `display "${figure.display}" has no figure`);
}

// Published lines (the same rows as /data/projects.json, .csv and .xlsx).
const ledger = publicLedger();
const lineCurrency = /^[A-Z]{3}( million)?$/;
for (const line of ledger.lines) {
  const where = `line ${line.lineId}`;
  if (checkAmount(where, line.amount)) {
    if (!isHttpsUrl(line.url)) fail(where, "has a figure but no https url");
    if (!lineCurrency.test(line.currency)) fail(where, `currency "${line.currency}" is not recognised`);
  }
}

// The CSV amounts must parse back to the published numbers.
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else if (ch === '"') {
        quoted = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += ch;
    }
  }
  row.push(cell);
  rows.push(row);
  return rows;
}

const csv = parseCsv(publicLinesToCsv(ledger.lines));
const header = csv[0]?.join(",");
if (header !== PUBLIC_LINE_HEADERS.join(",")) fail("CSV", "header does not match PUBLIC_LINE_HEADERS");
if (csv.length !== ledger.lines.length + 1) {
  fail("CSV", `has ${csv.length - 1} rows for ${ledger.lines.length} published lines`);
}
const amountCol = PUBLIC_LINE_HEADERS.indexOf("amount");
csv.slice(1).forEach((row, i) => {
  const line = ledger.lines[i];
  const where = `CSV row ${i + 2}`;
  if (row.length !== PUBLIC_LINE_HEADERS.length) {
    fail(where, `has ${row.length} cells, expected ${PUBLIC_LINE_HEADERS.length}`);
    return;
  }
  const cell = row[amountCol];
  if (cell === "") {
    if (line && line.amount !== null) fail(where, "amount is blank but the line has a figure");
    return;
  }
  const parsed = Number(cell);
  if (!Number.isFinite(parsed)) fail(where, `amount "${cell}" does not parse`);
  else if (line && parsed !== line.amount) fail(where, `amount ${parsed} differs from ${line.amount}`);
});

if (errors.length) {
  console.error(`Data check failed with ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(
  `Data check passed: ${projects.length} records, ${spendPlaces.length} spend places, ` +
    `${ledger.lines.length} published lines, ${checkedFigures} money figures sourced and parseable.`,
);
