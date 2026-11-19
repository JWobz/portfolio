"use client";

import ScrambleText from "./ScrambleText";
import RoleCycler from "./RoleCycler";
import styles from "./Hero.module.css";
import { useMotionPaused } from "@/app/_hooks/useMotionPaused";
import { usePageHidden } from "@/app/_hooks/usePageHidden";
import { useRef } from "react";
import { useOnScreen } from "@/app/_hooks/useOnScreen";

export default function HeroText({
  name,
  roles,
}: {
  name: string;
  roles: string[];
}) {
  const [paused, togglePaused] = useMotionPaused();
  const hidden = usePageHidden();
  const heroRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(heroRef);
  const stopped = paused || hidden || !onScreen;
  return (
    <div ref={heroRef}>
      <h1 className={styles.name}>
        <span className="visually-hidden">{name}</span>
        <ScrambleText text={name} paused={stopped} />
      </h1>
      <p className={styles.roles}>
        <span className="visually-hidden">{roles.join(", ")}</span>
        <RoleCycler roles={roles} paused={stopped} />
      </p>
      <button
        type="button"
        className={styles.motionToggle}
        aria-pressed={paused}
        onClick={togglePaused}
      >
        Pause motion
      </button>
    </div>
  );
}
