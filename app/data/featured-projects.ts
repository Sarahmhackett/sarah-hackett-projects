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
    name: "FEATURED ONE",
    url: "/projects/project-1",
    homepageImage: "/images/project-1.png",
    tags: ["Next JS", "API"],
    shortDescription: "An awesome project using Next.js and an API.",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-2",
    name: "FEATURED TWO",
    url: "/projects/project-2",
    homepageImage: "/images/project-2.png",
    tags: ["React", "Tailwind"],
    shortDescription: "A project made with React and Tailwind",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-3",
    name: "FEATURED 3",
    url: "../../public/images/project-3.png",
    homepageImage: "/images/project-3.png",
    tags: ["API"],
    shortDescription: "An experimentation with APIs",
    githubUrl: "www.urlhere.com",
  },
];
