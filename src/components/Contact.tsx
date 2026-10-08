import { useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

const OPTIONS = ["Book a Production", "Request a Quote", "Collaborate", "Work With Us"];

export default function Contact() {
  const { setVariant, resetVariant } = useCursor();
  const [choice, setChoice] = useState(OPTIONS[0]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative z-10 px-4 py-28 sm:px-8 sm:py-40" aria-label="Contact Luminary Hub">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.5em] text-[#c9a157]">Start A Conversation</p>
          <h2 className="font-display text-[15vw] leading-[0.88] text-ivory sm:text-[7vw]">
            LET&rsquo;S
            <br />
            CREATE
            <br />
            <span className="text-[#c9a157]">SOMETHING</span>
            <br />
            ICONIC.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="glass glass-gold rounded-md p-6 sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 py-10 text-center"
              >
                <p className="font-display text-3xl text-[#c9a157]">Message Received</p>
                <p className="max-w-sm text-sm text-ivory/70">
                  Thank you for reaching out to Luminary Hub. Our producers will follow the light back
                  to you within two business days.
                </p>
              </motion.div>
            ) : (
              <form
                className="grid gap-6 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-ivory/60">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="w-full border-b border-white/20 bg-transparent py-2 text-ivory outline-none transition-colors focus:border-[#c9a157]"
                    placeholder="Your full name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-ivory/60">
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="w-full border-b border-white/20 bg-transparent py-2 text-ivory outline-none transition-colors focus:border-[#c9a157]"
                    placeholder="you@brand.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-ivory/60">I'd like to</p>
                  <div className="flex flex-wrap gap-2">
                    {OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setChoice(opt)}
                        onMouseEnter={() => setVariant("nav")}
                        onMouseLeave={resetVariant}
                        className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-colors ${
                          choice === opt
                            ? "border-[#c9a157] bg-[#c9a157]/15 text-[#d9c08c]"
                            : "border-white/15 text-ivory/60 hover:border-white/40"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-ivory/60">
                    Tell us about the project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full resize-none border-b border-white/20 bg-transparent py-2 text-ivory outline-none transition-colors focus:border-[#c9a157]"
                    placeholder="A few lines about your brand, timeline and vision..."
                  />
                </div>

                <div className="sm:col-span-2 flex justify-center pt-2">
                  <button
                    type="submit"
                    onMouseEnter={() => setVariant("view")}
                    onMouseLeave={resetVariant}
                    className="inline-flex items-center gap-3 rounded-full bg-[#c9a157] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#07060a] transition-transform hover:scale-[1.03]"
                  >
                    Start a Project →
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <ContactInfo label="Email" value="hello@luminaryhub.studio" />
            <ContactInfo label="Phone" value="+27 78 357 4429" />
            <ContactInfo label="Studio" value="24 Brill St, Arcadia, KuGompo City, South Africa" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a157]">{label}</p>
      <p className="mt-2 text-sm text-ivory/75">{value}</p>
    </div>
  );
}
