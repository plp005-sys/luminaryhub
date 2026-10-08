import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "../context/CursorContext";

export default function FilmSection() {
  const ref = useRef<HTMLElement>(null);
  const { setVariant, resetVariant } = useCursor();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1, 1.1]);
  const radius = useTransform(scrollYProgress, [0, 0.5, 1], [28, 0, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5, 1], ["40%", "0%", "-30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 0.45, 0.8]);

  return (
    <section
      id="film"
      ref={ref}
      className="relative z-10 flex min-h-[140vh] items-center justify-center px-4 py-20 sm:px-8"
      aria-label="Film production"
    >
      <motion.div
        style={{ scale, borderRadius: radius }}
        className="sticky top-[8vh] h-[84vh] w-full max-w-7xl overflow-hidden"
      >
        <img
          src="https://images.pexels.com/photos/30736254/pexels-photo-30736254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=2400"
          alt="Film crew lighting a night production set"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120904]/90 via-transparent to-[#120904]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-red-900/20" />

        <motion.div style={{ y: titleY }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-amber-200/80">Cinematic Production</p>
          <h2 className="font-display text-[16vw] leading-[0.88] text-ivory sm:text-[8vw]">FILM</h2>
          <p className="mt-6 max-w-xl font-serif-italic text-lg text-ivory/85 sm:text-2xl">
            We don&rsquo;t just record moments. We create them.
          </p>

          <button
            onMouseEnter={() => setVariant("play")}
            onMouseLeave={resetVariant}
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="group mt-10 flex h-20 w-20 items-center justify-center rounded-full border border-ivory/40 transition-colors hover:border-amber-300"
            aria-label="Watch our film reel in the portfolio"
          >
            <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-ivory transition-colors group-hover:border-l-amber-300" />
          </button>
        </motion.div>

        <div className="absolute bottom-8 left-8 right-8 z-10 hidden items-center justify-between text-[10px] uppercase tracking-[0.3em] text-ivory/60 sm:flex">
          <span>Concept → Pre-Production → Production</span>
          <span>Cinematography → Editing → Color → Delivery</span>
        </div>
      </motion.div>
    </section>
  );
}
