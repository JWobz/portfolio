import type { Metadata } from "next";
import { Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./_components/layout/SiteHeader";
import SiteFooter from "./_components/layout/SiteFooter";
import { SITE_URL } from "@/data/site";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jack Warburton",
    template: "%s · Jack Warburton",
  },
  description:
    "Portfolio of Jack Warburton, a Game Developer and Software Engineer.",
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
