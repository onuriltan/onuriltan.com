export type Blog = {
  title: string;
  content: any;
  date: Date;
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
    date: new Date("03-05-2023"),
  },
} as { [key: number]: Blog | undefined };

export default Blogs;
