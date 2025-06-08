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
        <nav style={{ padding: "1rem", background: "#eee" }}>
          <Link href="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link href="/contact/say-hello">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
