import { GAMES } from "@/data/games";
import { notFound } from "next/navigation";
import CaseStudyHeader from "./CaseStudyHeader";

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
    <article className="container">
      <CaseStudyHeader game={foundGame} />
    </article>
  );
}
