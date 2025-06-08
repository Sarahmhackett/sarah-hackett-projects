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
    homepageImage: "/images/project-1.png",
    tags: ["Next JS", "API"],
    shortDescription: "An awesome project using Next.js and an API.",
  },
  {
    id: "project-2",
    name: "React with Tailwind project",
    url: "/projects/project-2",
    homepageImage: "/images/project-2.png",
    tags: ["React", "Tailwind"],
    shortDescription: "A project made with React and Tailwind",
  },
  {
    id: "project-3",
    name: "APIs project",
    url: "../../public/images/project-3.png",
    homepageImage: "/images/project-3.png",
    tags: ["API"],
    shortDescription: "An experimentation with APIs",
  },
  {
    id: "project-4",
    name: "Project Name",
    url: "/projects/project-2",
    homepageImage: "/images/project-3.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description",
  },
  {
    id: "project-5",
    name: "Project Name 5",
    url: "/projects/project-2",
    homepageImage: "/images/project-1.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description 5",
  },
];
