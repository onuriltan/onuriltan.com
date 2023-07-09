import Assets from "@/assets";
import { ConfigType, TechnologyType, WorkType } from "@app-types/index";

const Config: ConfigType = {
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
      images: [
        {
          image:
            "https://drive.google.com/uc?id=1w2gSD4V8c_bWdLOsmm2vdDyeO4Drp9nK",
          url: "https://cryptio.co",
        },
        {
          image:
            "https://drive.google.com/uc?id=1eeKWFgeDWR2hqUUfpaoEFqdGbREIQ-uS",
          url: "https://cryptio.co/colossal",
        },
      ],
      type: WorkType.FREELANCE,
    },
    {
      title: "Rotamat",
      description:
        "Rotamat is a company where you optimize your routes if you are a large distribution company.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NEXTJS,
        TechnologyType.SCSS,
        TechnologyType.CSSMODULES,
        TechnologyType.LEAFLETMAPAPI,
      ],
      url: "https://rotaoptimizasyonu.com/",
      images: [
        {
          image: Assets.Images.RotaOptimizasyonu,
          url: "https://rotaoptimizasyonu.com/",
        },
        {
          image: Assets.Images.RotaOptimizasyonuDashboard,
          url: "https://web.rotaoptimizasyonu.com/kontrol-paneli",
        },
        {
          image: Assets.Images.RotaOptimizasyonuSimulation,
          url: "https://simulasyon.rotaoptimizasyonu.com",
        },
      ],
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
      url: "https://tokens.eternity.io",
      images: [
        {
          image: Assets.Images.VerificationGate,
          url: "https://tokens.eternity.io",
        },
      ],
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
      images: [
        {
          image: Assets.Images.NuriOnboarding,
          url: "https://app.nuri.com/onboarding",
        },
      ],
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
      images: [
        {
          image: Assets.Images.TrendyolAsistan,
          url: "https://www.trendyol.com/yardim/sorular/liveChat=True",
        },
      ],
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
      images: [
        { image: Assets.Images.Cyberfolio, url: "https://app.cyberfolio.xyz" },
      ],
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
      images: [
        {
          image: Assets.Images.CustomPremint,
          url: "https://custompremint.onuriltan.com",
        },
      ],
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
        TechnologyType.MONGODB,
      ],
      url: "https://notemanager.onuriltan.com",
      images: [
        {
          image: Assets.Images.Notemanager,
          url: "https://notemanager.onuriltan.com",
        },
        {
          image: Assets.Images.NotemanagerDashboard,
          url: "https://notemanager.onuriltan.com/dashboard",
        },
      ],
      type: WorkType.HOBBY,
    },
  ],
};

export default Config;
