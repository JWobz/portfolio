import { GAMES } from "@/data/games";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import CaseStudyHeader from "./CaseStudyHeader";
import Section from "@/app/_components/layout/Section";
import SystemBlock from "./SystemBlock";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return GAMES.map((game) => ({ slug: game.slug }));
}

export const dynamicParams = false;

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const foundGame = GAMES.find((game) => game.slug === slug);
  if (foundGame === undefined) {
    notFound();
  }
  const index = GAMES.indexOf(foundGame);
  const nextGame = GAMES[(index + 1) % GAMES.length];
  return (
    <article>
      <div className="container">
        <CaseStudyHeader game={foundGame} />
      </div>
      <Section id="overview" number={1} label="Overview" title="The goal">
        <div className={styles.overview}>
          {foundGame.caseStudy.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
      <Section
        id="systems"
        number={2}
        label="Systems I built"
        title="Under the hood"
        alt={true}
      >
        <div className={styles.systems}>
          {foundGame.caseStudy.systems.map((system, i) => (
            <SystemBlock key={system.title} system={system} number={i + 1} />
          ))}
        </div>
      </Section>
      <Section
        id="takeaways"
        number={3}
        label="Takeaways"
        title="What I learned"
      >
        <ul className={styles.takeaways}>
          {foundGame.caseStudy.takeaways.map((takeaway) => (
            <li key={takeaway.title} className={styles.takeaway}>
              <h3>{takeaway.title}</h3>
              <p>{takeaway.text}</p>
            </li>
          ))}
        </ul>
      </Section>
      <footer className={`container ${styles.footer}`}>
        <Link href={`/work/${nextGame.slug}`} className={styles.next}>
          <span className={styles.nextLabel}>Next project</span>
          <span className={styles.nextTitle}>
            {nextGame.title} <span aria-hidden="true">→</span>
          </span>
        </Link>
        <p className={styles.credit}>Game assets © Evans Taylor Digital</p>
      </footer>
    </article>
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((game) => game.slug === slug);
  return {
    title: game?.title,
    description: game?.pitch,
  };
}
