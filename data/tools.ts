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

export const TOOLS = {
  csharp: { name: "C#", icon: TbBrandCSharp },
  python: { name: "Python", icon: SiPython },
  javascript: { name: "JavaScript", icon: SiJavascript },
  typescript: { name: "TypeScript", icon: SiTypescript },
  html: { name: "HTML", icon: SiHtml5 },

  unity: { name: "Unity", icon: SiUnity },
  react: { name: "React", icon: SiReact },
  nextjs: { name: "Next.js", icon: SiNextdotjs },

  git: { name: "Git", icon: SiGit },
  jira: { name: "Jira", icon: SiJira },
  figma: { name: "Figma", icon: SiFigma },
  postman: { name: "Postman", icon: SiPostman },
  firebase: { name: "Firebase", icon: SiFirebase },
  googlecloud: { name: "Google Cloud", icon: SiGooglecloud },
} satisfies Record<string, Tool>;

export type ToolGroup = {
  label: string;
  items: Tool[];
};

export const TOOL_GROUPS: ToolGroup[] = [
  {
    label: "Languages",
    items: [
      TOOLS.csharp,
      TOOLS.python,
      TOOLS.javascript,
      TOOLS.typescript,
      TOOLS.html,
    ],
  },
  {
    label: "Engines and frameworks",
    items: [TOOLS.unity, TOOLS.react, TOOLS.nextjs],
  },
  {
    label: "Tools and workflow",
    items: [
      TOOLS.git,
      TOOLS.jira,
      TOOLS.figma,
      TOOLS.postman,
      TOOLS.firebase,
      TOOLS.googlecloud,
    ],
  },
];
