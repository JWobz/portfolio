import { EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/data/site";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <a href={`mailto:${EMAIL}`} className={styles.email}>
        {EMAIL}
      </a>
      <ul className={styles.links}>
        <li>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </li>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </li>
        <li>
          <a href="/resume.pdf" download>
            Résumé <span aria-hidden="true">↓</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
