import type { GalleryItem } from "@/data/games";

import poster from "@/assets/games/match-point-tennis/poster.webp";
import trophies from "@/assets/games/match-point-tennis/trophies.webp";
import economy from "@/assets/games/match-point-tennis/economy.webp";

import mptScreenshot1 from "@/assets/games/match-point-tennis/mptScreenshot1.webp";
import mptScreenshot2 from "@/assets/games/match-point-tennis/mptScreenshot2.webp";
import mptScreenshot3 from "@/assets/games/match-point-tennis/mptScreenshot3.webp";

export const mptImages = { poster, trophies, economy };

export const mptGallery: GalleryItem[] = [
  {
    type: "video",
    src: "/trailers/mptTrailer.mp4",
    poster: poster,
    label: "Match Point Tennis trailer",
  },
  { type: "image", src: mptScreenshot1, alt: "…" },
  { type: "image", src: mptScreenshot2, alt: "…" },
  { type: "image", src: mptScreenshot3, alt: "…" },
];
