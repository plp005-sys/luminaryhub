import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, categories } from "../data/projects";
import type { Project } from "../data/projects";
import { useCursor } from "../context/CursorContext";
import ProjectModal from "./ProjectModal";

const SIZE_CLASSES: Record<Project["size"], string> = {
  lg: "sm:col-span-7 sm:row-span-2 aspect-[4/5] sm:aspect-auto",
  md: "sm:col-span-5 aspect-[4/5]",
  sm: "sm:col-span-4 aspect-[3/4]",
};

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const { setVariant, resetVariant } = useCursor();

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="relative z-10 px-4 py-28 sm:px-8 sm:py-40" aria-label="Our work">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#c9a157]">Selected Work</p>
            <h2 className="font-display text-[12vw] leading-[0.9] text-ivory sm:text-[5.5vw]">
              THE CREATIVE
              <br />
              ARCHIVE
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
            Sixteen productions. Advertising, film, documentary, photography and corporate storytelling —
            a working record of light, shaped into story.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-2 sm:mb-20" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              onMouseEnter={() => setVariant("nav")}
              onMouseLeave={resetVariant}
              className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                filter === cat
                  ? "border-[#c9a157] bg-[#c9a157]/15 text-[#d9c08c]"
                  : "border-white/15 text-ivory/60 hover:border-white/40 hover:text-ivory"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-12 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(project)}
                onMouseEnter={() => setVariant("view")}
                onMouseLeave={resetVariant}
                className={`group relative overflow-hidden rounded-sm text-left ${SIZE_CLASSES[project.size]}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20 opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-ivory/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/60">{project.year}</span>
                  </div>
                  <div className="translate-y-2 opacity-90 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#d9c08c]">{project.client}</p>
                    <p className="font-display text-2xl text-ivory sm:text-3xl">{project.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-[#c9a157]/40" />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
