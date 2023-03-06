import { Blog } from "@constants/blogs";
import Constants from "@constants/index";
import { useRouter } from "next/router";
import styles from "./index.module.css";

export async function getServerSideProps({ params }: { params: any }) {
  const blog = Constants.Blogs[Number(params?.id)];
  return { props: { blog } };
}

type Props = {
  blog: Blog;
};
const Blog = ({ blog }: Props) => {
  const router = useRouter();
  if (!blog) {
    router.push("/404");
    return;
  }
  return (
    <>
      <main className={styles.main}>
        <div className={styles.title_row}>
          <h2 className={styles.title}>{blog.title}</h2>
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
      </main>
    </>
  );
};

export default Blog;
