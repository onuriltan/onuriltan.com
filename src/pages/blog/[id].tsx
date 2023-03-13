import { BlogEntry } from "@constants/blogs";
import Constants from "@constants/index";
import styles from "./[id].module.scss";

export async function getStaticProps({ params }: { params: any }) {
  const blog = Constants.Blogs[Number(params?.id)];
  return { props: { blog } };
}

export async function getStaticPaths() {
  const paths = Object.keys(Constants.Blogs).map((id) => ({
    params: { id: String(id) },
  }));
  return { paths, fallback: false };
}

type Props = {
  blog: BlogEntry;
};

const Blog = ({ blog }: Props) => {
  return (
    <>
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
              }).format(new Date(blog.date))
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
                <CustomTag
                  key={JSON.stringify(content)}
                  className={content.parentClassName}
                >
                  {/* @ts-ignore */}
                  <CustomTag2 className={content.subClassName}>
                    {content.text}
                  </CustomTag2>
                </CustomTag>
              );
            }
            return (
              // @ts-ignore
              <CustomTag
                key={JSON.stringify(content)}
                className={
                  content.parentClassName ? content.parentClassName : ""
                }
              >
                {content.text}
              </CustomTag>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
