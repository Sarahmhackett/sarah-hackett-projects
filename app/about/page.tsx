import styles from "./about.module.css";
import { Barrio } from "next/font/google";
import MyVerticalTimeline from "../components/Timeline";

const googleFont = Barrio({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  return (
    <main>
      <div className={styles.titleContainer}>
        <h1 className={`${googleFont.className} ${styles.title}`}>
          Sarah Hackett
        </h1>
      </div>

      <div className={styles.introZone}>
        <div className={styles.imageContainer}>IMAGE HERE - WIP PAGE</div>
        <div className={styles.textContainer}>TEXT HERE - WIP PAGE</div>
      </div>

      <div className={styles.timelineContainer}>
        <h1 className={`${googleFont.className} ${styles.timelineTitle}`}>
          A series of fortunate events
        </h1>
        <div>
          <MyVerticalTimeline />
        </div>
      </div>
    </main>
  );
}
