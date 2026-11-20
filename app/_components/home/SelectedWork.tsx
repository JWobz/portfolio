import { TbArrowRight, TbArrowUpRight } from "react-icons/tb";
import { GAMES } from "@/data/games";
import Link from "next/link";
import Image from "next/image";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  const otherGames = GAMES.filter((game) => !game.featured);
  const featuredGame = GAMES.find((game) => game.featured);
  return (
    <>
      {featuredGame && (
        <article className={styles.featuredCard}>
          <div className={styles.featuredMedia}>
            {featuredGame.poster && (
              <Image
                src={featuredGame.poster.src}
                alt={featuredGame.poster.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className={styles.image}
              />
            )}
          </div>
          <div className={styles.featuredBody}>
            <div className={styles.chips}>
              <span className={styles.featuredChip}>FEATURED</span>
              <span className={styles.chip}>
                VR SPORTS · {featuredGame.year}
              </span>
            </div>
            <h3 className={styles.featuredTitle}>{featuredGame.title}</h3>
            <p className={styles.pitch}>{featuredGame.pitch}</p>
            <p className={styles.built}>
              <span className={styles.builtLabel}>I built: </span>
              {featuredGame.built.join(" · ")}
            </p>
            <div className={styles.featuredLinks}>
              <p>
                <Link
                  href={`/work/${featuredGame.slug}`}
                  className={styles.caseLink}
                  aria-label={`Read case study: ${featuredGame.title}`}
                >
                  Read case study{" "}
                  <TbArrowRight aria-hidden="true" className="arrow" />
                </Link>
              </p>
              <a
                href={featuredGame.storeUrl}
                className={styles.storeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {featuredGame.storeLabel}{" "}
                <TbArrowUpRight aria-hidden="true" className="arrow" />
              </a>
            </div>
          </div>
        </article>
      )}
      <div className={styles.smallGrid}>
        {otherGames.map((game) => (
          <article key={game.slug} className={styles.smallCard}>
            <div className={styles.media}>
              {game.poster && (
                <Image
                  src={game.poster.src}
                  alt={game.poster.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className={styles.image}
                />
              )}
            </div>
            <div className={styles.cardBody}>
              <p className={styles.meta}>VR SPORTS · {game.year}</p>
              <h3 className={styles.smallTitle}>{game.title}</h3>
              <p className={styles.built}>
                <span className={styles.builtLabel}>I built: </span>
                {game.built.join(" · ")}
              </p>
              <p>
                <Link
                  href={`/work/${game.slug}`}
                  className={styles.caseLink}
                  aria-label={`Read case study: ${game.title}`}
                >
                  Read case study{" "}
                  <TbArrowRight aria-hidden="true" className="arrow" />
                </Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
