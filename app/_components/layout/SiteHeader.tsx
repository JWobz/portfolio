import Link from "next/link";
import styles from "./SiteHeader.module.css";
import { NAME } from "@/data/site";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          JW
          <span className={styles.dot} aria-hidden="true">
            .
          </span>
          <span className="visually-hidden">, {NAME}, home</span>
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
