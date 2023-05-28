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
