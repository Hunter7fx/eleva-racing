"use client";

import type { Project } from "@/lib/content";
import { ELEVA_SCROLL_TO_EVENT, type ElevaScrollToDetail } from "@/lib/scroll";
import Link from "next/link";

type ProjectShowcaseProps = { projects: readonly Project[] };

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  if (!projects.length) return null;

  const resetScrollForProject = () => {
    window.dispatchEvent(new CustomEvent<ElevaScrollToDetail>(ELEVA_SCROLL_TO_EVENT, {
      detail: { behavior: "auto", top: 0 },
    }));
  };

  return (
    <div className="project-showcase">
      <div className="project-showcase__header">
        <div className="project-showcase__intro">
          <span className="project-showcase__eyebrow">PROJETOS SELECIONADOS</span>
          <h2>Da primeira impressão<br />ao próximo cliente.</h2>
        </div>

      </div>

      <div className="project-showcase__archive">
        <div className="project-showcase__archive-grid">
          {projects.map((project, index) => (
            <Link
              className={`project-showcase__tile project-showcase__tile--${project.layout}`}
              href={`/projetos/${project.id}`}
              key={project.id}
              aria-label={`Ver o projeto ${project.name}`}
              onClick={resetScrollForProject}
            >
              <img
                src={project.image}
                alt={project.name}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
              />
              <span className="project-showcase__tile-caption">
                <strong>{project.name}</strong>
                <small>Ver case <span aria-hidden="true">↗</span></small>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
