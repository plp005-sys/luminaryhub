import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = ["Idea", "Concept", "Pre-Production", "Production", "Edit", "Color", "Final Story"];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-6 py-24 sm:py-32" aria-label="Our creative process">
      <p className="mb-16 text-center text-[10px] uppercase tracking-[0.5em] text-[#c9a157]">
        How a story is made
      </p>
      <div className="relative pl-10 sm:pl-14">
        <div className="absolute left-0 top-0 h-full w-px bg-white/10 sm:left-1.5" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-[#c9a157] to-[#d9c08c] sm:left-1.5"
        />
        <ul className="space-y-14 sm:space-y-20">
          {STEPS.map((step, i) => (
            <ProcessItem key={step} step={step} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProcessItem({ step, index }: { step: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-baseline gap-5 sm:gap-8"
    >
      <span className="absolute -left-10 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-[#c9a157] shadow-[0_0_14px_3px_rgba(201,161,87,0.5)] sm:-left-14" />
      <span className="font-display text-sm text-ivory/40">{String(index + 1).padStart(2, "0")}</span>
      <span className="font-display text-[9vw] leading-none text-ivory sm:text-5xl">{step}</span>
    </motion.li>
  );
}
