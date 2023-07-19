import { ConfigType, TechnologyType, WorkType } from "@app-types/index";

const Config: ConfigType = {
  name: "V. Onur",
  surname: "Iltan",
  projects: [
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
          image:
            "https://drive.google.com/uc?id=1EO-FSMpZEDCJhrsW3fZohGRVkYSO_pfg",
          url: "https://marketplace.planetquest.io",
        },
        {
          image:
            "https://drive.google.com/uc?id=1imfDa_Z9F9jvNogDZJ2qBNm-NOnjsd-X",
          url: "https://marketplace.planetquest.io/planets",
        },
        {
          image:
            "https://drive.google.com/uc?id=185r1L1fcctP_mdRkbjSYTotzSeU0ZxcX",
          url: "https://marketplace.planetquest.io/planets/318243",
        },
      ],
      type: WorkType.CORPORATE,
    },
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
            "https://drive.google.com/uc?id=1s2H_2SVyKGNt8-SEfv-K763wZtD3luIq",
          url: "https://cryptio.co",
        },
        {
          image:
            "https://drive.google.com/uc?id=1VA370mkJG2yvEMjC89RjaDSojgRJg7x0",
          url: "https://cryptio.co/use-cases/wallet",
        },
        {
          image:
            "https://drive.google.com/uc?id=1IOEkXscwHKwXh6qtsgJzYQVhIP56AHFr",
          url: "https://cryptofinanceforum.nyc",
        },
        {
          image:
            "https://drive.google.com/uc?id=1xGPEu5uGPcTcGTRuwiHqNWeY2TkG4Axa",
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
          image:
            "https://drive.google.com/uc?id=1SzhUpJaQ5h7uFwgHBnZ9Lue5i_f9rfhb",
          url: "https://rotaoptimizasyonu.com/",
        },
        {
          image:
            "https://drive.google.com/uc?id=12wdWPZAwEfQ546WmBOWoVD1y-l451pnH",
          url: "https://web.rotaoptimizasyonu.com/kontrol-paneli",
        },
        {
          image:
            "https://drive.google.com/uc?id=1X7LXoYQncuohtuiaT0nrW2z3kh2hpEhj",
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
          image:
            "https://drive.google.com/uc?id=15aQjKszFCQ8ycgooUGgeT-fEy3Q-g9hi",
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
          image:
            "https://drive.google.com/uc?id=19oi8uLf91UQkD5SGbUnqdUiO2H6uxnPW",
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
          image:
            "https://drive.google.com/uc?id=1ZCvJigsZ6BJWktkpDgSR1l5uQVAd-4RK",
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
        {
          image:
            "https://drive.google.com/uc?id=1gjbFuGuPN2GQpAVhtXiCj-jmRXSa1vHj",
          url: "https://app.cyberfolio.xyz",
        },
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
          image:
            "https://drive.google.com/uc?id=1Lgt4OZkgXaMjc3yTFq9pSbbaWv6l99sA",
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
          image:
            "https://drive.google.com/uc?id=1-rWIbyEMcPHFaa2KXM06SnTjtb84ag3g",
          url: "https://notemanager.onuriltan.com",
        },
        {
          image:
            "https://drive.google.com/uc?id=1yA2gak_7svafqD-MFJPoZa6lc9Ftc1FJ",
          url: "https://notemanager.onuriltan.com/dashboard",
        },
      ],
      type: WorkType.HOBBY,
    },
  ],
};

export default Config;
