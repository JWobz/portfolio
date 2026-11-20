"use client";

import { useEffect, useState, useRef, Fragment } from "react";
import styles from "./ScrambleText.module.css";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=?";
const DURATION = 900; // ms for the whole word, whatever its length
const GLYPH_EVERY = 50; // ms between new random glyphs

function buildFrame(text: string, revealed: number) {
  return text
    .split("")
    .map((char, i) => {
      if (i < revealed) return char;
      if (char === " ") return char;
      return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    })
    .join("");
}

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
    let frameId = 0;
    let start: number | null = null;
    let lastGlyph = -Infinity;

    const tick = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / DURATION, 1);
      if (now - lastGlyph >= GLYPH_EVERY || progress === 1) {
        lastGlyph = now;
        setDisplay(buildFrame(text, progress * text.length));
      }
      if (progress < 1) frameId = requestAnimationFrame(tick);
      else doneRef.current = text;
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
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
