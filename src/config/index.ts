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
  ],
  corporate: [
    {
      title: "Trendyol Assistant",
      description:
        "Trendyol Assistant is an app which uses Chatbot and Livechat to understand and give solutions to customers' problems about their orders and general questions. You need to be logged in to your Trendyol account to see the chat app when you click the link.",
      technologies: [
        "Node.js",
        "React",
        "React Hooks",
        "SSCS",
        "Jest and React Testing Library",
        "Sonarqube",
      ],
      url: "https://www.trendyol.com/yardim/sorular/liveChat=True",
      image: Assets.TrendyolAsistan,
    },
  ],
};

export default Config;
