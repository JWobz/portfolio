"use client";

import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=?";

export default function ScrambleText({
  text,
  paused,
}: {
  text: string;
  paused: boolean;
}) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (paused) return;
    let revealed = 0.5;
    const timer = setInterval(() => {
      revealed += 0.5;
      const frame = text
        .split("")
        .map((char, i) => {
          if (i < revealed) return char;
          if (char === " ") return char;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplay(frame);

      if (revealed >= text.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [text, paused]);
  const shown = paused ? text : display;
  return <span aria-hidden="true">{shown}</span>;
}
