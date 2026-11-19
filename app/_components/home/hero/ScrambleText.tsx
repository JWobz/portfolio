"use client";

import { useEffect, useState, useRef, Fragment } from "react";
import styles from "./ScrambleText.module.css";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=?";

export default function ScrambleText({
  text,
  paused,
}: {
  text: string;
  paused: boolean;
}) {
  const [display, setDisplay] = useState(text);
  const doneRef = useRef<string | null>(null);
  useEffect(() => {
    if (paused || doneRef.current === text) return;
    let revealed = 0.25;
    const timer = setInterval(() => {
      revealed += 0.25;
      const frame = text
        .split("")
        .map((char, i) => {
          if (i < revealed) return char;
          if (char === " ") return char;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplay(frame);

      if (revealed >= text.length) {
        clearInterval(timer);
        doneRef.current = text;
      }
    }, 40);
    return () => clearInterval(timer);
  }, [text, paused]);
  const shown = paused ? text : display;
  const realWords = text.split(" ");
  const shownWords = shown.split(" ");
  return (
    <span aria-hidden="true">
      {realWords.map((word, w) => (
        <Fragment key={w}>
          {w > 0 && " "}
          <span className={styles.word}>
            {word.split("").map((char, i) => {
              const glyph = shownWords[w]?.[i] ?? char;
              return (
                <span key={i} className={styles.slot}>
                  <span className={styles.ghost}>{char}</span>
                  <span className={glyph === char ? undefined : styles.dim}>
                    {glyph}
                  </span>
                </span>
              );
            })}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
