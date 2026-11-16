import Link from "next/link";
import NavLink from "@/app/_components/NavLink";

export default function SiteHeader() {
  return (
    <header>
      <Link href="/">Jack Warburton</Link>
      <nav aria-label="Main">
        <ul>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
