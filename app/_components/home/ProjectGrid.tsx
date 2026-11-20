import { TbArrowUpRight } from "react-icons/tb";
import Image from "next/image";
import styles from "./ProjectGrid.module.css";
import { PROJECTS } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <ul className={styles.projectGrid}>
      {PROJECTS.map((project) => (
        <li key={project.name} className={styles.projectCard}>
          <div className={styles.screenshot}>
            {project.image && (
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className={styles.image}
              />
            )}
          </div>
          <h3 className={styles.projectName}>{project.name}</h3>
          <p className={styles.blurb}>{project.blurb}</p>
          <p className={styles.stack}>{project.stack.join(" · ")}</p>
          {(project.liveUrl || project.codeUrl) && (
            <div className={styles.projectLinks}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className={styles.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live site: ${project.name}`}
                >
                  Live <TbArrowUpRight aria-hidden="true" className="arrow" />
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  className={styles.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Source code: ${project.name}`}
                >
                  Code <TbArrowUpRight aria-hidden="true" className="arrow" />
                </a>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
