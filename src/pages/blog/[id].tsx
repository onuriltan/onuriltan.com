import { BlogEntry } from "@constants/blogs";
import Constants from "@constants/index";
import { useRouter } from "next/router";
import styles from "./[id].module.css";

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
  console.log(blog);
  //   console.log(props);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.title_row}>
          <p className={styles.hidden}>
            {String(
              Intl.DateTimeFormat("en", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(blog.date))
            )}
          </p>
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
