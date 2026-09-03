// Real, in-use products — distinct from client/demo work, which is
// managed through the Admin panel and fetched from the API.
// Fill in `demo` and `code` links as they become public.

const realWorldProjects = [
  {
    id: "medverify",
    title: "MedVerify",
    tagline: "Fighting fake drugs with data",
    description:
      "A MERN app that lets Nigerians verify medication authenticity against NAFDAC registration records. Includes a multi-factor fuzzy-matching engine, a GS1 DataMatrix barcode scanner with a custom Application Identifier parser, verification-attempt logging, and an AI explanation layer powered by Claude Haiku through a backend proxy.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Barcode Scanning", "Claude API"],
    code: "",
    demo: "",
    accent: "cobalt",
  },
  {
    id: "momcare",
    title: "MomCare",
    tagline: "Maternal health, kept on schedule",
    description:
      "A maternal health MVP for Nigerian mothers covering pregnancy tracking and vaccination schedules, with a cron-based SMS reminder system built on Termii. Built with Node.js/Express (ES modules) and Mongoose.",
    stack: ["Node.js", "Express", "MongoDB", "Termii SMS", "Cron Jobs"],
    code: "",
    demo: "",
    accent: "flame",
  },
  {
    id: "velastrux",
    title: "Velastrux",
    tagline: "Dashboards, generated on demand",
    description:
      "A dashboard-generator SaaS on the full MERN stack, with a multi-step generator wizard and a webhook system signed with HMAC-SHA256. Architected around a direct model where the frontend calls a connected site's backend using a shared secret token, rather than proxying through a central server.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Webhooks", "HMAC-SHA256"],
    code: "",
    demo: "",
    accent: "cobalt",
  },
  {
    id: "resoary",
    title: "Resoary",
    tagline: "One shared library, for the whole team",
    description:
      "An internal resource library with team password authentication and PDF/snippet storage, built for teams that need a single, low-friction place to keep shared references.",
    stack: ["React", "Node.js", "MongoDB", "Render", "Vercel"],
    code: "",
    demo: "",
    accent: "flame",
  },
];

export default realWorldProjects;
