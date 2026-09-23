"use client";

import { services } from "@/lib/content";
import { ScrollExpandMedia } from "@/components/landing/ScrollExpandMedia";
import { ScrollFloat } from "@/components/landing/ScrollFloat";
import Aurora from "@/components/landing/Aurora";
import FlowingMenu from "@/components/landing/FlowingMenu";

export function CarsSection() {
  const active = services[0];

  return (
    <section className="cars-section" id="services">
      <Aurora />
      <div className="section-shell cars-header">
        <p className="eyebrow eyebrow-dark">O que fazemos</p>
        <ScrollFloat as="h2" animationDuration={0.9} stagger={0.025}>
          Tudo começa<br />com uma ideia.
        </ScrollFloat>
        <p className="cars-header-copy">Estratégia, design e tecnologia para tirar planos do papel.</p>
      </div>

      <ScrollExpandMedia
        src="/images/eleva-green-banner-mobile-v2.png"
        alt="Cena original de mármore branco, folhagens verdes e água em uma arquitetura luminosa"
        eyebrow={`Eleva / ${active.eyebrow}`}
        label={active.name}
        title="Clareza que ganha forma."
        description={active.description}
        tone="green"
      />

      <div className="section-shell cars-selector">
        <div className="cars-selector-top"><span>Escolha um caminho</span></div>
        <FlowingMenu
          textColor="var(--ink)"
          bgColor="transparent"
          marqueeBgColor="var(--surface)"
          marqueeTextColor="var(--ink)"
          borderColor="var(--line)"
          items={services.map((service) => ({
            link: `/servicos/${service.slug}`,
            text: service.name,
            image: service.image,
          }))}
        />
        <a className="outline-link" href="#projects">Explorar projetos ↗</a>
      </div>
    </section>
  );
}
