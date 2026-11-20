import { SITE_URL, REPO_URL } from "@/data/site";
import { StaticImageData } from "next/image";
import portfolioPoster from "@/assets/projects/portfolio/poster.webp";
import silklinePoster from "@/assets/projects/silkline/poster.webp";

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
  image?: { src: StaticImageData; alt: string };
};

export const PROJECTS: Project[] = [
  {
    name: "Silkline",
    blurb:
      "API and CLI for viewing and changing a guitar amp's presets and settings.",
    stack: ["Python"],
    codeUrl: "https://github.com/JWobz/Silkline",
    image: { src: silklinePoster, alt: "" },
  },
  {
    name: "Portfolio",
    blurb: "This site: a fast, accessible portfolio built from scratch.",
    stack: ["Next.js", "TypeScript", "CSS Modules"],
    liveUrl: SITE_URL,
    codeUrl: REPO_URL,
    image: { src: portfolioPoster, alt: "" },
  },
];
