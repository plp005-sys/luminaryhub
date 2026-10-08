import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import type { Variants } from "framer-motion";

const CAPABILITIES = [
  "Advertisements",
  "Film",
  "Documentary",
  "Photography",
  "Corporate Video",
  "Creative Production",
  "Custom Client Presentations",
];

const MANIFESTO = [
  { text: "WE DON'T JUST CREATE CONTENT.", accent: false },
  { text: "WE CREATE IMPACT.", accent: true },
  { text: "WE FOLLOW THE LIGHT.", accent: false },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.05,
    },
  },
};

const lineVariants: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  const manifestoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(manifestoRef, { once: true, amount: 0.15, margin: "0px 0px -50px 0px" });

  return (
    <section id="about" className="relative z-10 px-4 py-28 sm:px-8 sm:py-40" aria-label="About Luminary Hub">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-[10px] uppercase tracking-[0.5em] text-[#c9a157] sm:mb-12">Manifesto</p>

        <motion.div
          ref={manifestoRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
          variants={containerVariants}
          className="space-y-3 sm:space-y-5 lg:space-y-6"
        >
          {MANIFESTO.map((item, idx) => (
            <div key={idx} className="overflow-hidden py-1">
              <motion.h2
                variants={lineVariants}
                className={`font-display text-[9vw] leading-[1.02] sm:text-[5.5vw] lg:text-[4.6vw] tracking-tight ${
                  item.accent ? "text-[#c9a157]" : "text-ivory"
                }`}
              >
                {item.text}
              </motion.h2>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 max-w-2xl font-serif-italic text-xl leading-relaxed text-ivory/80 sm:mt-18 sm:text-2xl"
        >
          Luminary Hub is a multi media agency dedicated to transforming ideas, brands, people and
          stories into powerful visual experiences — home to Legendary Media House, our in-house
          photography and visual storytelling division.
        </motion.p>

        <div className="mt-14 flex flex-wrap gap-3">
          {CAPABILITIES.map((cap, i) => (
            <motion.span
              key={cap}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-ivory/70"
            >
              {cap}
            </motion.span>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 sm:grid-cols-4">
          <Stat value="12+" label="Years of Craft" />
          <Stat value="160+" label="Productions Delivered" />
          <Stat value="30+" label="Countries Shot In" />
          <Stat value="2" label="Studios, One Vision" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl text-[#c9a157] sm:text-5xl">{value}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-ivory/55">{label}</p>
    </div>
  );
}
