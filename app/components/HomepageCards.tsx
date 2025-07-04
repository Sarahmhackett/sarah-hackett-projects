import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";
import styles from "./HomepageCard.module.css";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { TiLeaf } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";

export default function HomepageCards() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.h2}>ALL PROJECTS</h2>
        <div className={styles.filterButtons}>
          <button
            className={styles.filterButtonAll}
            onClick={() => setSelectedTag(null)}
          >
            See All
          </button>
          <button
            className={styles.filterButtonReact}
            onClick={() => setSelectedTag("React")}
          >
            <FaReact style={{ marginRight: "8px" }} size={20} />
            React
          </button>
          <button
            className={styles.filterButtonNextJS}
            onClick={() => setSelectedTag("Next.js")}
          >
            <RiNextjsFill style={{ marginRight: "8px" }} size={20} />
            Next.js
          </button>
          <button
            className={styles.filterButtonAPI}
            onClick={() => setSelectedTag("API")}
          >
            <PiPlugsConnectedBold style={{ marginRight: "8px" }} size={20} />
            API
          </button>
          <button
            className={styles.filterButtonTBC}
            onClick={() => setSelectedTag("TAG")}
          >
            TAG
          </button>
        </div>
      </div>

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
            <ul className={styles.links}>
              <li>
                <Link className={styles.seeMore} href={project.url}>
                  <TiLeaf style={{ marginRight: "6px" }} size={20} />
                  See More
                </Link>
              </li>
              <li>
                <Link
                  className={
                    project.githubUrl ? styles.gitHub : styles.nogitHubUrl
                  }
                  href={project.githubUrl}
                >
                  <VscGithub style={{ marginRight: "6px" }} size={20} />
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
