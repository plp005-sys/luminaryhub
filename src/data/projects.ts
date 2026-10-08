export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  location: string;
  description: string;
  process: string;
  services: string[];
  image: string;
  gallery: string[];
  size: "lg" | "md" | "sm";
}

export const projects: Project[] = [
  {
    id: "aurum-radiance",
    title: "Radiance Campaign",
    category: "Advertising",
    client: "Aurum Jewellery House",
    year: "2024",
    location: "Milan, Italy",
    description:
      "A three-film advertising campaign built around a single idea: light as luxury. Shot across a stripped studio set, the series became Aurum's most-watched campaign of the year.",
    process:
      "We built a bespoke lighting rig to mimic candlelight at commercial scale, pairing slow dolly moves with macro product passes to let the jewellery catch and throw light across the frame.",
    services: ["Advertising", "Photography", "Creative Direction"],
    image: "/radiance.jpg",
    gallery: [
      "https://images.pexels.com/photos/12811291/pexels-photo-12811291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/28863299/pexels-photo-28863299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
    ],
    size: "lg",
  },
  {
    id: "the-last-light",
    title: "The Last Light",
    category: "Film",
    client: "Independent Feature",
    year: "2023",
    location: "Lisbon, Portugal",
    description:
      "A 14-minute narrative short about a lighthouse keeper's final night on duty. Premiered at three regional festivals and became the studio's calling card for narrative work.",
    process:
      "Six-day location shoot on the Atlantic coast, practical lighting only, graded for a warm-to-cold emotional arc that mirrors the keeper's final shift.",
    services: ["Film", "Cinematography", "Color"],
    image:
      "https://images.pexels.com/photos/30397430/pexels-photo-30397430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/30736254/pexels-photo-30736254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "md",
  },
  {
    id: "voices-of-the-valley",
    title: "Voices of the Valley",
    category: "Documentary",
    client: "Valley Heritage Trust",
    year: "2024",
    location: "Cusco Region, Peru",
    description:
      "A feature documentary following three generations of weavers preserving a textile tradition threatened by industrial production. Three weeks embedded with the community.",
    process:
      "We worked with local translators and community elders for six months before filming began, ensuring the story was told with and not simply about its subjects.",
    services: ["Documentary", "Sound Design", "Story Edit"],
    image:
      "https://images.pexels.com/photos/38886674/pexels-photo-38886674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/33873547/pexels-photo-33873547.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/8456858/pexels-photo-8456858.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "lg",
  },
  {
    id: "monochrome-vol-1",
    title: "Monochrome Vol. I",
    category: "Photography",
    client: "Legendary Media House",
    year: "2024",
    location: "Studio 9, Luminary Hub",
    description:
      "An in-house editorial series exploring form and shadow in black and white portraiture — a self-initiated project to push our lighting craft beyond client work.",
    process:
      "Single hard key light, zero fill, fourteen subjects across two days — an exercise in restraint that became one of our most shared bodies of work.",
    services: ["Photography", "Art Direction"],
    image:
      "https://images.pexels.com/photos/34631140/pexels-photo-34631140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1800&w=1400",
    gallery: [
      "https://images.pexels.com/photos/39638058/pexels-photo-39638058.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
      "https://images.pexels.com/photos/29793410/pexels-photo-29793410.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
    ],
    size: "sm",
  },
  {
    id: "meridian-vision",
    title: "Annual Vision",
    category: "Corporate",
    client: "Meridian Bank",
    year: "2023",
    location: "Singapore",
    description:
      "An investor-facing annual film for Meridian Bank, translating a year of financial data into a confident, cinematic visual narrative for shareholders.",
    process:
      "Twelve leadership interviews, archival footage restoration, and a custom data-visualisation layer designed to feel editorial rather than corporate.",
    services: ["Corporate Video", "Motion Design"],
    image:
      "https://images.pexels.com/photos/7413916/pexels-photo-7413916.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/9034249/pexels-photo-9034249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/5668863/pexels-photo-5668863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "md",
  },
  {
    id: "velocity-launch",
    title: "Velocity Launch Film",
    category: "Commercial",
    client: "Velocity Motors",
    year: "2024",
    location: "Turin, Italy",
    description:
      "A global launch film for Velocity's newest electric model, mixing studio product photography with high-speed track cinematography.",
    process:
      "Four-camera array for the track sequence, synced to a bespoke sound design pass, delivered in eleven language versions for global rollout.",
    services: ["Advertising", "Photography", "Film"],
    image:
      "https://images.pexels.com/photos/12811291/pexels-photo-12811291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/35248059/pexels-photo-35248059.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/4341431/pexels-photo-4341431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "sm",
  },
  {
    id: "lumen-fragrance",
    title: "Lumen, Fragrance of Light",
    category: "Creative Campaign",
    client: "Lumen Parfums",
    year: "2023",
    location: "Paris, France",
    description:
      "A full creative campaign for Lumen's debut fragrance — concept, bottle photography, film and out-of-home all directed in-house end to end.",
    process:
      "We developed the entire visual language from scratch: a champagne-and-violet palette, a signature light-leak transition, and a scent-as-light metaphor carried through every asset.",
    services: ["Creative Production", "Photography", "Advertising"],
    image:
      "https://images.pexels.com/photos/28863299/pexels-photo-28863299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1800&w=1400",
    gallery: [
      "https://images.pexels.com/photos/33772487/pexels-photo-33772487.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
      "https://images.pexels.com/photos/13068499/pexels-photo-13068499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
    ],
    size: "md",
  },
  {
    id: "nightfall-festival",
    title: "Nightfall Festival",
    category: "Promotional",
    client: "Nightfall Collective",
    year: "2024",
    location: "Berlin, Germany",
    description:
      "A promotional recap and teaser series for Europe's fastest-growing electronic music festival, cut for both broadcast and vertical social formats.",
    process:
      "A six-person crew covering four stages across three nights, synced to a 36-hour edit turnaround for same-week social delivery.",
    services: ["Promotional", "Events", "Photography"],
    image:
      "https://images.pexels.com/photos/30215324/pexels-photo-30215324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/30497160/pexels-photo-30497160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "lg",
  },
  {
    id: "echo-live",
    title: "Echo Live",
    category: "Events",
    client: "Echo Live Arena",
    year: "2023",
    location: "London, UK",
    description:
      "Full event-day coverage for a sold-out arena show — stills, behind-the-scenes film and a same-night aftermovie for the artist's socials.",
    process:
      "A dedicated stills team, a floating film crew and a dry-run of the arena lighting design two days prior ensured zero missed moments on the night.",
    services: ["Events", "Photography", "Promotional"],
    image:
      "https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/30215324/pexels-photo-30215324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/18357250/pexels-photo-18357250.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "sm",
  },
  {
    id: "heritage",
    title: "Heritage",
    category: "Brand Storytelling",
    client: "Old Town Foundation",
    year: "2022",
    location: "Porto, Portugal",
    description:
      "A brand film tracing four generations of a family-run tannery, commissioned to anchor the foundation's new cultural preservation campaign.",
    process:
      "Archival family photography was re-shot and intercut with present-day footage, with the family's own voices forming the sole narration track.",
    services: ["Documentary", "Brand Storytelling"],
    image:
      "https://images.pexels.com/photos/33873547/pexels-photo-33873547.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/38886674/pexels-photo-38886674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/8456858/pexels-photo-8456858.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "md",
  },
  {
    id: "orbit-pitch",
    title: "Orbit, Pitch Reimagined",
    category: "Presentations",
    client: "Orbit Technologies",
    year: "2024",
    location: "Remote / San Francisco",
    description:
      "A Series B fundraising presentation rebuilt from the ground up — visual systems, motion graphics and a live-delivery format designed to make data memorable.",
    process:
      "We embedded with Orbit's founders for two weeks to understand the product deeply before building a 38-slide cinematic deck with custom motion transitions.",
    services: ["Client Presentations", "Creative Production"],
    image:
      "https://images.pexels.com/photos/8555674/pexels-photo-8555674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/7413916/pexels-photo-7413916.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/9034249/pexels-photo-9034249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "sm",
  },
  {
    id: "glasshouse",
    title: "Glasshouse",
    category: "Film",
    client: "Studio Original",
    year: "2023",
    location: "Reykjavik, Iceland",
    description:
      "A self-produced narrative short exploring isolation and reflection, shot almost entirely through glass and water to study light refraction as a storytelling device.",
    process:
      "Shot on anamorphic lenses in four days, using natural Icelandic light at extreme latitudes to avoid any artificial lighting on set.",
    services: ["Film", "Cinematography"],
    image:
      "https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/8088372/pexels-photo-8088372.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "md",
  },
  {
    id: "the-quiet-hours",
    title: "The Quiet Hours",
    category: "Documentary",
    client: "Northline Films",
    year: "2022",
    location: "Detroit, USA",
    description:
      "A mini-documentary series following night-shift workers keeping a city running while it sleeps — nurses, bakers, transit operators and radio hosts.",
    process:
      "All footage captured between 11pm and 6am over five weeks, with available-light cinematography to preserve the authenticity of the night.",
    services: ["Documentary", "Corporate Video"],
    image:
      "https://images.pexels.com/photos/6950236/pexels-photo-6950236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/5668863/pexels-photo-5668863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/18357250/pexels-photo-18357250.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "sm",
  },
  {
    id: "solstice-time",
    title: "Time, Reframed",
    category: "Advertising",
    client: "Solstice Watches",
    year: "2024",
    location: "Geneva, Switzerland",
    description:
      "A macro-photography advertising campaign for Solstice's flagship timepiece, pairing mechanical precision with painterly studio lighting.",
    process:
      "A custom macro rig captured the movement's rotor in motion for the first time in the brand's history, becoming the campaign's signature hero shot.",
    services: ["Advertising", "Photography"],
    image:
      "https://images.pexels.com/photos/13884513/pexels-photo-13884513.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1800&w=1400",
    gallery: [
      "https://images.pexels.com/photos/4142863/pexels-photo-4142863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
      "https://images.pexels.com/photos/1265718/pexels-photo-1265718.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
    ],
    size: "md",
  },
  {
    id: "portraits-in-shadow",
    title: "Portraits in Shadow",
    category: "Photography",
    client: "Legendary Media House",
    year: "2024",
    location: "Studio 9, Luminary Hub",
    description:
      "An ongoing portrait series by Legendary Media House exploring identity through controlled shadow — now exhibited as part of our studio's gallery wall.",
    process:
      "Each sitting limited to twenty minutes and a single light source, forcing fast, instinctive direction between photographer and subject.",
    services: ["Photography", "Art Direction"],
    image:
      "https://images.pexels.com/photos/39638058/pexels-photo-39638058.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1800&w=1400",
    gallery: [
      "https://images.pexels.com/photos/23879354/pexels-photo-23879354.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
      "https://images.pexels.com/photos/1265718/pexels-photo-1265718.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
    ],
    size: "sm",
  },
  {
    id: "vantage-build",
    title: "Inside the Build",
    category: "Corporate",
    client: "Vantage Group",
    year: "2023",
    location: "Dubai, UAE",
    description:
      "A corporate storytelling series documenting the construction of Vantage Group's flagship tower, from groundbreaking to ribbon-cutting across eighteen months.",
    process:
      "Monthly site visits with a fixed-position time-lapse rig, combined with quarterly interview sessions with the engineering and design leads.",
    services: ["Corporate Video", "Documentary"],
    image:
      "https://images.pexels.com/photos/5668863/pexels-photo-5668863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
    gallery: [
      "https://images.pexels.com/photos/7413916/pexels-photo-7413916.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      "https://images.pexels.com/photos/6950236/pexels-photo-6950236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    ],
    size: "md",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
