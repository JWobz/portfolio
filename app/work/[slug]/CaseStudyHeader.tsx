import Link from "next/link";
import styles from "./CaseStudyHeader.module.css";
import { Game } from "@/data/games";
import { TbArrowLeft, TbArrowUpRight } from "react-icons/tb";

export default function CaseStudyHeader({ game }: { game: Game }) {
  return (
    <header className={styles.header}>
      <Link href="/#work" className={styles.back}>
        <TbArrowLeft aria-hidden="true" className="arrow" /> Back to work
      </Link>
      <p className={styles.eyebrow}>Case study · VR sports</p>
      <h1 className={styles.title}>{game.title}</h1>
      <p className={styles.pitch}>{game.pitch}</p>
      <dl className={styles.facts}>
        <div className={styles.fact}>
          <dt>Role</dt>
          <dd>{game.caseStudy.role}</dd>
        </div>
        <div className={styles.fact}>
          <dt>Studio</dt>
          <dd>{game.studio}</dd>
        </div>
        <div className={styles.fact}>
          <dt>Platform</dt>
          <dd>{game.caseStudy.platform}</dd>
        </div>
        <div className={styles.fact}>
          <dt>Tech</dt>
          <dd>{game.caseStudy.tech.map((tool) => tool.name).join(" · ")}</dd>
        </div>
        <div className={styles.fact}>
          <dt>Released</dt>
          <dd>{game.year}</dd>
        </div>
      </dl>
      <a
        href={game.storeUrl}
        className={styles.store}
        target="_blank"
        rel="noopener noreferrer"
      >
        {game.storeLabel}{" "}
        <TbArrowUpRight aria-hidden="true" className="arrow" />
      </a>
    </header>
  );
}
