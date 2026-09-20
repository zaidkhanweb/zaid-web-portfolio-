// -----------------------------------------------------------------------
// PROJECT DATA
// One entry per demo project shown in the "Selected Work" section.
// `image` points at a real screenshot in /public/projects/ and `url` at the
// deployed demo. `status` should stay "Demo Project" unless a project
// becomes an actual paid client build.
// -----------------------------------------------------------------------

export type Project = {
  id: string;
  title: string;
  category: string;
  status: "Demo Project" | "Concept Project";
  description: string;
  /** Path under /public, or a full URL to a real screenshot (~16:9). */
  image: string;
  /** Live URL of the deployed demo (opens in a new tab). */
  url: string;
  /** Accent used for this project's card artwork. */
  accent: string;
};

export const projects: Project[] = [
  {
    id: "detailing-lab",
    title: "Detailing Lab",
    category: "Auto Detailing",
    status: "Demo Project",
    description:
      "A concept site for a car detailing business, built to show off before-and-after work and make booking a slot straightforward.",
    image: "/projects/detailing-lab.png",
    url: "https://detailing-lab-website.vercel.app/",
    accent: "#1F2937",
  },
  {
    id: "bari-dental",
    title: "Bari Dental Clinic",
    category: "Dental / Healthcare",
    status: "Demo Project",
    description:
      "A calm, trustworthy layout for a dental clinic, designed around services, clinic hours, and a clear way to book an appointment.",
    image: "/projects/bari-dental.png",
    url: "https://bari-dental-clinic-nine.vercel.app/",
    accent: "#2F6B57",
  },
  {
    id: "karachi-prime-estate",
    title: "DHA Karachi Real Estate",
    category: "Real Estate",
    status: "Demo Project",
    description:
      "A listings-first concept for a real estate agency, built to present properties clearly and route serious buyers straight to contact.",
    image: "/projects/karachi-real-estate.png",
    url: "https://dha-karachi-dwellings.vercel.app/",
    accent: "#7C5A32",
  },
  {
    id: "cafeteria-america",
    title: "Cafeteria America",
    category: "Restaurant",
    status: "Demo Project",
    description:
      "A menu-forward restaurant concept focused on food photography, opening hours, and easy reservations or takeout enquiries.",
    image: "/projects/cafeteria-america.png",
    url: "https://restaurant-website-nine-gold-19.vercel.app/",
    accent: "#8C3B2E",
  },
];
