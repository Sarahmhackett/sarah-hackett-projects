import type { Metadata } from "next";
import Link from "next/link";

import "./styles/globals.css";

export const metadata = {
  title: "My Blog",
  description: "A simple Next.js blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link href="/about" style={{ marginRight: "1rem" }}>
            About
          </Link>
          <Link href="/contact/say-hello">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
