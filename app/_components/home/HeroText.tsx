"use client";

import ScrambleText from "./ScrambleText";
import RoleCycler from "./RoleCycler";
import styles from "./Hero.module.css";
import { useMotionPaused } from "./useMotionPaused";

export default function HeroText({
  name,
  roles,
}: {
  name: string;
  roles: string[];
}) {
  const [paused, togglePaused] = useMotionPaused();
  return (
    <>
      <h1 className={styles.name}>
        <span className="visually-hidden">{name}</span>
        <ScrambleText text={name} paused={paused} />
      </h1>
      <p className={styles.roles}>
        <span className="visually-hidden">{roles.join(", ")}</span>
        <RoleCycler roles={roles} paused={paused} />
      </p>
      <button
        type="button"
        className={styles.motionToggle}
        aria-pressed={paused}
        onClick={togglePaused}
      >
        Pause motion
      </button>
    </>
  );
}
