import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";
import styles from "./HomepageCard.module.css";

export default function HomepageCards() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className={styles.container}>
      <h2>Featured Projects</h2>
      <button onClick={() => setSelectedTag(null)}>All</button>
      <button onClick={() => setSelectedTag("React")}>React</button>
      <button onClick={() => setSelectedTag("Next JS")}>Next.js</button>
      <button onClick={() => setSelectedTag("API")}>API</button>

      <div className={styles.cardscontainer}>
        {" "}
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.cards}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.homepageImage}
                alt={project.name}
                fill
                className={styles.projectImage}
              />
            </div>
            <h2>{project.name}</h2>

            <ul className={styles.tags}>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>

            <p>{project.shortDescription}</p>
            <p>
              <Link href={project.url}>See More</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
