import Link from "next/link";
import styles from "./not-found.module.css";
import { Metadata } from "next";

export default function NotFound() {
  return (
    <section className={`container ${styles.notFound}`}>
      <p className={styles.eyebrow}>Error / 404</p>
      <h1 className={styles.title}>Out of Bounds</h1>
      <p className={styles.text}>There’s nothing here, sorry!</p>
      <Link href="/" className={styles.button}>
        Back to home base
      </Link>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Page not found",
};
