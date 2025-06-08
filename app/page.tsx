import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to My Blog</h1>
      <ul>
        <li>
          <Link href="/projects/project-1">Blog Post 1</Link>
        </li>
        <li>
          <Link href="/projects/project-2">Blog Post 2</Link>
        </li>
      </ul>
    </main>
  );
}
