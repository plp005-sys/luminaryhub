import { useEffect, useRef } from "react";

export type AtmosphereTheme =
  | "hero"
  | "services"
  | "film"
  | "photography"
  | "creative"
  | "about"
  | "contact";

const THEMES: Record<AtmosphereTheme, { bg: string; blobs: string[] }> = {
  hero: {
    bg: "radial-gradient(ellipse at 50% 0%, #1a1611 0%, #07060a 55%, #000 100%)",
    blobs: [
      "radial-gradient(circle, rgba(201,161,87,0.45), transparent 70%)",
      "radial-gradient(circle, rgba(217,192,140,0.25), transparent 70%)",
      "radial-gradient(circle, rgba(138,106,63,0.3), transparent 70%)",
    ],
  },
  services: {
    bg: "radial-gradient(ellipse at 20% 20%, #15181c 0%, #0a0b0d 55%, #000 100%)",
    blobs: [
      "radial-gradient(circle, rgba(140,160,190,0.3), transparent 70%)",
      "radial-gradient(circle, rgba(185,189,198,0.22), transparent 70%)",
      "radial-gradient(circle, rgba(90,110,140,0.28), transparent 70%)",
    ],
  },
  film: {
    bg: "radial-gradient(ellipse at 70% 30%, #1c0f0a 0%, #0a0503 55%, #000 100%)",
    blobs: [
      "radial-gradient(circle, rgba(200,70,40,0.35), transparent 70%)",
      "radial-gradient(circle, rgba(217,140,60,0.28), transparent 70%)",
      "radial-gradient(circle, rgba(140,20,20,0.3), transparent 70%)",
    ],
  },
  photography: {
    bg: "radial-gradient(ellipse at 50% 50%, #17171a 0%, #080808 55%, #000 100%)",
    blobs: [
      "radial-gradient(circle, rgba(220,220,225,0.18), transparent 70%)",
      "radial-gradient(circle, rgba(170,175,185,0.2), transparent 70%)",
      "radial-gradient(circle, rgba(130,130,140,0.22), transparent 70%)",
    ],
  },
  creative: {
    bg: "radial-gradient(ellipse at 30% 60%, #1b0f24 0%, #0a0510 55%, #000 100%)",
    blobs: [
      "radial-gradient(circle, rgba(130,60,200,0.35), transparent 70%)",
      "radial-gradient(circle, rgba(220,60,160,0.28), transparent 70%)",
      "radial-gradient(circle, rgba(230,120,50,0.25), transparent 70%)",
    ],
  },
  about: {
    bg: "radial-gradient(ellipse at 50% 20%, #141910 0%, #080a06 55%, #000 100%)",
    blobs: [
      "radial-gradient(circle, rgba(201,161,87,0.3), transparent 70%)",
      "radial-gradient(circle, rgba(60,140,100,0.25), transparent 70%)",
      "radial-gradient(circle, rgba(217,192,140,0.2), transparent 70%)",
    ],
  },
  contact: {
    bg: "radial-gradient(ellipse at 50% 100%, #181410 0%, #07060a 55%, #000 100%)",
    blobs: [
      "radial-gradient(circle, rgba(201,161,87,0.4), transparent 70%)",
      "radial-gradient(circle, rgba(243,237,225,0.12), transparent 70%)",
      "radial-gradient(circle, rgba(138,106,63,0.28), transparent 70%)",
    ],
  },
};

export default function AtmosphereBackground({ theme }: { theme: AtmosphereTheme }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const blobRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const mouse = { x: 0.5, y: 0.5 };
    const eased = { x: 0.5, y: 0.5 };
    let raf = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);

    const factors = [36, -24, 18];
    const tick = () => {
      eased.x += (mouse.x - eased.x) * 0.04;
      eased.y += (mouse.y - eased.y) * 0.04;
      blobRefs.forEach((ref, i) => {
        if (!ref.current) return;
        const fx = (eased.x - 0.5) * factors[i];
        const fy = (eased.y - 0.5) * factors[i];
        ref.current.style.transform = `translate(${fx}px, ${fy}px)`;
      });
      if (!reduceMotion) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = THEMES[theme];

  return (
    <div id="atmosphere" ref={rootRef} style={{ background: t.bg }} aria-hidden="true">
      <div
        ref={blobRefs[0]}
        className="atmos-blob"
        style={{ width: "75vmax", height: "75vmax", left: "-20%", top: "-15%", background: t.blobs[0] }}
      />
      <div
        ref={blobRefs[1]}
        className="atmos-blob"
        style={{ width: "65vmax", height: "65vmax", right: "-15%", top: "25%", background: t.blobs[1] }}
      />
      <div
        ref={blobRefs[2]}
        className="atmos-blob"
        style={{ width: "70vmax", height: "70vmax", left: "15%", bottom: "-20%", background: t.blobs[2] }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent 0, transparent 2px, rgba(255,255,255,0.012) 3px)",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
