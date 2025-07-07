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
    homepageImage: "/images/project-1-preview.png",
    tags: ["Work", "APIs", "Preact", "Javascript"],
    shortDescription:
      "Mobile web messenger service integration to enable CRM teams to send real time logged in messages to Sky Gaming customers",
    githubUrl: "",
  },
  {
    id: "project-2",
    name: "Little Free Libraries Community Project",
    url: "/projects/project-2",
    homepageImage: "/images/project-2-preview.png",
    tags: [
      "Personal",
      "MongoDB",
      "Google API",
      "MapBox",
      "Next.js",
      "Cloudinary",
    ],
    shortDescription:
      "Submit new locations for Little Libraries in Leeds and leave comments if you've enjoyed books there",
    githubUrl: "https://github.com/Sarahmhackett/little-free-libraries",
  },
  {
    id: "project-3",
    name: "Figma Design Systems and Storybook",
    url: "../../public/images/project-3",
    homepageImage: "/images/project-3-preview.png",
    tags: ["Work", "Figma", "Design Systems", "Storybook", "SCSS"],
    shortDescription:
      "Full Design System tokenisation of Sky Gaming products and Storybook UI component integration",
    githubUrl: "",
  },
];
