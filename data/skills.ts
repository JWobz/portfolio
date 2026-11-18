export type Skill = {
  tag: string;
  title: string;
  description: string;
};

export const SKILLS: Skill[] = [
  {
    tag: "design",
    title: "Game and systems design",
    description:
      "Core loops, game feel, progression and balancing for players in a headset.",
  },
  {
    tag: "gameplay code",
    title: "Gameplay engineering",
    description:
      "The systems behind the design, written in C# and shipped on standalone hardware.",
  },
  {
    tag: "software",
    title: "Software development",
    description: "Web apps, tools and side projects. This site is one of them.",
  },
];
