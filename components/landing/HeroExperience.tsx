"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ELEVA_SCROLL_EVENT, getScrollDetail, requestScrollTo } from "@/lib/scroll";
import { ThemeToggle } from "@/components/ThemeToggle";

export function HeroExperience() {
  const sceneRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const [navVisible, setNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const root = document.documentElement;
    const reveal = revealRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastScrollY = window.scrollY;
    const update = () => {
      const total = Math.max(scene.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -scene.getBoundingClientRect().top / total));

      root.style.setProperty("--scene-progress", progress.toFixed(4));
      root.style.setProperty("--canvas-scale", reduced ? "1.015" : (1.015 + progress * 0.055).toFixed(4));
      root.style.setProperty("--canvas-filter", reduced ? "saturate(.52) contrast(1.03) brightness(1.06)" : `saturate(${Math.max(0.4, 0.52 - progress * 0.12)}) contrast(${1.03 + progress * 0.04}) brightness(${1.06 - progress * 0.04})`);
    };

    const onScroll = (event: Event) => {
      const currentScrollY = getScrollDetail(event).scroll;
      if (!reduced && Math.abs(currentScrollY - lastScrollY) > 2) {
        const shouldShow = currentScrollY <= 24 || currentScrollY < lastScrollY;
        setNavVisible((visible) => visible === shouldShow ? visible : shouldShow);
        if (!shouldShow) setMenuOpen(false);
        lastScrollY = currentScrollY;
      }
      update();
    };
    const onPointerMove = (event: PointerEvent) => {
      if (reduced || window.innerWidth < 760) return;

      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      root.style.setProperty("--hero-mx", `${(x * 100).toFixed(2)}%`);
      root.style.setProperty("--hero-my", `${(y * 100).toFixed(2)}%`);
      root.style.setProperty("--hero-px", `${((x - 0.5) * 12).toFixed(2)}px`);
      root.style.setProperty("--hero-py", `${((y - 0.5) * 8).toFixed(2)}px`);

      if (!reveal) return;
      const daviStart = window.innerWidth < 760 ? window.innerWidth * 0.42 : window.innerWidth * 0.48;
      if (event.clientX < daviStart) {
        const hiddenMask = "radial-gradient(circle 0 at -999px -999px, #fff, transparent)";
        reveal.style.webkitMaskImage = hiddenMask;
        reveal.style.maskImage = hiddenMask;
        return;
      }
      const rect = reveal.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      const radius = window.innerWidth < 1024 ? 165 : 220;
      const mask = `radial-gradient(circle ${radius}px at ${localX}px ${localY}px, #fff 0%, #fff 34%, rgba(255,255,255,.82) 54%, rgba(255,255,255,.36) 77%, transparent 100%)`;
      reveal.style.webkitMaskImage = mask;
      reveal.style.maskImage = mask;
    };

    update();
    window.addEventListener(ELEVA_SCROLL_EVENT, onScroll);
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener(ELEVA_SCROLL_EVENT, onScroll);
      window.removeEventListener("resize", update);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab") return;

      const links = mobileNavRef.current?.querySelectorAll<HTMLAnchorElement>("a");
      if (!links?.length) return;

      const first = links[0];
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <section className="hero-scene" id="top" ref={sceneRef} aria-label="Eleva, branding, tecnologia e estratégia">
      <header className={`site-topbar ${navVisible ? "is-visible" : "is-hidden"}`}>
        <a
          className="brand-lockup"
          href="#top"
          aria-label="Voltar ao início da Eleva"
          onClick={(event) => {
            event.preventDefault();
            window.history.replaceState(null, "", "#top");
            requestScrollTo(0, "smooth");
          }}
        >
          <span className="brand-mark" aria-hidden="true">
            <Image className="brand-mark-light" src="/images/eleva-logo.svg" alt="" width={94} height={50} priority />
            <Image className="brand-mark-dark" src="/images/eleva-logo-white.svg" alt="" width={94} height={50} priority />
          </span>
          <span className="brand-context">Branding / Digital</span>
        </a>
        <nav className="hero-reference-nav" aria-label="Navegação da Eleva">
          <a href="#services">O que fazemos</a>
          <a href="#projects">Projetos</a>
          <a href="#ideas">Ideias</a>
          <a href="/contato">Contato</a>
          <a href="https://www.instagram.com/elevacria/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="hero-reference-contact" href="mailto:elevaorigem@gmail.com">Falar com a Eleva</a>
        </nav>
        <div className="site-topbar-actions">
          <ThemeToggle />
          <button
            className="mobile-menu"
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu size={17} strokeWidth={1.5} />
          </button>
        </div>
      </header>
      <nav id="mobile-navigation" ref={mobileNavRef} className={`mobile-navigation ${menuOpen ? "is-open" : ""}`} aria-label="Navegação mobile">
        <a href="#services" onClick={() => setMenuOpen(false)}>O que fazemos</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a>
        <a href="#ideas" onClick={() => setMenuOpen(false)}>Ideias</a>
        <a href="/contato" onClick={() => setMenuOpen(false)}>Contato</a>
        <a href="https://www.instagram.com/elevacria/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Instagram</a>
        <a className="mobile-navigation__contact" href="mailto:elevaorigem@gmail.com" onClick={() => setMenuOpen(false)}>Falar com a Eleva</a>
      </nav>
      <div className="hero-sticky">
        <div className="hero-atmosphere" aria-hidden="true">
          <video
            className="hero-background-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/cherry-blossom-hero-poster.jpg"
            tabIndex={-1}
          >
            <source src="/videos/cherry-blossom-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-canvas" aria-hidden="true">
          <Image className="hero-image hero-image-base" src="/images/eleva-davi-base-cutout.webp" alt="" fill priority quality={82} sizes="100vw" />
        </div>
        <div className="hero-motion-layer" ref={revealRef} aria-hidden="true">
          <Image className="hero-image" src="/images/eleva-davi-motion-cutout.webp" alt="" fill quality={82} sizes="100vw" />
        </div>
        <div className="hero-mobile-copy">
          <p className="hero-mobile-copy__eyebrow">Estratégia · Design · Tecnologia</p>
          <h1>Marcas que querem avançar.</h1>
          <p>Uma direção clara para transformar presença, experiência e próximos passos.</p>
          <a href="#services">Conheça a Eleva <span aria-hidden="true">↘</span></a>
        </div>
      </div>
    </section>
  );
}
