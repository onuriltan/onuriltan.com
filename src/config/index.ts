import Assets from "@/assets";
import { TechnologyType, WorkType } from "@app-types/index";

const Config = {
  name: "V. Onur",
  surname: "Iltan",
  projects: [
    {
      title: "Cryptio Website",
      description:
        "Maintaining and adding new features to the website of Cryptio.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NEXTJS,
        TechnologyType.TYPESCRIPT,
        TechnologyType.CSSMODULES,
      ],
      url: "https://cryptio.co",
      image: Assets.CryptioColossal,
      type: WorkType.FREELANCE,
    },
    {
      title: "Rota Optimizasyonu",
      description:
        "Website for route optimization company. Rotamat is a company where you optimize your routes if you are a large distribution company.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NEXTJS,
        TechnologyType.CSSMODULES,
      ],
      url: "https://rotaoptimizasyonu.com/",
      image: Assets.RotaOptimizasyonu,
      type: WorkType.FREELANCE,
    },
    {
      title: "Verification Gate",
      description:
        "Verification Gate is an app which people can connect via Metamask and connect their Twitter and Discord accounts to get free tokens to play in play.eternity.io. Also app header image and icon and the twitter, discord and email verification are customizable by the admin app.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NODEJS,
        TechnologyType.TYPESCRIPT,
        TechnologyType.ETHERSJS,
        TechnologyType.TWITTERAPI,
        TechnologyType.DISCORDAPI,
        TechnologyType.POSTGRESQL,
      ],
      url: "https://stage-gate.eternity.io",
      image: Assets.VerificationGate,
      type: WorkType.FREELANCE,
    },
    {
      title: "Nuri Onboarding",
      description:
        "Nuri Onboarding is the signup application that users see before they are using Nuri's banking and crypto products. We are collecting users information, identify them via KYC(Know Your Customer) third party service and eventually create account for them.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NODEJS,
        TechnologyType.TYPESCRIPT,
        TechnologyType.APOLLOGRAPHQL,
        TechnologyType.MONGODB,
      ],
      url: "https://app.nuri.com/onboarding",
      image: Assets.NuriOnboarding,
      type: WorkType.CORPORATE,
    },
    {
      title: "Trendyol Assistant",
      description:
        "Trendyol Assistant is an app which uses Chatbot and Livechat to understand and give solutions to customers' problems about their orders and general questions. You need to be logged in to your Trendyol account to see the chat app when you click the link.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NODEJS,
        TechnologyType.SCSS,
        TechnologyType.JEST,
        TechnologyType.REACTTESTINGLIBRARY,
        TechnologyType.SONARQUBE,
      ],
      url: "https://www.trendyol.com/yardim/sorular/liveChat=True",
      image: Assets.TrendyolAsistan,
      type: WorkType.CORPORATE,
    },
    {
      title: "Cyberfolio",
      description:
        "Cyberfolio is an app where you can connect with Metamask and track your tokens and coins in different chains. You can also add Centralized Exchanges like Binance to your account as well.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NODEJS,
        TechnologyType.TYPESCRIPT,
        TechnologyType.ETHERSJS,
        TechnologyType.SCSS,
        TechnologyType.MONGODB,
      ],
      url: "https://app.cyberfolio.xyz",
      image: Assets.Cyberfolio,
      type: WorkType.HOBBY,
    },
    {
      title: "Custom Premint",
      description:
        "Custom Premint is an app for NFT Projects which people can connect via Metamask and connect their Twitter and Discord accounts to get special roles in Discord Server and checks if people are following projects official Twitter accounts.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NODEJS,
        TechnologyType.ETHERSJS,
        TechnologyType.TWITTERAPI,
        TechnologyType.DISCORDAPI,
        TechnologyType.MONGODB,
      ],
      url: "https://custompremint.onuriltan.com",
      image: Assets.CustomPremint,
      type: WorkType.HOBBY,
    },
    {
      title: "Notemanager",
      description:
        "Notemanager is an app where you can login via Google or Facebook account and start taking notes.  In this app I practised OAuth 2.0 flows.",
      technologies: [
        TechnologyType.VUEJS,
        TechnologyType.NODEJS,
        TechnologyType.TYPESCRIPT,
        TechnologyType.GOOGLEAPI,
        TechnologyType.FACEBOOKAPI,
      ],
      url: "https://notemanager.onuriltan.com",
      image: Assets.NoteManager,
      type: WorkType.HOBBY,
    },
  ],
};

export default Config;
