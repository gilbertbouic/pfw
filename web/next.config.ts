import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";
import { headlines } from "./src/data/headlines";
import { publicLedger, publicLinesToCsv } from "./src/data/csv";
import { publicLinesToXlsx } from "./src/data/xlsx";
import { reviewChanges } from "./src/data/review-diff";

const dataDir = path.join(process.cwd(), "public", "data");
mkdirSync(dataDir, { recursive: true });
const ledger = publicLedger();
writeFileSync(path.join(dataDir, "projects.json"), JSON.stringify(ledger, null, 2));
writeFileSync(path.join(dataDir, "projects.csv"), publicLinesToCsv(ledger.lines));
writeFileSync(path.join(dataDir, "projects.xlsx"), publicLinesToXlsx(ledger.lines));
writeFileSync(
  path.join(dataDir, "ledger.json"),
  JSON.stringify({ headlines, reviewChanges }, null, 2),
);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
