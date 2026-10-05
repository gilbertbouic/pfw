import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";
import { getAllProjects } from "./src/data/projects";
import { projectsToCsv } from "./src/data/csv";

const dataDir = path.join(process.cwd(), "public", "data");
mkdirSync(dataDir, { recursive: true });
const projects = getAllProjects();
writeFileSync(path.join(dataDir, "projects.json"), JSON.stringify(projects, null, 2));
writeFileSync(path.join(dataDir, "projects.csv"), projectsToCsv(projects));

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
