import { useCallback, useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import { CursorProvider, type CursorVariant } from "./context/CursorContext";
import AtmosphereBackground, { type AtmosphereTheme } from "./components/AtmosphereBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FilmSection from "./components/FilmSection";
import Photography from "./components/Photography";
import CreativeCampaigns from "./components/CreativeCampaigns";
import Process from "./components/Process";
import Presentations from "./components/Presentations";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const THEME_SECTIONS: { id: string; theme: AtmosphereTheme }[] = [
  { id: "home", theme: "hero" },
  { id: "services", theme: "services" },
  { id: "work", theme: "services" },
  { id: "film", theme: "film" },
  { id: "photography", theme: "photography" },
  { id: "creative", theme: "creative" },
  { id: "about", theme: "about" },
  { id: "contact", theme: "contact" },
];

const NAV_IDS = ["home", "work", "services", "film", "photography", "about", "contact"];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [theme, setTheme] = useState<AtmosphereTheme>("hero");
  const [activeNav, setActiveNav] = useState("home");
  const observed = useRef(new Set<string>());

  const onVariantChange = useCallback((variant: CursorVariant) => setCursorVariant(variant), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const themeMatch = THEME_SECTIONS.find((s) => s.id === id);
            if (themeMatch) setTheme(themeMatch.theme);
            if (NAV_IDS.includes(id)) setActiveNav(id);
          }
        });
      },
      { threshold: 0.35 }
    );

    THEME_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el && !observed.current.has(s.id)) {
        observer.observe(el);
        observed.current.add(s.id);
      }
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <CursorProvider onVariantChange={onVariantChange}>
      <Loader onDone={() => setLoading(false)} />
      <CustomCursor variant={cursorVariant} />
      <div className="grain" />
      <AtmosphereBackground theme={theme} />

      <div className={`relative transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Nav active={activeNav} />
        <main>
          <Hero />

          <Statement
            eyebrow="A Film in Motion"
            lines={["WE", "FOLLOW", "THE LIGHT."]}
            accentIndex={2}
          />

          <Services />

          <Statement
            eyebrow="Every Production"
            lines={["EVERY FRAME", "HAS A STORY."]}
            accentIndex={1}
          />

          <Portfolio />

          <FilmSection />

          <Statement eyebrow="Visual Language" lines={["LIGHT", "BECOMES", "IMAGE."]} accentIndex={1} />

          <Photography />

          <div id="creative">
            <CreativeCampaigns />
          </div>

          <Statement
            eyebrow="Our Purpose"
            lines={["STORIES DESERVE", "TO BE SEEN."]}
            accentIndex={1}
          />

          <Process />

          <Presentations />

          <About />

          <Contact />
        </main>
        <Footer />
      </div>

      {/* Logo at top left corner - hidden in mobile view mode, visible on sm and up */}
      <div className="hidden sm:block fixed top-4 left-4 z-[100] sm:top-6 sm:left-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="block"
          aria-label="Luminary Hub Home"
        >
          <img
            src="/lumi-logo.jpg"
            alt="Luminary Hub Logo"
            className="h-12 w-12 rounded-full object-cover shadow-lg ring-2 ring-[#c9a157]/30 transition-transform hover:scale-105 sm:h-14 sm:w-14"
          />
        </a>
      </div>
    </CursorProvider>
  );
}
