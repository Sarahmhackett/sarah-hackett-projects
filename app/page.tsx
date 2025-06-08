"use client";
import styles from "./home.module.css";
import HomepageCards from "./components/HomepageCards";
import FeaturedCards from "./components/FeaturedCards";
import { Barrio } from "next/font/google";

const googleFont = Barrio({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1 className={`${googleFont.className} ${styles.title}`}>
          Sarah Hackett
        </h1>
        <h2 className={styles.introText}>
          👩🏼‍💻 💻 Software Engineer (2+ Years)
          <br />
          📊 🧠 Former: Business Analyst and Marketing Manager (12+ Years)
          <br />
          🎓 🎨 Code First Girls Degree alum & BA Hons Graphic Design (Leeds
          Metropolitian University).
        </h2>
      </div>

      <div className={styles.cardcontainer}>
        <FeaturedCards />
      </div>

      <div className={styles.cardcontainer}>
        <HomepageCards />
      </div>
    </main>
  );
}
