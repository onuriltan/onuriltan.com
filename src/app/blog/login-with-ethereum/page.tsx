import { notFound } from "next/navigation";
import { BlogEntry } from "@constants/blogs";
import AppConstants from "@constants/index";
import styles from "./index.module.scss";

type Params = Promise<{ slug: string[] }>;

export function generateStaticParams() {
  const asd = Object.keys(AppConstants.Blogs).map((slug) => ({ slug }));
  console.log(asd);
  return asd;
}

export default async function Page({ params }: { params: Params }) {
  const theparams = await params;
  console.log(theparams);

  const blog: BlogEntry | undefined = AppConstants.Blogs["login-with-ethereum"];
  if (!blog) notFound();

  return (
    <div className={styles.main}>
      <div className={styles.title_row}>
        <div />
        <h1 className={styles.title}>{blog.title}</h1>
        <p>
          {String(
            Intl.DateTimeFormat("en", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(blog.date)),
          )}
        </p>
      </div>
      <div className={`${styles.content} docs`}>
        {blog.content.map((content) => {
          const CustomTag = `${content.tag}`;
          const CustomTag2 = content.tag2;
          const parentClassName = content.parentClassName;
          const subClassName = content.subClassName;
          if (parentClassName && subClassName && CustomTag2) {
            return (
              // @ts-ignore
              <CustomTag key={JSON.stringify(content)} className={content.parentClassName}>
                {/* @ts-ignore */}
                <CustomTag2 className={content.subClassName}>{content.text}</CustomTag2>
              </CustomTag>
            );
          }
          return (
            // @ts-ignore
            <CustomTag key={JSON.stringify(content)} className={content.parentClassName ? content.parentClassName : ""}>
              {content.text}
            </CustomTag>
          );
        })}
      </div>
    </div>
  );
}
