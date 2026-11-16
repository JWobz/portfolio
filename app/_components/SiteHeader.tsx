import Link from "next/link";

export default function SiteHeader() {
  return (
    <header>
      <Link href="/">Jack Warburton</Link>
      <nav aria-label="Main">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
