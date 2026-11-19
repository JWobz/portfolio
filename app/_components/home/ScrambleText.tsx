"use client";

import { useEffect, useState } from "react";

export default function ScrambleText({ text }: { text: string }) {
  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=?";
  const [display, setDisplay] = useState(text);
  useEffect(() => {
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
  }, [text]);
  return <span aria-hidden="true">{display}</span>;
}
