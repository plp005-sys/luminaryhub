import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TITLE = "LUMINARY HUB";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 1000);
    const t3 = setTimeout(() => setStage(3), 2300);
    const t4 = setTimeout(() => setStage(4), 2900);
    const t5 = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 3500);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#07060a] overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          role="status"
          aria-label="Loading Luminary Hub"
        >
          {/* flashing cinematic image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 3 ? 0.35 : 0 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* point of light growing into a line */}
          <motion.div
            className="relative"
            initial={{ width: 2, height: 2, opacity: 0 }}
            animate={{
              width: stage >= 1 ? (stage >= 2 ? 160 : 2) : 2,
              height: 2,
              opacity: stage >= 1 ? 1 : 0,
            }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "linear-gradient(90deg, transparent, #d9c08c, #c9a157, #d9c08c, transparent)",
              boxShadow: "0 0 20px 2px rgba(201,161,87,0.8)",
              marginBottom: "2rem",
            }}
          />

          <div className="relative flex flex-col items-center gap-4 px-6 text-center">
            <div className="flex overflow-hidden font-display text-4xl tracking-[0.2em] text-ivory sm:text-6xl">
              {TITLE.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={stage >= 2 ? { y: "0%", opacity: 1 } : {}}
                  transition={{ delay: i * 0.045, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "inline-block", whiteSpace: "pre", color: "#f3ede1" }}
                >
                  {ch}
                </motion.span>
              ))}
            </div>
            <motion.p
              className="font-sans text-[11px] tracking-[0.5em] text-[#c9a157] sm:text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              FOLLOW THE LIGHT
            </motion.p>
          </div>

          <motion.div
            className="absolute bottom-10 h-px w-40 overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-[#c9a157]"
              initial={{ width: "0%" }}
              animate={{ width: stage >= 4 ? "100%" : "70%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
