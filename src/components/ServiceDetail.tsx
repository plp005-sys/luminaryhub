import { motion } from "framer-motion";
import type { Service } from "../data/services";
import { useCursor } from "../context/CursorContext";
import { useEffect } from "react";

export default function ServiceDetail({ service, onClose }: { service: Service; onClose: () => void }) {
  const { setVariant, resetVariant } = useCursor();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${service.title} service detail`}
      className="fixed inset-0 z-[80] overflow-y-auto bg-[#07060a]"
      style={{ pointerEvents: "auto" }}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative min-h-[60vh] w-full overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.atmosphere}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07060a] via-black/30 to-black/50" />

        <button
          onClick={() => {
            console.log("Close button clicked");
            onClose();
            setTimeout(() => {
              console.log("Scrolling to home");
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }, 700);
          }}
          onMouseEnter={() => setVariant("view")}
          onMouseLeave={resetVariant}
          className="glass absolute right-5 top-24 z-[90] flex h-11 w-11 items-center justify-center rounded-full text-ivory sm:right-10"
          aria-label="Close service detail"
        >
          ✕
        </button>

        <div className="relative z-10 flex h-full min-h-[60vh] flex-col justify-end px-6 pb-16 pt-40 sm:px-14">
          <p className="mb-3 text-[10px] uppercase tracking-[0.5em] text-[#d9c08c]">
            Service {service.index} / 07
          </p>
          <h2 className="font-display text-[14vw] leading-[0.9] text-ivory sm:text-[7vw]">{service.title}</h2>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
        <p className="max-w-2xl font-serif-italic text-xl leading-relaxed text-ivory/85 sm:text-2xl">
          {service.description}
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#c9a157]">Process</p>
            <ol className="space-y-4">
              {service.process.map((step, i) => (
                <li key={step.label} className="flex items-center gap-4 text-ivory/80">
                  <span className="font-display text-sm text-[#c9a157]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="uppercase tracking-[0.15em]">{step.label}</span>
                  {i < service.process.length - 1 && <span className="ml-auto text-[#c9a157]/40">↓</span>}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#c9a157]">Capabilities</p>
            <ul className="space-y-4">
              {service.capabilities.map((cap) => (
                <li key={cap} className="border-b border-white/10 pb-4 uppercase tracking-[0.1em] text-ivory/70">
                  {cap}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 500);
              }}
              onMouseEnter={() => setVariant("view")}
              onMouseLeave={resetVariant}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#c9a157] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#07060a]"
            >
              Start This Project →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
