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
    name: "Web Messenger Integration",
    url: "/projects/project-1",
    homepageImage: "/images/project-1.png",
    tags: ["Work", "APIs", "Preact", "Javascript"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-2",
    name: "Modern React & Preact Testing Library",
    url: "/projects/project-2",
    homepageImage: "/images/project-1.png",
    tags: ["Work", "Testing Library", "Unit Tests"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    githubUrl: "www.urlhere.com",
  },
  {
    id: "project-3",
    name: "Hiking with Homer",
    url: "../../public/images/project-3.png",
    homepageImage: "/images/project-3.png",
    tags: ["Personal", "API", "Next JS", "App Router"],
    shortDescription:
      "Working with the Strava API to build a personal website to document all my hikes with my golden retreiver, Homer",
    githubUrl: "www.urlhere.com",
  },
];
