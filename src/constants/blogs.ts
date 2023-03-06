type Blog = {
  id: number;
  title: string;
  description: string;
  date: Date;
};

const Blogs = {
  1: {
    id: 1,
    title: "How to authenticate users with Ethers.js",
    description:
      "In this aricticle, I explained how you can authenticate users without knowing their identity or getting their personal data.",
    date: new Date("03-05-2023"),
  },
} as { [key: number]: Blog | undefined };

export default Blogs;
