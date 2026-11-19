import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  number: number;
  label: string;
  title: string;
  alt?: boolean;
  centered?: boolean;
  children: React.ReactNode;
};

export default function Section({
  id,
  number,
  label,
  title,
  alt,
  centered,
  children,
}: SectionProps) {
  const formattedNumber = String(number).padStart(2, "0");
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={alt ? styles.alt : undefined}
    >
      <div
        className={`container ${styles.inner} ${centered ? styles.centered : ""}`}
      >
        <p className={styles.eyebrow}>
          {formattedNumber} / {label}
        </p>
        <h2 className={styles.title} id={`${id}-heading`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
