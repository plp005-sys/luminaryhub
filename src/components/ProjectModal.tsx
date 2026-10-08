import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { useCursor } from "../context/CursorContext";

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
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
      aria-label={`${project.title} project detail`}
      className="fixed inset-0 z-[80] overflow-y-auto bg-[#07060a]"
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-[75vh] min-h-[420px] w-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07060a] via-black/20 to-black/60" />

        <button
          onClick={onClose}
          onMouseEnter={() => setVariant("view")}
          onMouseLeave={resetVariant}
          className="glass absolute right-5 top-24 z-10 flex h-11 w-11 items-center justify-center rounded-full text-ivory sm:right-10"
          aria-label="Close project detail"
        >
          ✕
        </button>

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 pt-40 sm:px-14">
          <p className="mb-3 text-[10px] uppercase tracking-[0.5em] text-[#d9c08c]">{project.category}</p>
          <h2 className="font-display text-[12vw] leading-[0.9] text-ivory sm:text-[6vw]">{project.title}</h2>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-14 grid grid-cols-2 gap-6 border-b border-white/10 pb-12 sm:grid-cols-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#c9a157]">Client</p>
            <p className="mt-2 text-ivory/85">{project.client}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#c9a157]">Year</p>
            <p className="mt-2 text-ivory/85">{project.year}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#c9a157]">Location</p>
            <p className="mt-2 text-ivory/85">{project.location}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#c9a157]">Services</p>
            <p className="mt-2 text-ivory/85">{project.services.join(", ")}</p>
          </div>
        </div>

        <p className="max-w-2xl font-serif-italic text-xl leading-relaxed text-ivory/85 sm:text-2xl">
          {project.description}
        </p>

        <div className="mt-10 max-w-2xl">
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-[#c9a157]">Creative Process</p>
          <p className="leading-relaxed text-ivory/65">{project.process}</p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {project.gallery.map((img, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={img}
                alt={`${project.title} supporting image ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 500);
            }}
            onMouseEnter={() => setVariant("view")}
            onMouseLeave={resetVariant}
            className="inline-flex items-center gap-3 rounded-full border border-[#c9a157]/60 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9c08c] transition hover:bg-[#c9a157]/10"
          >
            Start a Similar Project →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
