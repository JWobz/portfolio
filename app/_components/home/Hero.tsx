import { NAME, ROLES } from "@/data/site";
import { STATS } from "@/data/stats";
import styles from "./Hero.module.css";
import ScrambleText from "./ScrambleText";
import RoleCycler from "./RoleCycler";

export default function Hero() {
  return (
    <section aria-label="Intro" className={styles.section}>
      <div className={`container ${styles.intro}`}>
        <p className={styles.hello}>HI! I’M</p>
        <h1 className={styles.name}>
          <span className="visually-hidden">{NAME}</span>
          <ScrambleText text={NAME} />
        </h1>
        <p className={styles.roles}>
          <span className="visually-hidden">{ROLES.join(", ")}</span>
          <RoleCycler roles={ROLES} />
        </p>
        <div className={styles.buttonRow}>
          <a href="#work" className={styles.filledButton}>
            View My Work <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className={styles.outlinedButton}>
            Get in touch
          </a>
        </div>
      </div>
      <div className={styles.stats}>
        <dl className={`container ${styles.statStrip}`}>
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className={`${styles.statCell} ${stat.accent ? styles.accent : ""}`}
            >
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
