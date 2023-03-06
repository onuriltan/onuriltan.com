export type BlogEntry = {
  title: string;
  content: any;
  date: string;
};

const Blogs = {
  1: {
    title: "How to authenticate users with Ethers.js",
    content: {
      title: {
        text: "How to authenticate users with Ethers.js",
        type: "h1",
      },
      description: "",
    },
    date: "03-05-2023",
  },
} as { [key: number]: BlogEntry | undefined };

export default Blogs;
