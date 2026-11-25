import type { StaticImageData } from "next/image";
import { Tool, ICONS } from "./tools";

import { mptGallery, mptImages } from "./media/match-point-tennis";
import { pb1Gallery, pb1Images } from "./media/pickleball-one";
import { pd360Gallery, pd360Images } from "./media/pickledrill-360";

export const DeployedPlatforms = {
  Meta: "Meta Quest",
};

export const Studios = {
  ETD: "Evans Taylor Digital",
};

export type System = {
  title: string;
  goal: string;
  approach: string;
  result: string;
  media?: { src: StaticImageData; alt: string; clip?: string };
};

export type GalleryItem =
  | { type: "image"; src: StaticImageData; alt: string }
  | { type: "video"; src: string; poster: StaticImageData; label: string };

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
  gallery?: GalleryItem[];
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
    poster: { src: mptImages.poster, alt: "" },
    featured: true,
    caseStudy: {
      role: "Software Developer",
      platform: DeployedPlatforms.Meta,
      tech: [ICONS.unity, ICONS.csharp],
      overview: [
        "Match Point Tennis is a VR tennis simulator for Meta Quest, built to be challenging and accurate, with realistic ball physics and a range of ways to play.",
        "My work focused on the systems that keep players coming back: the player economy, statistics, tournament mode and trophies. That included moving the economy to Firebase, which meant migrating live player data without anyone losing progress.",
      ],
      systems: [
        {
          title: "Player Economy",
          goal: "The game’s economy ran on Unity Gaming Services, and we’d hit its limit on item slots. We needed to move it to Firebase without any player losing their inventory or currency.",
          approach:
            "I used a lazy migration: when a player logged in, the game checked whether they’d used the new system yet. If not, it read their data from Unity Gaming Services, ran validation checks and wrote it to Firebase. The old data was never deleted, so it stayed available as an emergency backup.",
          result:
            "Players moved over with no data lost and no complaints. Firebase also ran our other systems, so this brought more of the game’s data into one place and made it simpler to maintain.",
          media: {
            src: mptImages.economy,
            alt: "Player about to return the ball on the court",
          },
        },
        {
          title: "Trophies",
          goal: "Players needed a reason to keep coming back once they’d learned the game. Trophies gave them long-term goals and a record of what they’d achieved.",
          approach:
            "Trophy progress was driven by events fired at the end of each match, so the trophy system didn’t have to be tied into gameplay code. Progress was saved with Unity Cloud Save. I also built the trophies as physical objects in VR, so players could pick them up, show them off and throw them around.",
          result:
            "Players loved them, especially the physical side. Picking up and playing with a trophy you’d earned made the reward feel real in a way a menu icon doesn’t.",
          media: {
            src: mptImages.trophies,
            alt: "Player holding earned physical trophies",
          },
        },
      ],
      takeaways: [
        {
          title: "Migrate carefully, keep a way back",
          text: "Moving live player data taught me to migrate in small steps and never delete the old copy until the new one has proven itself. A slower migration with a backup beats a fast one you can’t undo.",
        },
        {
          title: "Loose coupling pays off",
          text: "Because trophies listened for match events instead of being wired into gameplay code, we could add and change them without touching the match itself. Keeping systems separate made the whole game easier to work on.",
        },
      ],
      gallery: mptGallery,
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
    poster: { src: pb1Images.poster, alt: "" },
    caseStudy: {
      role: "Software Developer",
      platform: DeployedPlatforms.Meta,
      tech: [ICONS.unity, ICONS.csharp],
      overview: [
        "Pickleball One is a social VR pickleball game for Meta Quest, made to be fun to pick up and play with friends.",
        "I worked on the progression and training side of the game: the experience and prestige system, training modes and physics. The training modes went on to shape PickleDrill 360.",
      ],
      systems: [
        {
          title: "Experience System",
          goal: "Players needed to feel they were improving every session, even when they lost. The game needed a progression system that rewarded time and effort, not just wins.",
          approach:
            "Experience came from a wide range of factors, from time played to performance in each match. Each factor had its own cap, so no single one could be farmed. I tuned the rates through calculations and playtesting to keep the pace of levelling right.",
          result:
            "Levels led into prestige ranks that showed in matches, and players earned cosmetic items along the way. It gave players something to show off and a reason to keep playing.",
          media: {
            src: pb1Images.experience,
            alt: "A doubles pickleball match",
          },
        },
        {
          title: "Training and fitness modes",
          goal: "We wanted to offer more focused ways to practise specific shots or just get a workout in, since that’s what people enjoy most about the sport.",
          approach:
            "Rather than building a new system, I extended the existing game mode system with an extra layer for training. Most modes were variations on target practice in different scenarios, such as serving or rallying. Players scored points for accuracy, and those points went to a leaderboard.",
          result:
            "A handful of training modes shipped. What we learned from them carried into PickleDrill 360, a full training app built around the same idea.",
          media: {
            src: pb1Images.trainingFitness,
            alt: "A player in a training mode",
          },
        },
      ],
      takeaways: [
        {
          title: "Assume players will find the shortcut",
          text: "Capping each experience factor taught me to design for how people will actually use a system, not how I hope they will. Anything that can be farmed eventually will be.",
        },
        {
          title: "Extend before you rebuild",
          text: "Building training modes on top of the existing game mode system got them shipped faster and left one shared code path to maintain, instead of two that slowly drift apart.",
        },
      ],
      gallery: pb1Gallery,
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
    poster: { src: pd360Images.poster, alt: "" },
    caseStudy: {
      role: "Software Developer",
      platform: DeployedPlatforms.Meta,
      tech: [ICONS.unity, ICONS.csharp],
      overview: [
        "PickleDrill 360 is a specialised pickleball training app. Players run drills in their own room, using AR passthrough to line a virtual court up with the space around them.",
        "I built core parts of the app, including the subscription system, data management and the onboarding flow that sets up each player’s playspace.",
      ],
      systems: [
        {
          title: "Subscription System",
          goal: "As a training app, PickleDrill 360 ran on subscriptions. It needed a reliable way to unlock content for paying players and to handle subscriptions running out.",
          approach:
            "Purchases went through the standard Meta Quest store. Each player’s subscription was checked against both Meta and our own record in Firebase, so access never relied on a single source. The app was online only, so the check ran every session, and an expired subscription took the player straight to the purchase screen.",
          result:
            "Meta’s purchase flow only allowed switching between certain plans, so we accepted that limit and I made the options clearer in the UI to avoid confusing players. Otherwise it unlocked content reliably for subscribers, and lapsed players always had a clear way back in.",
          media: {
            src: pd360Images.subscription,
            alt: "",
          },
        },
        {
          title: "Playspace Setup",
          goal: "Drills only work if the court lines up with the player’s real room. Players needed a quick, clear way to set up their space before their session.",
          approach:
            "The app made a first guess at the player’s space, then let them move and fine-tune it with a controller. Projected lines and a wall shown in AR passthrough made it easy to see where the court sat in the real room. A minimum size check stopped anyone from starting in a space too small to play safely.",
          result:
            "Setup was quick and easy, and we had no complaints about it.",
          media: {
            src: pd360Images.playspace,
            alt: "",
          },
        },
      ],
      takeaways: [
        {
          title: "Work with the platform, not against it",
          text: "Meta’s purchase flow limited which plans players could switch between. Instead of fighting it, we accepted the limit and made it clear in the UI. A clear experience mattered more than a perfect one.",
        },
        {
          title: "A good guess, then let people adjust",
          text: "Playspace setup worked best by guessing the space first and then letting players fine-tune it. Getting most of the way there automatically, with easy control over the rest, made setup quick without taking control away.",
        },
      ],
      gallery: pd360Gallery,
    },
  },
];
