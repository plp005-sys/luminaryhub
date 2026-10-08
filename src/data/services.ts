export interface ServiceProcessStep {
  label: string;
}

export interface Service {
  index: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  atmosphere: string; // tailwind gradient classes for hover atmosphere
  process: ServiceProcessStep[];
  capabilities: string[];
}

export const services: Service[] = [
  {
    index: "01",
    slug: "advertising",
    title: "Advertising",
    shortDescription: "Campaigns built to make brands impossible to ignore.",
    description:
      "We craft commercial campaigns and visual advertising that command attention — concept, casting, production and post, engineered to make brands impossible to ignore across every screen.",
    image: "/advertising.jpg",
    atmosphere: "from-amber-500/30 via-rose-500/10 to-transparent",
    process: [
      { label: "Brand Discovery" },
      { label: "Concept & Script" },
      { label: "Casting & Location" },
      { label: "Production" },
      { label: "Edit & Delivery" },
    ],
    capabilities: ["TVC & Digital Films", "Print & OOH Campaigns", "Social-first Advertising", "Product Hero Films"],
  },
  {
    index: "02",
    slug: "film",
    title: "Film",
    shortDescription: "Narrative and commercial film production, shot to be felt.",
    description:
      "From short narrative pieces to full commercial productions, our film division handles concept, cinematography, direction and finishing — crafting work that moves an audience, not just a timeline.",
    image:
      "https://images.pexels.com/photos/30736254/pexels-photo-30736254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    atmosphere: "from-red-600/30 via-amber-500/10 to-transparent",
    process: [
      { label: "Concept" },
      { label: "Pre-Production" },
      { label: "Production" },
      { label: "Cinematography" },
      { label: "Editing" },
      { label: "Color" },
      { label: "Final Delivery" },
    ],
    capabilities: ["Short Films", "Brand Films", "Music Videos", "Narrative Features"],
  },
  {
    index: "03",
    slug: "documentary",
    title: "Documentary",
    shortDescription: "Authentic storytelling of people, places and culture.",
    description:
      "We go into the field to find real stories — people, places, culture and moments worth preserving. Documentary work demands patience, trust and a camera that knows when to disappear.",
    image: "/documentary.jpg",
    atmosphere: "from-emerald-500/25 via-stone-400/10 to-transparent",
    process: [
      { label: "Research" },
      { label: "Access & Trust" },
      { label: "Field Production" },
      { label: "Story Edit" },
      { label: "Score & Mix" },
      { label: "Release" },
    ],
    capabilities: ["Feature Documentaries", "Mini-Docs & Series", "Cultural Archives", "Impact Films"],
  },
  {
    index: "04",
    slug: "photography",
    title: "Photography",
    shortDescription: "Editorial, commercial, corporate and campaign imagery.",
    description:
      "Through Legendary Media House, our photography division captures editorial, commercial, corporate, lifestyle, event and campaign imagery with a signature cinematic eye for light.",
    image: "/photography.jpg",
    atmosphere: "from-neutral-300/20 via-sky-400/10 to-transparent",
    process: [
      { label: "Mood & Reference" },
      { label: "Styling & Set" },
      { label: "Studio / Location Shoot" },
      { label: "Retouch" },
      { label: "Final Gallery" },
    ],
    capabilities: ["Editorial & Fashion", "Corporate Portraits", "Event Coverage", "Campaign Stills"],
  },
  {
    index: "05",
    slug: "corporate-video",
    title: "Corporate Video",
    shortDescription: "Visual communication for brands and institutions.",
    description:
      "Professional visual communication for companies, organisations and institutions — leadership films, internal communications, training content and investor storytelling with cinematic polish.",
    image: "/corporate-video.jpg",
    atmosphere: "from-sky-500/25 via-indigo-500/10 to-transparent",
    process: [
      { label: "Briefing" },
      { label: "Scripting" },
      { label: "Interviews & Coverage" },
      { label: "Edit" },
      { label: "Approval & Delivery" },
    ],
    capabilities: ["Leadership Films", "Annual Reports", "Internal Comms", "Investor Films"],
  },
  {
    index: "06",
    slug: "creative-production",
    title: "Creative Production",
    shortDescription: "Concept, direction, production and storytelling.",
    description:
      "Concept development, creative direction, production and editing under one roof — our full-service studio exists to turn a single idea into a complete visual world.",
    image: "/creatv.jpg",
    atmosphere: "from-fuchsia-500/25 via-violet-500/15 to-transparent",
    process: [
      { label: "Idea" },
      { label: "Creative Direction" },
      { label: "Production Design" },
      { label: "Shoot" },
      { label: "Post" },
      { label: "Story" },
    ],
    capabilities: ["Art Direction", "Set Design", "Full Production", "Post & Finishing"],
  },
  {
    index: "07",
    slug: "presentations",
    title: "Client Presentations",
    shortDescription: "High-impact visual decks for pitches and launches.",
    description:
      "Custom client presentations built with the same visual language as our films — pitch decks, launch presentations and proposals designed to move a room, not just inform it.",
    image: "/clientpres.jpg",
    atmosphere: "from-orange-400/25 via-amber-300/10 to-transparent",
    process: [
      { label: "Narrative" },
      { label: "Visual System" },
      { label: "Deck Design" },
      { label: "Motion Layer" },
      { label: "Delivery" },
    ],
    capabilities: ["Pitch Decks", "Launch Presentations", "Investor Decks", "Proposal Design"],
  },
];
