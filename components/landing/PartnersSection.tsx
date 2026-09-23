import { projectLogos } from "@/lib/content";

export function PartnersSection() {
  const firstRow = [...projectLogos, ...projectLogos.slice(0, 3)];
  const secondRow = [...projectLogos.slice(3), ...projectLogos.slice(0, 2)];

  function renderRow(logos: readonly (typeof projectLogos)[number][], row: string) {
    return (
      <div className={`project-logo-row ${row}`}>
        <div className="project-logo-track">
          {[...logos, ...logos].map((project, index) => (
            <a
              className="project-logo-card"
              key={`${row}-${project.id}-${index}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-hidden={index >= logos.length}
              tabIndex={index >= logos.length ? -1 : undefined}
            >
              <img src={project.image} alt={index < logos.length ? project.name : ""} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="partners-section" id="capabilities">
      <div className="section-shell">
        <div className="partners-topline">
          <span>Projetos que ganharam forma</span>
          <span>Marcas que confiam na Eleva</span>
        </div>
        <div className="project-logo-marquee" aria-label="Logos dos projetos da Eleva">
          <div className="project-logo-rows">
            {renderRow(firstRow, "is-forward")}
            {renderRow(secondRow, "is-reverse")}
          </div>
        </div>
        <div className="project-logo-mobile-grid" aria-label="Projetos da Eleva">
          {projectLogos.map((project) => (
            <a
              className="project-logo-card"
              key={`mobile-${project.id}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={project.name}
            >
              <img src={project.image} alt={project.name} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
