import { Typography } from "@app-types/index";

export type BlogEntryItem = {
  text: string;
  tag: Typography;
};

export type BlogEntry = {
  title: string;
  content: BlogEntryItem[];
  date: string;
};

const Blogs = {
  1: {
    title: "How to authenticate users with Ethers.js",
    content: [
      {
        text: `In this blog post, I'm going to explain what is authentication in a simple way and how can we do this without 
        knowing users identity. Authentication is a process of verifying the identity of a user. Let's think this in this way.
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        You have a home and you are using your keys to unlock the door to get inside. If I want to get inside your home, I need 
        your keys to unlock the door. This is authentication. You are authenticating yourself to get inside your home. 
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        Now, let's think about this in a digital world. You have a Amazon account and you want to authenticate yourself to check where 
        is your shipment etc. You need to enter your username password this time instead of physical keys to authenticate yourself. 
        This process is not physical but logical, when you open an account with an username and a password, servers are storing your username 
        and password inside a databas. When you enter them from a web browser or mobile app, server checks if your username and password is a match,
        then it lets you read the data inside your account.
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        If you understood the process so far, lets think about privacy. Let's say you dropped your keys somewhere in the street and 
        someone found them. If you did not put a label to your keys with your name and apartment number, the person who found your key
        will nearly impossible to know your apartment and door number, so they will not be able to get inside your home. You can change your 
        key by calling the Locksmith and the old key is know useless. This is how you can protect your home from strangers.
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        Now let's think about this scenario in a digital world. Someone found your username and password by hacking the Amazon Database. You 
        do not know if your username and password is compromised or not, so you did not take any action. The hacker used your username
        and password and bought some stuff with your credit card info that is linked to your Amazon account.
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        The problem in a digital world is that Amazon stores your username and password to verify login requests, but in a physical world 
        only you and the locksmith have the key, so you are responsible from theft and loss, but in a digital world, even you kept your 
        username and password safe, Amazon is also responsible for keeping them safe.
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        To overcome this problem in a digital world, Two Factor Authentication (2FA) was invented, but it also has some problems, I will not
        go into details about 2FA in this blog post, but I will explain a better solution.
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        The solution is to create a key(consist of 12 random words) in a digital world and store it in a database(blockchain) which only you can access it with your key. 
        This key is called a private key. To create this key, you need to install a software called Metamask, it will create a key for you and store it in your digital wallet.
        In this case, Metamask is the Locksmith that creates a key for you and you only know it. After you have your 
        key, you can use it to sign a message and send it to the server. The server will verify the message with your key and if it is a match and returns the data
        of your account. This way, Amazon will not store your keys but will store your last signed message and your public key. To sign a message, you need a private key which
        is only held by you, so you are responsible for your account, amazon only verifies it by asking to the blockchain.
        `,
        tag: "p" as Typography,
      },
    ],
    date: "03-05-2023",
  },
} as { [key: number]: BlogEntry };

export default Blogs;
