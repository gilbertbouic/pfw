import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";
import { headlines } from "./src/data/headlines";
import { getAllProjects } from "./src/data/projects";
import { projectsToCsv } from "./src/data/csv";
import { reviewChanges } from "./src/data/review-diff";

const dataDir = path.join(process.cwd(), "public", "data");
mkdirSync(dataDir, { recursive: true });
const projects = getAllProjects();
writeFileSync(path.join(dataDir, "projects.json"), JSON.stringify(projects, null, 2));
writeFileSync(path.join(dataDir, "projects.csv"), projectsToCsv(projects));
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
