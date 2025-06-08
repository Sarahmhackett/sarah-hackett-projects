export type Project = {
  id: string;
  name: string;
  url: string;
  homepageImage: string;
  tags: string[];
  shortDescription: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Next JS with API project",
    url: "/projects/project-1",
    homepageImage: "/images/project1.png",
    tags: ["Next JS", "API"],
    shortDescription: "An awesome project using Next.js and an API.",
  },
  {
    id: "project-2",
    name: "React with Tailwind project",
    url: "/projects/project-2",
    homepageImage: "/images/project2.png",
    tags: ["React", "Tailwind"],
    shortDescription: "A personal portfolio made with React and Tailwind.",
  },
];
