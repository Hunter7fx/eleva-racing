"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { trajectoryItems } from "@/lib/content";
import { ELEVA_SCROLL_EVENT, requestScrollTo } from "@/lib/scroll";
import { MaskedHeading } from "@/components/landing/MaskedHeading";

const trajectorySlides = trajectoryItems.slice(0, 3);
const trajectoryIndicatorCount = 4;

export function HistorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const copyCoverProgressRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const sticky = section.querySelector<HTMLElement>(".history-sticky");
    const update = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const entryTravel = window.innerHeight * 0.72;
      const entryProgress = reduced ? 1 : Math.min(1, Math.max(0, (window.innerHeight - sectionTop) / entryTravel));
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight;
      const mobile = viewportWidth < 760;

      if (sticky && mobile) {
        const sectionBottom = sectionTop + section.offsetHeight;
        sticky.style.position = sectionTop > 0 || sectionBottom < viewportHeight ? "absolute" : "fixed";
        sticky.style.top = sectionTop > 0 ? "0px" : sectionBottom < viewportHeight ? `${Math.max(0, section.offsetHeight - viewportHeight)}px` : "0px";
        sticky.style.left = "0px";
        sticky.style.width = "100%";
      } else if (sticky) {
        sticky.style.removeProperty("position");
        sticky.style.removeProperty("top");
        sticky.style.removeProperty("left");
        sticky.style.removeProperty("width");
      }

      root.style.setProperty("--history-entry", entryProgress.toFixed(4));
      const compactWidth = Math.min(viewportWidth * (viewportWidth < 760 ? 0.88 : 0.72), viewportWidth < 760 ? 560 : 960);
      const compactHeight = Math.min(viewportHeight * (viewportWidth < 760 ? 0.58 : 0.62), viewportWidth < 760 ? 520 : 560);
      const cardWidth = compactWidth + (viewportWidth - compactWidth) * entryProgress;
      const cardHeight = compactHeight + (viewportHeight - compactHeight) * entryProgress;
      root.style.setProperty("--history-card-width", `${cardWidth}px`);
      root.style.setProperty("--history-card-height", `${cardHeight}px`);
      root.style.setProperty("--history-card-left", `${(viewportWidth - cardWidth) / 2}px`);
      root.style.setProperty("--history-card-top", `${Math.max(0, (viewportHeight - cardHeight) / 2)}px`);
      root.style.setProperty("--history-card-radius", `${24 * (1 - entryProgress)}px`);
      // On touch screens, let the intro headline finish reading before the first
      // card enters its area. Desktop keeps the tighter overlapping composition.
      const galleryStart = viewportWidth < 760 ? viewportWidth * 1.28 : window.innerWidth + 30;
      root.style.setProperty("--history-gallery-start", `${galleryStart}px`);

      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -sectionTop / distance));
      // On phones the intro headline needs a quiet reading window before the
      // horizontal gallery starts covering its right edge.
      const galleryProgress = reduced
        ? 1
        : mobile
          ? Math.min(1, Math.max(0, (progress - 0.32) / 0.68))
          : Math.min(1, Math.max(0, (progress - 0.02) / 0.94));
      root.style.setProperty("--history-gallery-reveal", galleryProgress.toFixed(4));
      const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-history-slide]"));
      const lastSlide = slides.at(-1);
      const maxShift = Math.max(0, (lastSlide?.offsetLeft ?? 0) + track.offsetLeft + (lastSlide?.offsetWidth ?? window.innerWidth) - window.innerWidth);
      const shift = maxShift * galleryProgress;
      track.style.transform = reduced ? "none" : `translate3d(${-shift}px, 0, 0)`;

      const copyElement = section.querySelector<HTMLElement>(".history-intro-copy");
      const copyBounds = section.querySelector<HTMLElement>(".history-intro-copy .masked-heading")?.getBoundingClientRect();
      const firstSlideBounds = slides[0]?.getBoundingClientRect();
      const firstCardIsStillAhead = Boolean(copyBounds && firstSlideBounds && firstSlideBounds.left >= copyBounds.right);
      if (firstCardIsStillAhead) copyCoverProgressRef.current = 0;
      if (copyBounds && firstSlideBounds && !firstCardIsStillAhead) {
        const overlap = Math.max(0, Math.min(firstSlideBounds.right, copyBounds.right) - Math.max(firstSlideBounds.left, copyBounds.left));
        const coverProgress = Math.min(1, overlap / Math.max(copyBounds.width, 1));
        copyCoverProgressRef.current = Math.max(copyCoverProgressRef.current, coverProgress);
      }

      const closest = slides.reduce(
        (best, slide, index) => Math.abs(slide.offsetLeft - shift) < best.distance
          ? { distance: Math.abs(slide.offsetLeft - shift), index }
          : best,
        { distance: Number.POSITIVE_INFINITY, index: 0 },
      );
      const copyEntry = entryProgress > 0.88 ? 1 : 1 - copyCoverProgressRef.current;
      root.style.setProperty("--history-copy-entry", copyEntry.toFixed(4));
      copyElement?.style.removeProperty("opacity");
      setActiveIndex(closest.index);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    if (!reduced) {
      window.addEventListener(ELEVA_SCROLL_EVENT, update);
      window.addEventListener("resize", update, { passive: true });
      window.addEventListener("load", update);
    }
    return () => {
      window.removeEventListener("scroll", update);
      if (!reduced) {
        window.removeEventListener(ELEVA_SCROLL_EVENT, update);
        window.removeEventListener("resize", update);
        window.removeEventListener("load", update);
      }
    };
  }, []);

  const jumpTo = (index: number) => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const slide = track.querySelectorAll<HTMLElement>("[data-history-slide]")[index];
    if (!slide) return;

    const lastSlide = track.querySelectorAll<HTMLElement>("[data-history-slide]").item(trajectorySlides.length - 1);
    const maxShift = Math.max(0, (lastSlide?.offsetLeft ?? 0) + track.offsetLeft + (lastSlide?.offsetWidth ?? window.innerWidth) - window.innerWidth);
    const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
    const target = Math.min(maxShift, Math.max(0, track.offsetLeft + slide.offsetLeft - window.innerWidth * 0.12));
    const galleryProgress = target / Math.max(maxShift, 1);
    const sectionProgress = 0.02 + galleryProgress * 0.94;
    requestScrollTo(section.offsetTop + distance * sectionProgress, "smooth");
  };

  return (
    <section className="history-section" id="trajectory" ref={sectionRef}>
      <div className="history-sticky">
        <div className="history-scene-track" aria-label="Trajetória da Eleva">
          <article className="history-intro-panel">
            <div className="history-intro-copy">
              <p className="eyebrow eyebrow-dark">Nossa trajetória</p>
              <MaskedHeading
                text="Uma ideia ganha força quando tudo conversa."
                src="/images/eleva-gallery-banner.png"
                align="left"
                weight={650}
                textScale={0.075}
                fillScale={1.35}
                parallax={18}
                drift={10}
                reveal="rise"
                trigger="view"
              />
            </div>
          </article>

          <div className="history-slides-track" ref={trackRef}>
            {trajectorySlides.map((item) => (
              <article className="history-slide" data-history-slide key={`${item.id}-${item.title}`}>
                <Image className="history-image-desktop" src={item.image} alt={item.title} fill sizes="(max-width: 760px) 86vw, 70vw" />
                {"mobileImage" in item ? <Image className="history-image-mobile" src={item.mobileImage} alt="" fill sizes="86vw" /> : null}
                <div className="history-card-shade" />
                <footer className="history-card-footer">
                  <div>
                    <p>{item.title}</p>
                    <span>{item.description}</span>
                  </div>
                  <button type="button" aria-label={`Ver ${item.title}`}><Maximize2 size={15} /></button>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className="history-controls" aria-label="Controles da trajetória da Eleva">
          <button type="button" aria-label="Etapa anterior" onClick={() => jumpTo(Math.max(0, activeIndex - 1))}><ArrowLeft size={18} /></button>
          <div className="history-dots">
            {Array.from({ length: trajectoryIndicatorCount }, (_, index) => {
              const targetIndex = Math.min(index, trajectorySlides.length - 1);
              const item = trajectorySlides[targetIndex];
              return <button className={targetIndex === activeIndex ? "is-active" : ""} key={`trajectory-indicator-${index}`} type="button" aria-label={`Ir para ${index === trajectoryIndicatorCount - 1 ? "a última etapa" : item.title}`} onClick={() => jumpTo(targetIndex)} />;
            })}
          </div>
          <button type="button" aria-label="Próxima etapa" onClick={() => jumpTo(Math.min(trajectorySlides.length - 1, activeIndex + 1))}><ArrowRight size={18} /></button>
          </div>
      </div>
    </section>
  );
}
