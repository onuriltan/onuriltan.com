import { Typography } from "@app-types/index";

export type BlogEntryItem = {
  text: string;
  tag: Typography;
  tag2?: Typography;
  parentClassName?: string;
  subClassName?: string;
};

export type BlogEntry = {
  title: string;
  content: BlogEntryItem[];
  date: string;
};

const Blogs = {
  1: {
    title: "How to authenticate users without storing their name and password",
    date: "03-05-2023",
    content: [
      {
        text: `In this blog post, I'm going to explain what is authentication in a simple way and how can we do this without 
        knowing users identity. Authentication is a process of verifying the identity of a user. Let's think this in this way.
        `,
        tag: "p" as Typography,
      },
      {
        text: `Problem statement
        `,
        tag: "h2" as Typography,
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
        Now, let's think about this in the digital world. You have a Amazon account and you want to authenticate yourself to check where 
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
        Now let's think about this scenario in the digital world. Someone found your username and password by hacking the Amazon Database. You 
        do not know if your username and password is compromised or not, so you did not take any action. The hacker used your username
        and password and bought some stuff with your credit card info that is linked to your Amazon account.
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        The problem in the digital world is that <b>Amazon stores your username and password to verify login requests, but in a physical world 
        only you and the locksmith have the key</b>, so you are responsible from theft and loss. in the digital world, even you kept your 
        username and password safe, Amazon is also responsible for keeping them safe.
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        To overcome this problem in the digital world, Two Factor Authentication (2FA) was invented, but it also has some problems, I will not
        go into details about 2FA in this blog post, but I will explain a better solution.
        `,
        tag: "p" as Typography,
      },
      {
        text: `Solution
        `,
        tag: "h2" as Typography,
      },
      {
        text: `
        The solution is to create a key(consist of 12 random words) in the digital world and store it in a database(blockchain) which only you can access it with your key. 
        This key is called a private key. To create this key, you need to install a browser extension called Metamask(others work too but this is the most used one), 
        it will create a private key for you and store it in your digital wallet.
        In this case, Metamask is the Locksmith that creates a private key for you and only you know it. 
        `,
        tag: "p" as Typography,
      },
      {
        text: `
        After you have your key, you can use it to sign a message and send it to the server. The server will verify the message with your key and if it is a match and returns the data
        of your account. This way, Amazon will not store your keys but will store your last signed message and your public key. To sign a message, you need a private key which
        is only held by you, so you are responsible for your account, amazon only verifies it by asking to the blockchain.
        `,
        tag: "p" as Typography,
      },
      {
        text: `Code example
        `,
        tag: "h2" as Typography,
      },
      {
        text: `For a basic demo code, I'm going to use Ethers.js, a library for interacting with Ethereum blockchain, React.js is used for the frontend and Node.js and Express.js is used for the backend. 
        User will sign a message with Metamask browser extension and send it to the server. The server will verify the message via Ethers.js and return the data of the user. This way, the server
        do not need to store private key of the user, but it will ask Ethereum Blockhain to verify the signed message.
        `,
        tag: "p" as Typography,
      },
      {
        text: `I assume you have installed Metamask and created an Ethereum wallet and also you have a playground React project, so first we need to install Ethers.js to your playground project.`,
        tag: "p" as Typography,
      },
      {
        text: `yarn add ethers`,
        tag: "pre" as Typography,
        tag2: "code" as Typography,
        parentClassName: "language-js",
        subClassName: "language-js",
      },
      {
        text: `Secondly, we need to install  Metamask extension to our browser. Then, we need to create a wallet save the private key to a secure place.`,
        tag: "p" as Typography,
      },
      {
        text: `
import ethers from "ethers";
import AuthSercice from "./AuthService";

const App = () => {

  const signAndVerifyMessage = async () => {
    try {
      // Connect Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const evmWalletAddresses = await provider.send("eth_requestAccounts", []);

      // Sign Message
      const signer = provider.getSigner();
      const nonce = await AuthService.getNonce({ evmAddress: evmWalletAddresses[0] });
      const signature = await signer.signMessage(nonce);
      const evmAddress = await signer.getAddress();

      // Verify  Message
      const signerAddress = ethers.utils.verifyMessage(nonce, signature);
      if (signerAddress !== evmAddress) {
        throw new Error("Your message could not be verified!");
      }
      const user = await AuthService.validateSignature({
        evmAddress,
        nonce,
        signature,
      });

      // If verified, user is logged in and authentication cookies are set to the browser
      console.log("You are logged in!");
    } catch (error) {
      // If not verified, error message is going to appear in the 
      // console and authentication cookies will not set to the browser
      console.error(error.message);
    }
  };

  return(
    <div>  
      <button onClick={signAndVerifyMessage}>Click to sign in</button>  
    </div>
  );
}
export default App;`,
        tag: "pre" as Typography,
        tag2: "code" as Typography,
        parentClassName: "language-js",
        subClassName: "language-js",
      },
      {
        text: `Now, we need to create a server to verify the signed message. I assume you have a playground node.js and express project, so we need to only install Ethers.js to our project same way as you did in React project.`,
        tag: "p" as Typography,
      },
      {
        text: `
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/login/validate-signature', async (req: express.Request, res: express.Response, next) => {
  let { evmAddress } = req.body;
  const { signature } = req.body;
  const { nonce } = req.body;
  evmAddress = evmAddress.toLowerCase();
  try {
    const signerAddress = ethers.utils.verifyMessage(nonce, signature);
    if (signerAddress.toLocaleLowerCase() !== evmAddress) {
      throw new Error('Signature validation failed');
    }
    const user = await getUserByEvmAddressAndNonce({
      evmAddress,
      nonce,
    });
    if (!user) {
      await createUser({
        evmAddress,
        nonce,
      });
    }
    const { evmAddress } = user;

    // Set jwt to the user's browser cookies
    const token = jwtConfig.signJwt(user.evmAddress);
    const jwtExpiryInDays = Number(process.env.JWT_EXPIRY_IN_DAYS);
    res.cookie('token', token, {
      secure: process.env.NODE_ENV !== 'development',
      httpOnly: true,
      maxAge: jwtExpiryInDays * 24 * 60 * 60 * 1000,
    });

    const verifiedUser = await getUserByEvmAddressAndNonce({
      evmAddress,
      nonce,
    });
    return res.status(200).send('You are logged in!');
  } catch (e) {
    next(e);
  }
});`,
        tag: "pre" as Typography,
        tag2: "code" as Typography,
        parentClassName: "language-js",
        subClassName: "language-js",
      },
    ],
  },
} as { [key: number]: BlogEntry };

export default Blogs;
