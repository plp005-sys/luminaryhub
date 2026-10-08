import { useCursor } from "../context/CursorContext";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Vimeo", href: "https://vimeo.com" },
];

export default function Footer() {
  const { setVariant, resetVariant } = useCursor();

  return (
    <footer className="relative z-10 border-t border-white/10 px-4 pb-10 pt-16 sm:px-8" role="contentinfo">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/lumi-logo.jpg"
                alt="Luminary Hub Logo"
                className="h-16 w-16 rounded-full object-cover shadow-lg ring-2 ring-[#c9a157]/30"
              />
              <div>
                <p className="font-display text-2xl tracking-[0.1em] text-ivory">LUMINARY HUB</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-[#c9a157]">Follow The Light</p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-ivory/50">
              Home of <span className="text-ivory/70">Legendary Media House</span> — our photography &amp;
              visual storytelling division.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-ivory/40">Studio</p>
              <ul className="space-y-2 text-sm text-ivory/70">
                <li>hello@luminaryhub.studio</li>
                <li>+27 78 357 4429</li>
                <li>24 Brill St, Arcadia</li>
                <li>KuGompo City, 5201</li>
                <li>East London, South Africa</li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-ivory/40">Connect</p>
              <ul className="space-y-2 text-sm">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => setVariant("nav")}
                      onMouseLeave={resetVariant}
                      className="underline-sweep text-ivory/70 hover:text-ivory"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-y border-white/10 py-6">
          <p className="whitespace-nowrap font-display text-[9vw] uppercase leading-none text-ivory/10 sm:text-[4.5vw]">
            FOLLOW THE LIGHT · FOLLOW THE LIGHT · FOLLOW THE LIGHT · FOLLOW THE LIGHT ·
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-ivory/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Luminary Hub. All rights reserved.</p>
          <p>Legendary Media House is a division of Luminary Hub.</p>
        </div>
      </div>
    </footer>
  );
}
