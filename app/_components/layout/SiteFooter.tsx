import { NAME, REPO_URL } from "@/data/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>
          © {new Date().getFullYear()} {NAME}
        </span>
        <a
          className={styles.link}
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source on GitHub
        </a>
      </div>
    </footer>
  );
}
