"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from "react";

export type DriftWallItem = { image: string; title?: string; href?: string };

type DriftWallProps = {
  items?: DriftWallItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  radius?: number;
  tilt?: number;
  turn?: number;
  roll?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: "up" | "down";
  variance?: number;
  parallax?: number;
  pauseOnHover?: boolean;
  lift?: number;
  fade?: number;
  dim?: number;
  grayscale?: boolean;
  overlayColor?: string;
  className?: string;
  style?: CSSProperties;
};

const prefersReducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const columnFactor = (index: number, variance: number) => 1 + variance * ((((index * 0.6180339887 + 0.35) % 1) * 2) - 1);

export default function DriftWall({
  items = [], columns = 5, tileWidth = 200, tileHeight = 132, gap = 18, radius = 14, tilt = 16, turn = -14,
  roll = 0, perspective = 1200, depth = 120, speed = 42, direction = "up", variance = 0.45, parallax = 0.6,
  pauseOnHover = false, lift = 64, fade = 0.6, dim = 0.55, grayscale = false, overlayColor = "#060010", className = "", style,
}: DriftWallProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const trackRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rafRef = useRef<number | null>(null);
  const offsetsRef = useRef<number[]>([]);
  const velocitiesRef = useRef<number[]>([]);
  const hoveredColRef = useRef(-1);
  const wallHoveredRef = useRef(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pointerDampedRef = useRef({ x: 0, y: 0 });
  const lastTsRef = useRef<number | null>(null);
  const activeIdRef = useRef<string | null>(null);
  const [containerHeight, setContainerHeight] = useState(600);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const columnItems = useMemo(() => {
    const result = Array.from({ length: columns }, () => [] as DriftWallItem[]);
    items.forEach((item, index) => result[index % columns].push(item));
    return result.map((column) => (column.length ? column : items.slice(0, 1)));
  }, [items, columns]);

  const columnMeta = useMemo(() => {
    const unit = tileHeight + gap;
    return columnItems.map((column) => {
      const copyHeight = Math.max(unit, column.length * unit);
      return { copyHeight, copies: Math.max(2, Math.ceil((containerHeight * 1.6) / copyHeight) + 1) };
    });
  }, [columnItems, tileHeight, gap, containerHeight]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(([entry]) => setContainerHeight(entry.contentRect.height || 600));
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const baseVelocities = useMemo(() => {
    const directionSign = direction === "up" ? 1 : -1;
    return columnItems.map((_, column) => speed * columnFactor(column, variance) * directionSign * (column % 2 === 0 ? 1 : -1));
  }, [columnItems, speed, direction, variance]);

  useEffect(() => {
    offsetsRef.current = columnMeta.map((meta, column) => meta.copyHeight * ((column * 0.37) % 1));
    velocitiesRef.current = columnItems.map(() => 0);
  }, [columnMeta, columnItems]);

  const applyPlaneTransform = useCallback((pointerX: number, pointerY: number) => {
    if (!planeRef.current) return;
    planeRef.current.style.transform = `translate(-50%, -50%) scale(1.18) rotateX(${tilt + pointerY}deg) rotateY(${turn + pointerX}deg) rotateZ(${roll}deg) translateZ(${-depth}px)`;
  }, [tilt, turn, roll, depth]);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (lastTsRef.current === null) lastTsRef.current = timestamp;
      const delta = Math.min(0.05, Math.max(0, timestamp - lastTsRef.current) / 1000);
      lastTsRef.current = timestamp;
      const maxTilt = parallax * 8;
      const damping = 1 - Math.exp(-delta / 0.12);
      pointerDampedRef.current.x += (pointerRef.current.x * maxTilt - pointerDampedRef.current.x) * damping;
      pointerDampedRef.current.y += (-pointerRef.current.y * maxTilt - pointerDampedRef.current.y) * damping;
      applyPlaneTransform(pointerDampedRef.current.x, pointerDampedRef.current.y);

      trackRefs.current.forEach((track, column) => {
        const meta = columnMeta[column];
        if (!track || !meta) return;
        if (!reduced) {
          const paused = wallHoveredRef.current && pauseOnHover;
          const target = baseVelocities[column] * (paused || hoveredColRef.current === column ? 0 : 1);
          const ease = 1 - Math.exp(-delta / (target === 0 ? 0.16 : 0.28));
          velocitiesRef.current[column] += (target - velocitiesRef.current[column]) * ease;
          let next = (offsetsRef.current[column] ?? 0) + velocitiesRef.current[column] * delta;
          next = ((next % meta.copyHeight) + meta.copyHeight) % meta.copyHeight;
          offsetsRef.current[column] = next;
        }
        track.style.transform = `translate3d(0, ${-(offsetsRef.current[column] ?? 0)}px, 0)`;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); rafRef.current = null; lastTsRef.current = null; };
  }, [applyPlaneTransform, baseVelocities, columnMeta, pauseOnHover, parallax, reduced]);

  const activate = useCallback((id: string, column: number) => { activeIdRef.current = id; hoveredColRef.current = column; setActiveId(id); }, []);
  const release = useCallback(() => { activeIdRef.current = null; hoveredColRef.current = -1; setActiveId(null); }, []);
  const cssVars = {
    "--dw-tile-w": `${tileWidth}px`, "--dw-tile-h": `${tileHeight}px`, "--dw-gap": `${gap}px`, "--dw-radius": `${radius}px`,
    "--dw-perspective": `${perspective}px`, "--dw-lift": `${lift}px`, "--dw-dim": dim, "--dw-gray": grayscale ? 1 : 0,
    "--dw-overlay": overlayColor, "--dw-edge": `${Math.max(0, (1 - fade) * 100)}%`, ...style,
  } as CSSProperties;

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    if (parallax > 0 && !reduced) pointerRef.current = { x: (event.clientX - rect.left) / rect.width - 0.5, y: (event.clientY - rect.top) / rect.height - 0.5 };
    const tile = document.elementFromPoint(event.clientX, event.clientY)?.closest<HTMLElement>("[data-tile-id]");
    if (tile && tile.dataset.tileId !== activeIdRef.current) activate(tile.dataset.tileId ?? "", Number(tile.dataset.col));
  }, [activate, parallax, reduced]);

  return (
    <div
      ref={containerRef}
      className={`drift-wall${reduced ? " drift-wall--reduced" : ""}${className ? ` ${className}` : ""}`}
      style={cssVars}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => { wallHoveredRef.current = true; }}
      onPointerLeave={() => { wallHoveredRef.current = false; pointerRef.current = { x: 0, y: 0 }; release(); }}
      role="group"
      aria-label="Projetos da Eleva em movimento"
    >
      <div ref={planeRef} className="drift-wall__plane">
        {columnItems.map((columnItemsForWall, column) => {
          const copies = Array.from({ length: columnMeta[column]?.copies ?? 2 });
          return <div className="drift-wall__col" key={`column-${column}`}><div className="drift-wall__track" ref={(element) => { trackRefs.current[column] = element; }}>
            {copies.map((_, copyIndex) => columnItemsForWall.map((item, itemIndex) => (
              <a key={`${column}-${copyIndex}-${itemIndex}`} href={item.href} target="_blank" rel="noreferrer noopener" className={`drift-wall__tile${activeId === `${column}-${copyIndex}-${itemIndex}` ? " is-active" : ""}`} data-tile-id={`${column}-${copyIndex}-${itemIndex}`} data-col={column} onFocus={() => activate(`${column}-${copyIndex}-${itemIndex}`, column)} onBlur={release} aria-label={item.title ?? "Projeto"}>
                <span className="drift-wall__inner"><img src={item.image} alt={item.title ?? ""} loading="lazy" decoding="async" draggable={false} /><span className="drift-wall__overlay" aria-hidden="true" /></span>
              </a>
            )))}
          </div></div>;
        })}
      </div>
    </div>
  );
}
