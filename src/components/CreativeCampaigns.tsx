import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ITEMS = [
  {
    src: "https://images.pexels.com/photos/30215324/pexels-photo-30215324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    alt: "Vibrant indoor concert with dynamic lights",
    label: "Nightfall Festival",
    className: "left-[2%] top-[4%] w-[62%] sm:w-[40%]",
    depth: 40,
  },
  {
    src: "https://images.pexels.com/photos/12811291/pexels-photo-12811291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    alt: "Product photography studio setup",
    label: "Velocity Launch",
    className: "right-[4%] top-[0%] w-[55%] sm:w-[34%]",
    depth: -30,
  },
  {
    src: "https://images.pexels.com/photos/8660274/pexels-photo-8660274.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    alt: "Stylish black and white editorial portrait",
    label: "Studio Editorial",
    className: "left-[18%] top-[48%] w-[50%] sm:w-[30%]",
    depth: 55,
  },
  {
    src: "https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    alt: "Crowd watching a live show inside a stadium",
    label: "Echo Live",
    className: "right-[2%] bottom-[2%] w-[58%] sm:w-[38%]",
    depth: -20,
  },
];

export default function CreativeCampaigns() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section className="relative z-10 px-4 py-24 sm:px-8 sm:py-36" aria-label="Creative campaigns">
      <div className="mx-auto mb-16 max-w-7xl">
        <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#c9a157]">Beyond Production</p>
        <h2 className="max-w-3xl font-display text-[11vw] leading-[0.92] text-ivory sm:text-[5vw]">
          CAMPAIGNS THAT MOVE CULTURE, NOT JUST METRICS.
        </h2>
      </div>

      <div ref={ref} className="relative mx-auto h-[640px] w-full max-w-6xl sm:h-[760px]">
        {ITEMS.map((item) => (
          <CampaignImage key={item.label} item={item} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

function CampaignImage({
  item,
  progress,
}: {
  item: (typeof ITEMS)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], [item.depth, -item.depth]);

  return (
    <motion.div style={{ y }} className={`group absolute aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-black/50 ${item.className}`}>
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/10 opacity-80 transition-opacity group-hover:opacity-95" />
      <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-ivory/85">{item.label}</p>
    </motion.div>
  );
}
