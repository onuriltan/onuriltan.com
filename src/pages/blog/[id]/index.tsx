import Constants from "@constants/index";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id || typeof id !== "string") {
    router.push("/not-found");
    return;
  }
  const blog = Constants.Blogs[Number(id)];
  if (!blog) {
    router.push("/not-found");
    return;
  }

  return (
    <>
      <main className={styles.main}>
        <Link
          href={`blog/${blog.id}`}
          className={styles.row}
          key={JSON.stringify(blog)}
        >
          <div className={styles.title_row}>
            <h2 className={styles.title}>{blog.title}</h2>
            <p>
              {String(
                Intl.DateTimeFormat("en", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(blog.date)
              )}
            </p>
          </div>
          <p>{blog.description}</p>
        </Link>
      </main>
    </>
  );
};

export default Blog;
