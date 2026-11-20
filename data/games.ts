import type { StaticImageData } from "next/image";
import { Tool, ICONS } from "./tools";

import mptPoster from "@/assets/games/match-point-tennis/poster.webp";
import mptTrophies from "@/assets/games/match-point-tennis/trophies.webp";

import pickleballOnePoster from "@/assets/games/pickleball-one/poster.webp";
import pickleDrill360Poster from "@/assets/games/pickle-drill-360/poster.webp";

export const DeployedPlatforms = {
  Meta: "Meta Quest",
};

export const Studios = {
  ETD: "Evans Taylor Digital",
};

export type System = {
  title: string;
  problem: string;
  approach: string;
  result: string;
  media?: { src: StaticImageData; alt: string; clip?: string };
};

export type Takeaway = {
  title: string;
  text: string;
};

export type CaseStudy = {
  role: string;
  platform: string;
  tech: Tool[];
  overview: string[];
  systems: System[];
  takeaways: Takeaway[];
  trailer?: string;
};

export type Game = {
  slug: string;
  title: string;
  year: number;
  studio: string;
  pitch: string;
  built: string[];
  storeUrl: string;
  storeLabel: string;
  poster?: { src: StaticImageData; alt: string };
  clip?: string;
  featured?: boolean;
  caseStudy: CaseStudy;
};

export const GAMES: Game[] = [
  {
    slug: "match-point-tennis",
    title: "Match Point Tennis",
    year: 2021,
    studio: Studios.ETD,
    pitch: "A challenging and accurate VR tennis simulator",
    built: ["Player Economy", "Statistics System", "Tournament Mode"],
    storeUrl:
      "https://www.meta.com/en-gb/experiences/match-point-tennis/4182698635109247/",
    storeLabel: "Meta Quest store",
    poster: { src: mptPoster, alt: "" },
    featured: true,
    caseStudy: {
      role: "Software Developer",
      platform: DeployedPlatforms.Meta,
      tech: [ICONS.unity, ICONS.csharp],
      overview: ["overview", "overview2"],
      systems: [
        {
          title: "Trophies",
          problem: "Problem placeholder",
          approach: "Approach placeholder",
          result: "Result placeholder",
          media: { src: mptTrophies, alt: "" },
        },
        {
          title: "Player Economy",
          problem: "Problem placeholder",
          approach: "Approach placeholder",
          result: "Result placeholder",
        },
      ],
      takeaways: [
        { title: "title1", text: "text1" },
        { title: "title2", text: "text2" },
      ],
    },
  },

  {
    slug: "pickleball-one",
    title: "Pickleball One",
    year: 2023,
    studio: Studios.ETD,
    pitch: "A fun and social pickleball game",
    built: ["Training and Fitness Modes", "Experience System", "Physics"],
    storeUrl:
      "https://www.meta.com/en-gb/experiences/pickleball-one/5276176159145627/",
    storeLabel: "Meta Quest store",
    poster: { src: pickleballOnePoster, alt: "" },
    caseStudy: {
      role: "Software Developer",
      platform: DeployedPlatforms.Meta,
      tech: [ICONS.unity, ICONS.csharp],
      overview: ["overview", "overview2"],
      systems: [
        {
          title: "System one",
          problem: "Problem placeholder",
          approach: "Approach placeholder",
          result: "Result placeholder",
        },
        {
          title: "System two",
          problem: "Problem placeholder",
          approach: "Approach placeholder",
          result: "Result placeholder",
        },
      ],
      takeaways: [
        { title: "title1", text: "text1" },
        { title: "title2", text: "text2" },
      ],
    },
  },

  {
    slug: "pickledrill-360",
    title: "PickleDrill 360",
    year: 2024,
    studio: Studios.ETD,
    pitch: "A specialised pickleball training app",
    built: ["Subscription System", "Data Management", "Onboarding Flow"],
    storeUrl: "https://www.pickledrill360.com/",
    storeLabel: "Official website",
    poster: { src: pickleDrill360Poster, alt: "" },
    caseStudy: {
      role: "Software Developer",
      platform: DeployedPlatforms.Meta,
      tech: [ICONS.unity, ICONS.csharp],
      overview: ["overview", "overview2"],
      systems: [
        {
          title: "System one",
          problem: "Problem placeholder",
          approach: "Approach placeholder",
          result: "Result placeholder",
        },
        {
          title: "System two",
          problem: "Problem placeholder",
          approach: "Approach placeholder",
          result: "Result placeholder",
        },
      ],
      takeaways: [
        { title: "title1", text: "text1" },
        { title: "title2", text: "text2" },
      ],
    },
  },
];
