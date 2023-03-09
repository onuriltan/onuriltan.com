import Assets from "@/assets";

const Config = {
  name: "V. Onur",
  surname: "Iltan",
  freelance: [
    {
      title: "Rota Optimizasyonu",
      description:
        "Website for route optimization company. Rotamat is a company where you optimize your routes if you are a large distribution company.",
      technologies: ["React.js", "Next.js", "CSS3"],
      url: "https://rotaoptimizasyonu.com/",
      image: Assets.RotaOptimizasyonu,
    },
    {
      title: "Custom Premint",
      description:
        "Custom Premint is an app for NFT Projects where people can connect via Metamask and connect their Twitter and Discord accounts to get special roles in Discord Server and checks if people are following projects official Twitter accounts.",
      technologies: [
        "React.js",
        "Node.js",
        "Ethers.js",
        "Twitter API, Discord API",
      ],
      url: "https://custompremint.onuriltan.com",
      image: Assets.CustomPremint,
    },
  ],
  corporate: [
    {
      title: "Cyberfolio",
      description:
        "Cyberfolio is an app where you can connect with Metamask and track your tokens and coins in different chains. You can also add Centralized Exchanges like Binance to your account as well.",
      technologies: ["Node.js", "React.js", "Ethers.js", "Typescript", "SSCS"],
      url: "https://app.cyberfolio.xyz",
      image: Assets.Cyberfolio,
    },
    {
      title: "Trendyol Assistant",
      description:
        "Trendyol Assistant is an app which uses Chatbot and Livechat to understand and give solutions to customers' problems about their orders and general questions. You need to be logged in to your Trendyol account to see the chat app when you click the link.",
      technologies: [
        "Node.js",
        "React.js",
        "SSCS",
        "Jest and React Testing Library",
        "Sonarqube",
      ],
      url: "https://www.trendyol.com/yardim/sorular/liveChat=True",
      image: Assets.TrendyolAsistan,
    },
    {
      title: "Nuri Onboarding",
      description:
        "Nuri Onboarding is the signup application that users see before they are using Nuri's banking and crypto products. We are collecting users information, identify them via KYC(Know Your Customer) third party service and eventually create account for them.",
      technologies: ["Node.js", "React.js", "Typescript", "Apollo GraphQL"],
      url: "https://app.nuri.com/onboarding",
      image: Assets.NuriOnboarding,
    },
  ],
};

export default Config;
