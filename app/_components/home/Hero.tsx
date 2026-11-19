import { NAME, ROLES } from "@/data/site";
import { STATS } from "@/data/stats";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section aria-label="Intro" className={styles.section}>
      <div className={`container ${styles.intro}`}>
        <p className={styles.hello}>HI! I’M</p>
        <h1 className={styles.name}>{NAME}</h1>
        <p className={styles.roles}>{ROLES[0]}</p>
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
