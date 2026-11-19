import { BIO, EXPERIENCE } from "@/data/about";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.bio}>
        {BIO.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className={styles.experience}>
        <ul className={styles.jobs}>
          {EXPERIENCE.map((job) => (
            <li key={job.period} className={styles.job}>
              <div>
                <p className={styles.jobTitle}>{job.title}</p>
                <p className={styles.jobPlace}>{job.place}</p>
              </div>
              <p className={styles.jobPeriod}>{job.period}</p>
            </li>
          ))}
        </ul>
        <a href="/resume.pdf" download className={styles.resume}>
          <span>Download full résumé</span>
          <span>
            PDF <span aria-hidden="true">↓</span>
          </span>
        </a>
      </div>
    </div>
  );
}
