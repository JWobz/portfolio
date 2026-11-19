import { SKILLS } from "@/data/skills";
import styles from "./SkillCards.module.css";

export default function SkillCards() {
  return (
    <ul className={styles.skillGrid}>
      {SKILLS.map((skill) => (
        <li key={skill.title} className={styles.skillCard}>
          <p className={styles.cardTag}>
            <span aria-hidden="true">&gt; </span>
            {skill.tag}
          </p>
          <h3 className={styles.cardTitle}>{skill.title}</h3>
          <p className={styles.cardDescription}>{skill.description}</p>
        </li>
      ))}
    </ul>
  );
}
