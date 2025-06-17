import Constants from "@constants/index";
import Link from "next/link";
import styles from "./index.module.css";

const Blog = () => {
  return (
    <>
      <div className={styles.main}>
        {Constants.BlogList.map((blog) => {
          return (
            <Link href={`blog/${blog.id}`} className={styles.row} key={JSON.stringify(blog)}>
              <div className={styles.title_row}>
                <h2 className={styles.title}>{blog.title}</h2>
                <p>
                  {String(
                    Intl.DateTimeFormat("en", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    }).format(blog.date),
                  )}
                </p>
              </div>
              <p>{blog.description}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
