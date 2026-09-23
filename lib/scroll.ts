export const ELEVA_SCROLL_EVENT = "eleva:scroll";
export const ELEVA_SCROLL_TO_EVENT = "eleva:scroll-to";

export type ElevaScrollDetail = {
  direction: number;
  scroll: number;
  velocity: number;
};

export type ElevaScrollToDetail = {
  behavior?: ScrollBehavior;
  top: number;
};

export function requestScrollTo(top: number, behavior: ScrollBehavior = "smooth") {
  window.dispatchEvent(new CustomEvent<ElevaScrollToDetail>(ELEVA_SCROLL_TO_EVENT, {
    detail: { top, behavior },
  }));
}

export function getScrollDetail(event: Event): ElevaScrollDetail {
  if (event instanceof CustomEvent) {
    return event.detail as ElevaScrollDetail;
  }

  return { direction: 0, scroll: window.scrollY, velocity: 0 };
}
