import type { GalleryItem } from "@/data/games";

import poster from "@/assets/games/pickleball-one/poster.webp";
import trainingFitness from "@/assets/games/pickleball-one/trainingFitness.webp";
import experience from "@/assets/games/pickleball-one/experience.webp";

import pb1Screenshot1 from "@/assets/games/pickleball-one/pb1Screenshot1.webp";
import pb1Screenshot2 from "@/assets/games/pickleball-one/pb1Screenshot2.webp";
import pb1Screenshot3 from "@/assets/games/pickleball-one/pb1Screenshot3.webp";
import pb1Screenshot4 from "@/assets/games/pickleball-one/pb1Screenshot4.webp";
import pb1Screenshot5 from "@/assets/games/pickleball-one/pb1Screenshot5.webp";

export const pb1Images = { poster, experience, trainingFitness };

export const pb1Gallery: GalleryItem[] = [
  {
    type: "video",
    src: "/trailers/pb1Trailer.mp4",
    poster: poster,
    label: "Pickleball One trailer",
  },
  { type: "image", src: pb1Screenshot1, alt: "…" },
  { type: "image", src: pb1Screenshot2, alt: "…" },
  { type: "image", src: pb1Screenshot3, alt: "…" },
  { type: "image", src: pb1Screenshot4, alt: "…" },
  { type: "image", src: pb1Screenshot5, alt: "…" },
];
