import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/content";
import { FadeOnScroll } from "@/components/FadeOnScroll";
import { ThemeToggle } from "@/components/ThemeToggle";

type ServicePageProps = { service: Service };

export function ServicePage({ service }: ServicePageProps) {
  return (
    <main className="service-page">
      <header className="service-page-nav">
        <Link className="service-page-back" href="/#services"><ArrowLeft size={16} /> O que fazemos</Link>
        <Link className="service-page-brand" href="/">Eleva <span>Branding / Digital</span></Link>
        <div className="service-page-actions">
          <ThemeToggle />
          <a className="service-page-contact" href="mailto:elevaorigem@gmail.com">Falar com a Eleva <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <section className="service-page-hero">
        <div className="service-page-hero-background" aria-hidden="true">
          <Image src="/images/service-portal-hero-v1.webp" alt="" fill priority sizes="100vw" />
        </div>
        <div className="service-page-hero-grid" aria-hidden="true" />
        <FadeOnScroll className="service-page-hero-copy">
          <p className="eyebrow eyebrow-dark">Eleva / {service.eyebrow}</p>
          <h1>{service.name}</h1>
          <p className="service-page-intro">{service.intro}</p>
        </FadeOnScroll>
      </section>

      <section className="service-page-detail">
        <FadeOnScroll>
          <p className="eyebrow eyebrow-dark">O que fazemos</p>
          <h2>{service.detail}</h2>
        </FadeOnScroll>
        <FadeOnScroll className="service-page-deliverables" delay={100}>
          <p className="eyebrow eyebrow-dark">Entregas</p>
          <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
        </FadeOnScroll>
      </section>

      <section className="service-page-problem">
        <FadeOnScroll className="service-page-section-heading">
          <p className="eyebrow eyebrow-dark">A dor</p>
          <h2>{service.painTitle}</h2>
        </FadeOnScroll>
        <div className="service-page-points">
          {service.pains.map((item, index) => <FadeOnScroll as="article" delay={index * 140} key={item}><span>0{index + 1}</span><p>{item}</p></FadeOnScroll>)}
        </div>
      </section>

      <section className="service-page-gains">
        <FadeOnScroll className="service-page-section-heading">
          <p className="eyebrow eyebrow-dark">O que muda</p>
          <h2>{service.gainsTitle}</h2>
        </FadeOnScroll>
        <div className="service-page-points">
          {service.gains.map((item, index) => <FadeOnScroll as="article" delay={index * 140} key={item}><span>0{index + 1}</span><p>{item}</p></FadeOnScroll>)}
        </div>
      </section>

      <section className="service-page-difference">
        <p className="eyebrow">A diferença Eleva</p>
        <FadeOnScroll as="p">{service.difference}</FadeOnScroll>
      </section>

      <section className="service-page-portal-banner">
        <Image src="/images/service-portal-banner-v1.png" alt="Arquitetura clássica em meio a natureza e montanhas" fill sizes="100vw" />
        <div className="service-page-portal-grid" aria-hidden="true" />
        <div className="service-page-portal-copy">
          <p className="eyebrow">Visão integrada</p>
          <p>Uma presença forte nasce quando estratégia, comunicação e experiência deixam de trabalhar separadas.</p>
        </div>
      </section>

      <section className="service-page-process">
        <FadeOnScroll className="service-page-section-heading">
          <p className="eyebrow eyebrow-dark">Como acontece</p>
          <h2>Do diagnóstico à decisão mais clara.</h2>
        </FadeOnScroll>
        <ol>
          {service.process.map((item, index) => <FadeOnScroll as="li" delay={index * 140} key={item}><span>0{index + 1}</span><p>{item}</p></FadeOnScroll>)}
        </ol>
      </section>

      <section className="service-page-next">
        <p className="eyebrow">Próximo passo</p>
        <h2>Vamos entender onde sua empresa pode avançar.</h2>
        <a className="service-page-cta" href="mailto:elevaorigem@gmail.com">Falar sobre meu projeto <ArrowUpRight size={18} /></a>
      </section>
    </main>
  );
}
