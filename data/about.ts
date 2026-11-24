import { START_YEAR } from "./stats";

export const BIO: string[] = [
  "I’m a developer from New Zealand who likes building the systems that keep things running: progression, economies, subscriptions and the data underneath it all. I studied Computer Science and Product Design at the University of Canterbury, then shipped three VR sports games for Meta Quest with Evans Taylor Digital.",
  "I like owning a feature from the first rough idea to the version people actually use, and iterating on it until it feels right. Games are where I’ve done most of that so far, but I’m just as happy doing it anywhere good software matters.",
];

export type Experience = {
  title: string;
  place: string;
  period: string;
};

export const EXPERIENCE: Experience[] = [
  {
    title: "Software Developer",
    place: "Evans Taylor Digital",
    period: `${START_YEAR} – 2026`,
  },
  {
    title: "Studied Computer Science and Game Design",
    place: "University of Canterbury",
    period: "2018 – 2022",
  },
];
