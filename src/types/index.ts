import { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

export type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type HeadingType = HTMLAttributes<HTMLHeadingElement>;
export type ParagraphType = HTMLAttributes<HTMLParagraphElement>;
export type SpanType = HTMLAttributes<HTMLSpanElement>;

export type Typography = (HeadingType | ParagraphType | SpanType) & {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline"
    | "button";
};

export enum WorkType {
  CORPORATE = "Corporate",
  FREELANCE = "Freelance",
  HOBBY = "Hobby",
  ALL = "All",
}
export enum TechnologyType {
  REACT = "React.js",
  VUEJS = "Vue.js",
  NEXTJS = "Next.js",
  TYPESCRIPT = "Typescript",
  ETHERSJS = "Ethers.js",
  IMXSDK = "ImmutableX SDK",
  EXPRESSJS = "Express.js",
  TWITTERAPI = "Twitter API",
  DISCORDAPI = "Discord API",
  GOOGLEAPI = "Google API",
  FACEBOOKAPI = "Facebook API",
  LEAFLETMAPAPI = "Leaflet Map API",
  CSSMODULES = "CSS Modules",
  APOLLOGRAPHQL = "Apollo GraphQL",
  SCSS = "SCSS",
  TAILWINDCSS = "Tailwind CSS",
  JEST = "Jest",
  REACTTESTINGLIBRARY = "React Testing Library",
  SONARQUBE = "SonarQube",
  NODEJS = "Node.js",
  MONGODB = "MongoDB",
  POSTGRESQL = "Postgre SQL",
  ALL = "All",
}

type ProjectImage = {
  image: StaticImageData | string;
  url: string;
};
type Project = {
  title: string;
  description: string;
  technologies: TechnologyType[];
  url: string;
  images: ProjectImage[];
  type: WorkType;
  githubUrl?: string;
};
export type ConfigType = {
  name: string;
  surname: string;
  projects: Project[];
};
