import React, { useState } from "react";
import Link from "next/link";
import { projects } from "../data/projects";
import styles from "./HomepageCard.module.css";

export default function HomepageCards() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className={styles.container}>
      <h2>Filter by Tag</h2>
      <button onClick={() => setSelectedTag(null)}>All</button>
      <button onClick={() => setSelectedTag("React")}>React</button>
      <button onClick={() => setSelectedTag("Next JS")}>Next.js</button>
      <button onClick={() => setSelectedTag("API")}>API</button>

      <div className={styles.cardscontainer}>
        {" "}
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.cards}>
            {project.name} - <Link href={project.url}>Link</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
