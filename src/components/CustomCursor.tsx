import { useEffect, useRef, useState } from "react";
import type { CursorVariant } from "../context/CursorContext";

const LABELS: Record<CursorVariant, string> = {
  default: "",
  view: "View",
  explore: "Explore",
  play: "Play",
  drag: "Drag",
  nav: "",
};

export default function CustomCursor({ variant }: { variant: CursorVariant }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setTouch(true);
      return;
    }

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`;
      }
    };

    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (touch) return null;

  const scaled = variant !== "default" && variant !== "nav";

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: scaled ? 0 : 1 }} />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: scaled ? 76 : variant === "nav" ? 54 : 40,
          height: scaled ? 76 : variant === "nav" ? 54 : 40,
          background:
            variant === "nav"
              ? "rgba(217,192,140,0.08)"
              : scaled
              ? "rgba(7,6,10,0.65)"
              : "transparent",
          borderColor: scaled ? "rgba(217,192,140,0.8)" : "rgba(217,192,140,0.5)",
        }}
      >
        {LABELS[variant]}
      </div>
    </>
  );
}
