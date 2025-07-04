export type Project = {
  id: string;
  name: string;
  url: string;
  homepageImage: string;
  tags: string[];
  shortDescription: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Next.js with API project",
    url: "/projects/project-1",
    homepageImage: "/images/project-1.png",
    tags: ["Next.js", "API", "Work"],
    shortDescription: "An awesome project using Next.js and an API.",
    githubUrl: "",
  },
  {
    id: "project-2",
    name: "React with Tailwind project",
    url: "/projects/project-2",
    homepageImage: "/images/project-2.png",
    tags: ["React", "Tailwind"],
    shortDescription: "A project made with React and Tailwind",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-3",
    name: "APIs project",
    url: "../../public/images/project-3.png",
    homepageImage: "/images/project-3.png",
    tags: ["API"],
    shortDescription: "An experimentation with APIs",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-4",
    name: "Project Name",
    url: "/projects/project-2",
    homepageImage: "/images/project-3.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-5",
    name: "Project Name 5",
    url: "/projects/project-2",
    homepageImage: "/images/project-1.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description 5",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-6",
    name: "Project Name 6",
    url: "/projects/project-2",
    homepageImage: "/images/project-1.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description 5",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-7",
    name: "Project Name 7",
    url: "/projects/project-2",
    homepageImage: "/images/project-1.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description 5",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-8",
    name: "Project Name 8",
    url: "/projects/project-2",
    homepageImage: "/images/project-1.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description 5",
    githubUrl: "www.urlhere.com",
  },
];
