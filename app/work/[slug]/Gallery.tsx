import styles from "./Gallery.module.css";
import Image, { getImageProps } from "next/image";
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
              <GalleryVideo item={item} />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) calc(85vw - 40px), 720px"
                className={styles.media}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function GalleryVideo({
  item,
}: {
  item: Extract<GalleryItem, { type: "video" }>;
}) {
  return (
    <video
      src={item.src}
      poster={
        getImageProps({ src: item.poster, alt: "", width: 360 }).props.src
      }
      aria-label={item.label}
      controls
      muted
      playsInline
      preload="none"
      className={styles.media}
    />
  );
}
