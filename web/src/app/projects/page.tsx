import type { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { uniqueFunders } from "@/lib/projects";
import { ProjectsView } from "./view";

export const metadata: Metadata = {
  title: "Project registry",
  description:
    "Sourced public-funding records for Mauritius. Each amount is copied from a public document or labelled Not published.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects" },
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  return <ProjectsView projects={projects} funders={uniqueFunders(projects)} />;
}
