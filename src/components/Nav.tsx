import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "film", label: "Film" },
  { id: "photography", label: "Photography" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setVariant, resetVariant } = useCursor();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[95] focus:bg-ivory focus:text-ink focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
        <nav
          aria-label="Primary"
          className={`glass flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:px-7 ${
            scrolled ? "glass-gold" : ""
          }`}
        >
          <button
            onClick={() => go("home")}
            onMouseEnter={() => setVariant("nav")}
            onMouseLeave={resetVariant}
            className="font-display text-lg tracking-[0.15em] text-ivory sm:text-xl"
            aria-label="Luminary Hub, go to home"
          >
            LUMINARY <span className="text-[#c9a157]">HUB</span>
          </button>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  onMouseEnter={() => setVariant("nav")}
                  onMouseLeave={resetVariant}
                  className={`underline-sweep text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                    active === link.id ? "text-[#c9a157]" : "text-ivory/80 hover:text-ivory"
                  }`}
                  aria-current={active === link.id ? "page" : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => go("contact")}
            onMouseEnter={() => setVariant("nav")}
            onMouseLeave={resetVariant}
            className="hidden rounded-full border border-[#c9a157]/50 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#d9c08c] transition hover:bg-[#c9a157]/10 lg:block"
          >
            Start a Project
          </button>

          <button
            className="flex h-8 w-9 flex-col items-end justify-center gap-[5px] lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="h-px bg-ivory"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-px w-2/3 bg-ivory"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="h-px bg-ivory"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-[#07060a]/98 backdrop-blur-xl lg:hidden"
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                onClick={() => go(link.id)}
                className={`font-display text-4xl tracking-wide ${
                  active === link.id ? "text-[#c9a157]" : "text-ivory"
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-[10px] uppercase tracking-[0.4em] text-[#c9a157]"
            >
              Follow The Light
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
