import { START_YEAR } from "./stats";

export const BIO: string[] = ["Para 1", "Para 2"];

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
];
