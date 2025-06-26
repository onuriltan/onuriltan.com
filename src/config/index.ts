import Images from "@/assets/images";
import { ConfigType, TechnologyType, WorkType } from "@app-types/index";

const theme = {
  dark: {
    backgroundColor: "36, 52, 71",
    foregroundColor: "255, 255, 255",
    foregroundSecondaryColor: "238, 206, 26",
    foregroundTertiaryColor: "245, 222, 179",
  },
  light: {
    backgroundColor: "231, 240, 245",
    foregroundColor: "0, 0, 0",
    foregroundSecondaryColor: "128, 0, 128",
    foregroundTertiaryColor: "245, 222, 179",
  },
};

const AppConfig: ConfigType = {
  name: "V. Onur",
  surname: "Iltan",
  projects: [
    {
      title: "Cryptio Website",
      description: "Maintaining and adding new features to the website of Cryptio.",
      technologies: [TechnologyType.REACT, TechnologyType.NEXTJS, TechnologyType.TYPESCRIPT, TechnologyType.CSSMODULES],
      url: "https://cryptio.co",
      images: [
        {
          image: Images.Cryptio,
          url: "https://cryptio.co",
        },
        {
          image: Images.CryptioComparisonTable,
          url: "https://cryptio.co/use-cases/wallet",
        },
        {
          image: Images.CryptiofinanceForum,
          url: "https://cryptofinanceforum.nyc",
        },
        {
          image: Images.CryptioColossal,
          url: "https://cryptio.co/colossal",
        },
      ],
      type: WorkType.FREELANCE,
    },
    {
      title: "Trendyol Asistan",
      description:
        "Trendyol Asistan is an app which uses Chatbot and Livechat to understand and give solutions to customers' problems about their orders and general questions. You need to be logged in to your Trendyol account to see the chat app when you click the link.",
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
          image: Images.TrendyolAsistan,
          url: "https://www.trendyol.com/yardim/sorular/liveChat=True",
        },
      ],
      type: WorkType.CORPORATE,
    },
    {
      title: "Bitwala Onboarding",
      description:
        "Bitwala Onboarding is the signup application that users see before they are using Bitwala's banking and crypto products. We are collecting users information, identify them via KYC(Know Your Customer) third party service and eventually create account for them.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NODEJS,
        TechnologyType.TYPESCRIPT,
        TechnologyType.APOLLOGRAPHQL,
        TechnologyType.MONGODB,
      ],
      url: "https://app.bitwala.com/onboarding",
      images: [
        {
          image: Images.NuriOnboarding,
          url: "https://app.bitwala.com/onboarding",
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
      url: "https://cyberfolio.onuriltan.com",
      images: [
        {
          image: Images.Cyberfolio,
          url: "https://cyberfolio.onuriltan.com",
        },
      ],
      githubUrl: "https://github.com/cyberfolio",
      type: WorkType.HOBBY,
    },
    {
      title: "PlanetQuest Marketplace",
      description:
        "NFT Marketplace project on IMX blockchain for PlanetQuest game's NFTs to engage community to the game itself.",
      technologies: [
        TechnologyType.IMXSDK,
        TechnologyType.TYPESCRIPT,
        TechnologyType.REACT,
        TechnologyType.TAILWINDCSS,
        TechnologyType.NODEJS,
        TechnologyType.EXPRESSJS,
        TechnologyType.ETHERSJS,
        TechnologyType.POSTGRESQL,
      ],
      url: "https://marketplace.planetquest.io",
      images: [
        {
          image: Images.Marketplace,
          url: "https://marketplace.planetquest.io",
        },
        {
          image: Images.MarketplacePlanets,
          url: "https://marketplace.planetquest.io/planets",
        },
        {
          image: Images.MarketplaceDetails,
          url: "https://marketplace.planetquest.io/planets/318243",
        },
      ],
      type: WorkType.CORPORATE,
    },
    {
      title: "Rotamat",
      description: "Rotamat is a company where you optimize your routes if you are a large distribution company.",
      technologies: [
        TechnologyType.REACT,
        TechnologyType.NEXTJS,
        TechnologyType.SCSS,
        TechnologyType.CSSMODULES,
        TechnologyType.LEAFLETMAPAPI,
      ],
      url: "https://web.rotaoptimizasyonu.com/",
      images: [
        {
          image: Images.Rotamat,
          url: "https://rotaoptimizasyonu.com/",
        },
        {
          image: Images.RotamatDashboard,
          url: "https://web.rotaoptimizasyonu.com/kontrol-paneli",
        },
        {
          image: Images.RotamatSimulation,
          url: "https://simulasyon.rotaoptimizasyonu.com",
        },
      ],
      type: WorkType.FREELANCE,
    },

    // {
    //   title: "Custom Premint",
    //   description:
    //     "Custom Premint is an app for NFT Projects which people can connect via Metamask and connect their Twitter and Discord accounts to get special roles in Discord Server and checks if people are following projects official Twitter accounts.",
    //   technologies: [
    //     TechnologyType.REACT,
    //     TechnologyType.NODEJS,
    //     TechnologyType.ETHERSJS,
    //     TechnologyType.TWITTERAPI,
    //     TechnologyType.DISCORDAPI,
    //     TechnologyType.MONGODB,
    //   ],
    //   url: "https://custompremint.onuriltan.com",
    //   images: [
    //     {
    //       image:
    //         "https://drive.google.com/uc?id=1Lgt4OZkgXaMjc3yTFq9pSbbaWv6l99sA",
    //       url: "https://custompremint.onuriltan.com",
    //     },
    //   ],
    //   type: WorkType.HOBBY,
    // },
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
          image: Images.Notemanager,
          url: "https://notemanager.onuriltan.com",
        },
        {
          image: Images.NotemanagerDashboard,
          url: "https://notemanager.onuriltan.com/dashboard",
        },
      ],
      githubFrontendUrl: "https://github.com/onuriltan/note-manager-web",
      githubBackendUrl: "https://github.com/onuriltan/notemanager-server",
      type: WorkType.HOBBY,
    },
  ],
  theme,
};

export default AppConfig;
