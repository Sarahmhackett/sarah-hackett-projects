import type { Metadata } from "next";
import styles from "./layout.module.css";
import Link from "next/link";

import "./styles/globals.css";

export const metadata = {
  title: "Sarah Hackett",
  description:
    "Sarah Hackett's portfolio website. You should hire her because she's amazing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.navigation}>
          <Link className={styles.navHome} href="/">
            Home
          </Link>
          <Link className={styles.navAbout} href="/about">
            About
          </Link>
          <Link className={styles.navContact} href="/contact/say-hello">
            Contact
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
