import { TbArrowDown, TbArrowUpRight } from "react-icons/tb";
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/data/site";
import styles from "./Contact.module.css";
import { ICONS } from "@/data/tools";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <a href={`mailto:${EMAIL}`} className={styles.email}>
        {EMAIL}
      </a>
      <ul className={styles.links}>
        <li>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <ICONS.linkedin.icon
              className={styles.socialIcon}
              aria-hidden="true"
            />{" "}
            LinkedIn <TbArrowUpRight aria-hidden="true" className="arrow" />
          </a>
        </li>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <ICONS.git.icon className={styles.socialIcon} aria-hidden="true" />{" "}
            GitHub <TbArrowUpRight aria-hidden="true" className="arrow" />
          </a>
        </li>
        <li>
          <a href="/resume.pdf" download>
            Résumé <TbArrowDown aria-hidden="true" className="arrow" />
          </a>
        </li>
      </ul>
    </div>
  );
}
