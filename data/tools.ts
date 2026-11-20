import type { IconType } from "react-icons";
import { TbBrandCSharp } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import {
  SiPython,
  SiUnity,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiGithub,
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

export const ICONS = {
  csharp: { name: "C#", icon: TbBrandCSharp },
  python: { name: "Python", icon: SiPython },
  javascript: { name: "JavaScript", icon: SiJavascript },
  typescript: { name: "TypeScript", icon: SiTypescript },
  html: { name: "HTML", icon: SiHtml5 },

  unity: { name: "Unity", icon: SiUnity },
  react: { name: "React", icon: SiReact },
  nextjs: { name: "Next.js", icon: SiNextdotjs },

  git: { name: "Git", icon: SiGithub },
  jira: { name: "Jira", icon: SiJira },
  figma: { name: "Figma", icon: SiFigma },
  postman: { name: "Postman", icon: SiPostman },
  firebase: { name: "Firebase", icon: SiFirebase },
  googlecloud: { name: "Google Cloud", icon: SiGooglecloud },

  linkedin: { name: "LinkedIn", icon: FaLinkedin },
} satisfies Record<string, Tool>;

export type ToolGroup = {
  label: string;
  items: Tool[];
};

export const TOOL_GROUPS: ToolGroup[] = [
  {
    label: "Languages",
    items: [
      ICONS.csharp,
      ICONS.python,
      ICONS.javascript,
      ICONS.typescript,
      ICONS.html,
    ],
  },
  {
    label: "Engines and frameworks",
    items: [ICONS.unity, ICONS.react, ICONS.nextjs],
  },
  {
    label: "Tools and workflow",
    items: [
      ICONS.git,
      ICONS.jira,
      ICONS.figma,
      ICONS.postman,
      ICONS.firebase,
      ICONS.googlecloud,
    ],
  },
];
