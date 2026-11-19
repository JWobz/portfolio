export type Game = {
  slug: string;
  title: string;
  year: number;
  pitch: string;
  built: string[];
  storeUrl: string;
  storeLabel: string;
  featured?: boolean;
};

export const GAMES: Game[] = [
  {
    slug: "match-point-tennis",
    title: "Match Point Tennis",
    year: 2021,
    pitch: "A challenging and accurate VR tennis simulator",
    built: ["Player Economy", "Statistics System", "Tournament Mode"],
    storeUrl:
      "https://www.meta.com/en-gb/experiences/match-point-tennis/4182698635109247/",
    storeLabel: "Meta Quest store",
    featured: true,
  },

  {
    slug: "pickleball-one",
    title: "Pickleball One",
    year: 2023,
    pitch: "A fun and social pickleball game",
    built: ["Training and Fitness Modes", "Experience System", "Physics"],
    storeUrl:
      "https://www.meta.com/en-gb/experiences/pickleball-one/5276176159145627/",
    storeLabel: "Meta Quest store",
  },

  {
    slug: "pickledrill-360",
    title: "PickleDrill 360",
    year: 2024,
    pitch: "A specialised pickleball training app",
    built: ["Subscription System", "Data Management", "Onboarding Flow"],
    storeUrl: "https://www.pickledrill360.com/",
    storeLabel: "Official website",
  },
];
