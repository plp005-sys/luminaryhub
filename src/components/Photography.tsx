import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "../context/CursorContext";

const GALLERY = [
  {
    src: "https://images.pexels.com/photos/13068499/pexels-photo-13068499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    alt: "Portrait under dramatic blue studio light",
    caption: "Blue Hour Study",
  },
  {
    src: "https://images.pexels.com/photos/28863299/pexels-photo-28863299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    alt: "Elegant portrait in dramatic lighting",
    caption: "Lumen Campaign",
  },
  {
    src: "https://images.pexels.com/photos/33681512/pexels-photo-33681512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    alt: "Moody portrait in leather jacket",
    caption: "Portraits in Shadow",
  },
  {
    src: "https://images.pexels.com/photos/23911182/pexels-photo-23911182.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    alt: "Portrait in dark studio space",
    caption: "Monochrome Vol. I",
  },
  {
    src: "https://images.pexels.com/photos/34631140/pexels-photo-34631140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    alt: "Elegant black and white portrait",
    caption: "Editorial Series 04",
  },
  {
    src: "https://images.pexels.com/photos/33772487/pexels-photo-33772487.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    alt: "Moody portrait in black jacket",
    caption: "Night Campaign",
  },
  {
    src: "https://images.pexels.com/photos/39638058/pexels-photo-39638058.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    alt: "Dramatic black and white silhouette portrait",
    caption: "Silhouette Study",
  },
];

export default function Photography() {
  const trackRef = useRef<HTMLDivElement>(null);
  const constraintRef = useRef<HTMLDivElement>(null);
  const { setVariant, resetVariant } = useCursor();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      id="photography"
      ref={sectionRef}
      className="relative z-10 overflow-hidden py-28 sm:py-40"
      aria-label="Photography and Legendary Media House"
    >
      <div className="mx-auto mb-16 max-w-7xl px-4 sm:px-8">
        <motion.div style={{ x: headingX }}>
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#c9a157]">Luminary Hub presents</p>
          <h2 className="font-display text-[13vw] leading-[0.88] text-ivory sm:text-[6vw]">
            LEGENDARY
            <br />
            MEDIA HOUSE
          </h2>
        </motion.div>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl font-serif-italic text-lg text-ivory/75 sm:text-xl">
            A visual storytelling division of Luminary Hub — photography, media and production.
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/55">
            Legendary Media House lives inside the Luminary Hub ecosystem, dedicated entirely to still
            imagery: portraits, campaigns, fashion and events, captured with the same cinematic eye.
          </p>
        </div>
      </div>

      <div ref={constraintRef} className="relative w-full cursor-grab active:cursor-grabbing">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -1700, right: 0 }}
          dragElastic={0.08}
          className="flex gap-5 px-4 pb-4 sm:gap-7 sm:px-8"
          onMouseEnter={() => setVariant("drag")}
          onMouseLeave={resetVariant}
        >
          {GALLERY.map((item, i) => (
            <motion.figure
              key={item.caption}
              className={`relative shrink-0 overflow-hidden rounded-sm ${
                i % 3 === 1 ? "h-[460px] w-[300px] sm:h-[560px] sm:w-[380px]" : "h-[380px] w-[260px] sm:h-[460px] sm:w-[320px]"
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                draggable={false}
                className="pointer-events-none h-full w-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.25em] text-ivory/85">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
          <div className="flex w-[260px] shrink-0 flex-col items-start justify-center gap-4 sm:w-[320px]">
            <p className="font-display text-3xl leading-tight text-ivory">
              Photography.
              <br />
              Media.
              <br />
              Production.
              <br />
              <span className="text-[#c9a157]">Stories.</span>
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={() => setVariant("view")}
              onMouseLeave={resetVariant}
              className="underline-sweep text-xs uppercase tracking-[0.25em] text-[#d9c08c]"
            >
              Book a Shoot →
            </a>
          </div>
        </motion.div>
        <p className="mt-6 px-4 text-[9px] uppercase tracking-[0.3em] text-ivory/35 sm:px-8">
          Drag to explore the gallery
        </p>
      </div>
    </section>
  );
}
