export const START_YEAR = 2023;

export type Stat = {
  value: string;
  label: string;
  accent?: boolean;
};

export const STATS: Stat[] = [
  {
    value: `${new Date().getFullYear() - START_YEAR}` + "+",
    label: "Years of Experience",
    accent: true,
  },
  {
    value: "3",
    label: "Titles Shipped",
  },
  {
    value: "2,000+",
    label: "Player Ratings",
  },
];
