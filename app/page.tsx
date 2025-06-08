"use client";
import styles from "./home.module.css";
import HomepageCards from "./components/HomepageCards";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Sarah Hackett</h1>
      <div className={styles.cardcontainer}>
        <HomepageCards />
      </div>
    </main>
  );
}
