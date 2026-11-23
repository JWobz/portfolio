import Image from "next/image";
import { System } from "@/data/games";
import styles from "./SystemBlock.module.css";

export default function SystemBlock({
  system,
  number,
}: {
  system: System;
  number: number;
}) {
  return (
    <article className={styles.system}>
      <div className={styles.text}>
        <p className={styles.label}>System {String(number).padStart(2, "0")}</p>
        <h3 className={styles.title}>{system.title}</h3>
        <dl className={styles.steps}>
          <div>
            <dt>Goal</dt>
            <dd>{system.goal}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{system.approach}</dd>
          </div>
          <div>
            <dt>Result</dt>
            <dd>{system.result}</dd>
          </div>
        </dl>
      </div>
      <div className={styles.media}>
        {system.media && (
          <Image
            src={system.media.src}
            alt={system.media.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        )}
      </div>
    </article>
  );
}
