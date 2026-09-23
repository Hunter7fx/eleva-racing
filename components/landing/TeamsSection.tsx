"use client";

import ProjectShowcase from "@/components/landing/ProjectShowcase";
import { projects } from "@/lib/content";

export function TeamsSection() {
  return (
    <section className="teams-section" id="projects">
      <div className="teams-surface">
        <ProjectShowcase projects={projects} />

        <div className="section-shell team-caption">
          <span>Projetos selecionados</span>
          <p>Uma seleção de projetos que ganharam forma com a Eleva.</p>
        </div>
      </div>
    </section>
  );
}
