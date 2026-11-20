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
            <dt>Problem</dt>
            <dd>{system.problem}</dd>
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
      <pre tabIndex={0} className={styles.code}>
        <code>{system.code}</code>
      </pre>
    </article>
  );
}
