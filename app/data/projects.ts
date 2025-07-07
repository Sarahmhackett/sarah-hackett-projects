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
    id: "project-4",
    name: "Google Analytics on Sky Poker",
    url: "/projects/project-4",
    homepageImage: "/images/project-4-preview.png",
    tags: ["Work", "Google Analytics", "Javascript"],
    shortDescription:
      "Ensuring data analytics teams have access to correct Sky Poker tournaments event data, leveraging Omnibug",
    githubUrl: "",
  },
  {
    id: "project-5",
    name: "From Enzyme to Preact Testing Library",
    url: "/projects/project-2",
    homepageImage: "/images/project-5-preview.png",
    tags: ["Work", "Javascript", "Unit Testing"],
    shortDescription:
      "Refactoring and modernising existing unit tests from Enzyme to Preact/React Testing Library",
    githubUrl: "",
  },
  {
    id: "project-6",
    name: "Placeholder",
    url: "../../public/images/project-3.png",
    homepageImage: "/images/project-3.png",
    tags: ["API"],
    shortDescription: "Placeholder",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-7",
    name: "Project Name",
    url: "/projects/project-2",
    homepageImage: "/images/project-3.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-8",
    name: "Project Name 5",
    url: "/projects/project-2",
    homepageImage: "/images/project-1.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description 5",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-9",
    name: "Project Name 6",
    url: "/projects/project-2",
    homepageImage: "/images/project-1.png",
    tags: ["React", "Tailwind"],
    shortDescription: "Project short description 5",
    githubUrl: "www.urlhere.com",
  },
];
