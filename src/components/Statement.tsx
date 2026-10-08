import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Statement({
  lines,
  accentIndex,
  eyebrow,
}: {
  lines: string[];
  accentIndex?: number;
  eyebrow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["-4%", "0%", "4%"]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden px-6 py-24 sm:min-h-screen"
    >
      <motion.div style={{ x }} className="max-w-5xl text-center">
        {eyebrow && (
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#c9a157]">{eyebrow}</p>
        )}
        <h2 className="font-display leading-[0.95] text-ivory">
          {lines.map((line, i) => (
            <span
              key={i}
              className={`block text-[11vw] sm:text-[6.5vw] lg:text-[5.5vw] ${
                i === accentIndex ? "text-[#c9a157]" : ""
              }`}
            >
              {line}
            </span>
          ))}
        </h2>
      </motion.div>
    </div>
  );
}
