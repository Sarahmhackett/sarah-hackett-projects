import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/featured-projects";
import styles from "./FeaturedCards.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TiLeaf } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";

export default function FeaturedCards() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.h2}>FEATURED</h2>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsHidden((prev) => !prev);
          }}
        >
          <>
            {isHidden ? "Show featured " : "Hide featured "}
            {"  "}
            {isHidden ? (
              <FaChevronUp style={{ marginLeft: "6px" }} />
            ) : (
              <FaChevronDown style={{ marginLeft: "6px" }} />
            )}
          </>
        </a>
      </div>

      <div className={isHidden ? styles.hiddenElement : styles.cardscontainer}>
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
            <h2 className={styles.projectName}>{project.name}</h2>

            <ul className={styles.tags}>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>

            <p className={styles.projectDescription}>
              {project.shortDescription}
            </p>
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
