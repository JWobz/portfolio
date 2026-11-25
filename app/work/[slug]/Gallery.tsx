import styles from "./Gallery.module.css";
import Image from "next/image";
import type { GalleryItem } from "@/data/games";

export default function Gallery({
  items,
  title,
}: {
  items: GalleryItem[];
  title: string;
}) {
  return (
    <section
      className={styles.strip}
      aria-label={`${title} gallery`}
      tabIndex={0}
    >
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            {item.type === "video" ? (
              <video
                src={item.src}
                poster={item.poster.src}
                aria-label={item.label}
                controls
                muted
                playsInline
                preload="none"
                className={styles.media}
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 85vw, 720px"
                className={styles.media}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
