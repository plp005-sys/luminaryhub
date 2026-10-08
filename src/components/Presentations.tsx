import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

const ITEMS = ["Pitch Decks", "Campaign Presentations", "Product Launches", "Corporate Decks", "Creative Proposals", "Investor Storytelling"];

export default function Presentations() {
  const { setVariant, resetVariant } = useCursor();

  return (
    <section className="relative z-10 px-4 py-24 sm:px-8 sm:py-36" aria-label="Custom client presentations">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#c9a157]">Custom Client Presentations</p>
          <h2 className="font-display text-[11vw] leading-[0.92] text-ivory sm:text-[4.6vw]">
            YOUR IDEA.
            <br />
            <span className="text-[#c9a157]">OUR VISUAL</span>
            <br />
            LANGUAGE.
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-ivory/60 sm:text-base">
            We transform a client&rsquo;s idea into a polished, cinematic presentation — pitch decks,
            campaign proposals, product launches and investor stories, built with the same craft as
            our films.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={() => setVariant("view")}
            onMouseLeave={resetVariant}
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#c9a157]/50 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9c08c] transition hover:bg-[#c9a157]/10"
          >
            Request a Presentation →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass flex h-28 items-center justify-center rounded-sm p-4 text-center sm:h-36"
            >
              <p className="text-[11px] uppercase tracking-[0.15em] text-ivory/80 sm:text-xs">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
