import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/app/_lib/site";

export default function SiteFooter() {
  return (
    <footer>
      <ul>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </li>
      </ul>
      <p>© {new Date().getFullYear()} Jack Warburton</p>
    </footer>
  );
}
