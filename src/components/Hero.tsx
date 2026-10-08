import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "../context/CursorContext";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const { setVariant, resetVariant } = useCursor();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.3]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const vignette = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);

  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const pos = { x: 0.5, y: 0.5 };
    const eased = { x: 0.5, y: 0.5 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX / window.innerWidth;
      pos.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      eased.x += (pos.x - eased.x) * 0.05;
      eased.y += (pos.y - eased.y) * 0.05;
      const rx = (eased.y - 0.5) * -6;
      const ry = (eased.x - 0.5) * 8;
      const tx = (eased.x - 0.5) * -24;
      const ty = (eased.y - 0.5) * -16;
      el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translate(${tx}px, ${ty}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[620px] w-full items-center justify-center overflow-hidden"
      aria-label="Luminary Hub introduction"
    >
      <motion.div
        ref={imgWrapRef}
        className="absolute inset-[-5%]"
        style={{ scale: imgScale, y: imgY, willChange: "transform" }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero.png)",
            filter: "grayscale(0.25) contrast(1.08)",
          }}
          role="img"
          aria-label="Film crew working with professional camera equipment, cinematic black and white scene"
        />
      </motion.div>

      {/* light leak layers */}
      <motion.div
        className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-[#c9a157]/25 via-transparent to-transparent blur-3xl"
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-2/3 w-1/2 bg-gradient-to-l from-[#8a6a3f]/25 via-transparent to-transparent blur-3xl"
        animate={{ x: ["5%", "-5%", "5%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="absolute inset-0 bg-black" style={{ opacity: vignette }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07060a] via-transparent to-[#07060a]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/50 via-transparent to-[#07060a]/50" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#d9c08c] sm:text-xs"
        >
          Multi Media Agency
        </motion.p>

        <h1 className="font-display leading-[0.92] text-ivory">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[16vw] tracking-tight sm:text-[9vw] lg:text-[7.5vw]"
          >
            LUMINARY HUB
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="my-5 flex items-center gap-4 sm:my-7"
        >
          <span className="h-px w-10 bg-[#c9a157]/70 sm:w-16" />
          <p className="font-serif-italic text-lg text-[#d9c08c] sm:text-2xl">Follow The Light</p>
          <span className="h-px w-10 bg-[#c9a157]/70 sm:w-16" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-xl text-[11px] uppercase tracking-[0.3em] text-ivory/70 sm:text-sm"
        >
          Film &middot; Photography &middot; Advertising &middot; Storytelling
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={() => setVariant("view")}
            onMouseLeave={resetVariant}
            className="group inline-flex items-center gap-3 rounded-full bg-[#c9a157] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#07060a] transition-transform duration-300 hover:scale-[1.04]"
          >
            Explore Our Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={() => setVariant("view")}
            onMouseLeave={resetVariant}
            className="group inline-flex items-center gap-3 rounded-full border border-ivory/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:border-[#c9a157] hover:text-[#d9c08c]"
          >
            Work With Us
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-ivory/50">Scroll</span>
        <motion.span
          className="h-10 w-px bg-gradient-to-b from-[#c9a157] to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
