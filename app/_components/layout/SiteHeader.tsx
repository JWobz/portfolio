import Link from "next/link";
import styles from "./SiteHeader.module.css";
import { NAME } from "@/data/site";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label={`${NAME}, home`}>
          JW
          <span className={styles.dot}>.</span>
        </Link>

        <nav aria-label="Main" className={styles.nav}>
          <ul className={styles.links}>
            <li>
              <Link className={styles.navLink} href="/#work">
                Work
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <a href="/resume.pdf" className={styles.resume}>
          Résumé
        </a>
      </div>
    </header>
  );
}
