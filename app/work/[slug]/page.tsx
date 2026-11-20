import { GAMES } from "@/data/games";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import CaseStudyHeader from "./CaseStudyHeader";
import Section from "@/app/_components/layout/Section";

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
        <p>Systems</p>
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
    </article>
  );
}
