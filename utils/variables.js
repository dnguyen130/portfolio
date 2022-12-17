import {
  SiGithub,
  SiLinkedin,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiSass,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAdobecreativecloud,
  SiFigma,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Colors = {
  White: "#ecf9fd",
  Black: "#050610",
  SkyBlue: "#15ade4",
  Blue: "#2B388F",
  Silver: "#78797A",
  LightGray: "#C7C8CA",
  LighterNav: "#12142b",

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

  //Logo
  LogoLight: "#17abe2",
  LogoDark: "#293e91",

  //CardHover
  LightSky: "#9dd0e3",
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
    drawerhover: Colors.LighterNav,

    logolight: Colors.LogoLight,
    logodark: Colors.LogoDark,

    cardhover: Colors.LightSky,
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
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
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
    color_hover: "#DB6318",
    button_names: ["Learn More", "Live Site", "Client Github", "Server Github"],
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
    color_hover: "#F22756",
    button_names: ["Learn More", "Live Site", "Client Github", "Server Github"],
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
    color_hover: "#DB8539",
  },
];

export const SOCIALS = [
  {
    name: "Github",
    url: "https://github.com/dnguyen130",
    logo: SiGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dnguyen130/",
    logo: SiLinkedin,
  },
  {
    name: "Email",
    url: "mailto:dt.ngu95@gmail.com",
    logo: HiOutlineMail,
  },
];

export const ToolkitIcons = {
  Foundation: [
    [
      {
        logo: SiHtml5,
        color: "#f25320",
        title: "HTML",
      },
      {
        logo: SiCss3,
        color: "#2299f8",
        title: "CSS",
      },
      {
        logo: SiJavascript,
        color: "#f0db4f",
        title: "JavaScript",
      },
    ],
    {
      description: "hello",
    },
  ],
  Frontend: [
    [
      {
        logo: SiReact,
        color: "#5ccfee",
        title: "React",
      },
      {
        src: "/logos/styled.svg",
        title: "Styled-Components",
      },
      {
        logo: SiSass,
        color: "#c36192",
        title: "Sass",
      },
      {
        logo: SiNodedotjs,
        color: "#4f9640",
        title: "Node.js",
      },
      {
        logo: SiNextdotjs,
        color: "#000",
        title: "Next.js",
      },
    ],
    { description: "Hello" },
  ],
  Backend: [
    [
      {
        logo: SiExpress,
        color: "#46545e",
        title: "Express.js",
      },
      {
        src: "/logos/mongodb.svg",
        title: "MongoDB",
      },
      {
        src: "/logos/firebase.svg",
        title: "Firebase",
      },
    ],
    { description: "hello" },
  ],
  Design: [
    [
      {
        src: "/logos/acc.svg",
        title: "Adobe Creative Cloud",
      },
      {
        src: "/logos/figma.svg",
        title: "Figma",
      },
    ],
    { description: "hello" },
  ],
};
