import type { IconType } from "react-icons";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiPython,
  SiUnity,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiJira,
  SiFigma,
  SiPostman,
  SiFirebase,
  SiGooglecloud,
} from "react-icons/si";

export type Tool = {
  name: string;
  icon?: IconType;
};

export type ToolGroup = {
  label: string;
  items: Tool[];
};

export const TOOL_GROUPS: ToolGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "C#", icon: TbBrandCSharp },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
    ],
  },
  {
    label: "Engines and frameworks",
    items: [
      { name: "Unity", icon: SiUnity },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    label: "Tools and workflow",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Jira", icon: SiJira },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Firebase", icon: SiFirebase },
      { name: "Google Cloud", icon: SiGooglecloud },
    ],
  },
];
