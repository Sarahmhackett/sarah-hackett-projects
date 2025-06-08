import React, { useState } from "react";
import Link from "next/link";
import { projects } from "../data/projects";

export default function HomepageCards() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div>
      <h2>Filter by Tag</h2>
      <button onClick={() => setSelectedTag(null)}>All</button>
      <button onClick={() => setSelectedTag("React")}>React</button>
      <button onClick={() => setSelectedTag("Next JS")}>Next.js</button>
      <button onClick={() => setSelectedTag("API")}>API</button>

      <ul>
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <li>
              {project.name} - <Link href={project.url}>Link</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
