const Colors = {
  White: "#ecf9fd",
  Black: "#050610",
  SkyBlue: "#15ade4",
  Blue: "#2B388F",
  Silver: "#78797A",
  LightGray: "#C7C8CA",

  //Scrollbar
  DarkerAlice: "#CED3DB",
  LighterDarkBlue: "#051A3B",

  //Webkit States
  LightScrollBarHover: "#17B2D1",
  LightScrollBarActive: "#006A81",
  DarkScrollBarHover: "#008DC0",
  DarkScrollBarActive: "#00537B",

  //Navigation Bar
  Indigo: "#0A0C1F",
};

export const SITE_THEME = {
  light: {
    background: Colors.White,
    text: Colors.Black,
    strong: Colors.Blue,
    gray: Colors.LightGray,
    oppositeGray: Colors.Silver,
    weak: Colors.SkyBlue,

    scrollbar: Colors.DarkerAlice,
    hoverscroll: Colors.LightScrollBarHover,
    activescroll: Colors.LightScrollBarActive,
  },

  dark: {
    background: Colors.Black,
    text: Colors.White,
    strong: Colors.SkyBlue,
    gray: Colors.Silver,
    oppositeGray: Colors.LightGray,
    weak: Colors.SkyBlue,

    scrollbar: Colors.SkyBlue,
    hoverscroll: Colors.DarkScrollBarHover,
    activescroll: Colors.DarkScrollBarActive,

    navbar: Colors.Indigo,
  },
};

export const DEVICES = {
  mobile: "600px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const LINKS = [
  {
    name: "Home",
    url: "/",
    logo: "#",
  },
  {
    name: "About",
    url: "/about",
    logo: "#",
  },
  {
    name: "Contact",
    url: "#",
    logo: "#",
  },
];

export const PROJECTLIST = [
  {
    name: "Steady",
    url: "steady",
    hasLogo: true,
    logo: "steady_logo.svg",
    live_site: "https://steadyofficial.vercel.app/",
    github_client: "https://github.com/wilyyy/Steady",
    tags: ["React", "Next.js", "styled-components"],
    description: [
      "Web-based self-therapy application",
      "Answer questions based on eating, sleeping, and exercise habits.",
      "Receive results with tips to balance your lifestyle.",
      "Researched, designed, prototyped, tested, and developed by first year D3 students.",
    ],
    color_light: "#FFF4DD",
    color_dark: "#2C2C80",
    color_strong: "#F57C33",
  },
  {
    name: "OnMe",
    url: "onme",
    hasLogo: true,
    logo: "onme_logo.svg",
    github_client: "https://github.com/dnguyen130/onme",
    github_server: "https://github.com/dnguyen130/OnMe-Serverside",
    tags: ["React Native", "Expo", "styled-components", "PHP", "MySQL"],
    description: [
      "Cross-platform mobile application designed to combat loneliness in Vancouver.",
      "Send a drink with a custom message and spark a conversation!",
      "Designed and developed in 12 weeks by student designers and developers.",
      "Proof of concept presented to over 100 people, including students, faculty, and industry professionals.",
    ],
    color_light: "#FFFFFF",
    color_dark: "#2F2D2D",
    color_strong: "#FE4370",
  },
  {
    name: "Scout",
    url: "scout",
    hasLogo: false,
    logo: "scout_logo.svg",
    live_site: "https://scout-delta.vercel.app/",
    github_client: "https://github.com/wilyyy/Scout",
    github_server: "https://github.com/wilyyy/scout-serverside",
    tags: ["React", "Next.js", "styled-components", "MongoDB"],
    description: [
      "Web-based application to search and filter through an anime database",
      "Create an account, add anime to your favourites, and share them with others",
      "Application built from the ground up, including custom API and MongoDB database",
    ],
    color_light: "#FFFFFF",
    color_dark: "#1C2A36",
    color_strong: "#F4A259",
  },
];
