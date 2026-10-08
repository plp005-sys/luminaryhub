import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "../data/services";
import { useCursor } from "../context/CursorContext";
import ServiceDetail from "./ServiceDetail";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const { setVariant, resetVariant } = useCursor();
  const previewIndex = hovered ?? 0;

  return (
    <section id="services" className="relative z-10 px-4 py-28 sm:px-8 sm:py-40" aria-label="Our services">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start gap-6 sm:mb-24 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#c9a157]">Capabilities</p>
            <h2 className="font-display text-[12vw] leading-[0.9] text-ivory sm:text-[5.5vw]">
              WHAT WE
              <br />
              CREATE
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
            Seven disciplines, one creative language. Every project moves through the same studio —
            from first concept to final frame.
          </p>
        </div>

        <div className="grid gap-x-10 lg:grid-cols-[1fr_1.1fr]">
          {/* list */}
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service, i) => (
              <li key={service.slug}>
                <button
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-8"
                  onMouseEnter={() => {
                    setHovered(i);
                    setVariant("view");
                  }}
                  onMouseLeave={() => {
                    resetVariant();
                  }}
                  onFocus={() => setHovered(i)}
                  onClick={() => setActive(i)}
                >
                  <span className="flex items-center gap-5 sm:gap-8">
                    <span
                      className={`font-display text-xl transition-colors sm:text-2xl ${
                        hovered === i ? "text-[#c9a157]" : "text-ivory/40"
                      }`}
                    >
                      {service.index}
                    </span>
                    <span
                      className={`font-display text-[9vw] leading-none transition-all duration-500 sm:text-[3.2vw] ${
                        hovered === i ? "translate-x-2 text-ivory" : "text-ivory/80"
                      }`}
                    >
                      {service.title}
                    </span>
                  </span>
                  <span
                    className={`hidden shrink-0 text-2xl transition-all duration-500 sm:block ${
                      hovered === i ? "translate-x-0 rotate-0 text-[#c9a157] opacity-100" : "-translate-x-2 opacity-0"
                    }`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden pl-0 text-sm leading-relaxed text-ivory/55 sm:pl-[4.5rem]"
                    >
                      <span className="block pb-5 sm:pb-7">{service.shortDescription}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* preview image panel */}
          <div className="relative mt-10 hidden h-[560px] overflow-hidden rounded-sm lg:block">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: previewIndex === i ? 1 : 0, scale: previewIndex === i ? 1 : 1.08 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.atmosphere}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </motion.div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 glass flex items-center justify-between px-6 py-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#d9c08c]">
                  {services[previewIndex].index} / 07
                </p>
                <p className="font-display text-2xl text-ivory">{services[previewIndex].title}</p>
              </div>
              <button
                onClick={() => setActive(previewIndex)}
                onMouseEnter={() => setVariant("view")}
                onMouseLeave={resetVariant}
                className="rounded-full border border-[#c9a157]/50 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#d9c08c] transition hover:bg-[#c9a157]/10"
              >
                View Detail
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <ServiceDetail service={services[active]} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
