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
    title_font: "Ranchers",
    quote: "Get back on track to a happy life.",
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
    title_font: "Poppins",
    quote: "Create a connection with a little liquid courage.",
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
    title_font: "Poppins",
    quote: "Share and discover new anime",
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
      description:
        "A solid foundation is required to write stable, working code.",
      description2:
        "After becoming comfortable with creating websites with these tools alone, utilizing frameworks, such as React, becomes much a much easier and streamlined process.",
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
    {
      description:
        "Experience with front-end frameworks is a must in this modern day of web development.",
      description2:
        "With the majority of my experience in React, I am able to quickly adapt to most workplaces, with the ability to quickly learn other technology stacks as needed.",
    },
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
    {
      description:
        "Working on backend databases has also been important, even as a front-end focused developer.",
      description2:
        "With some experience in MongoDB and SQL, I am knowledgeable enough to work with APIs and understand how data is transferred to the front-end.",
    },
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
    {
      description:
        "Along with my experience with web development, I have learned UI/UX and design tools to supplement my education.",
      description2:
        "Figma is the design/prototyping software of choice. Photoshop, Illustrator, Premiere Pro, and After Effects are other tools I have experience with as well.",
    },
  ],
};

export const PROJECTINFO = {
  steady: [
    {
      title: "Ideation",
      src: "/screenshots/Steady_Welcome_Crop.png",
      aspectratio: "7/10",
      description: `Tasked with the problem to help solve a social issue we've experienced, 
      we decided to create a an application to help tackle depression.
       Similar to cognitive behavioural therapy, 
       we wanted to give the user the ability to self-diagnose problems in their life and 
       give them solutions that they can implement in their everyday life.`,
    },
    {
      title: "Technology",
      src: "/screenshots/Steady_Menu_Crop.png",
      aspectratio: "7/10",

      description: `This application was developed with Next.js, using Styled-Components as our styling engine
      and local storage as our means of storing persistent for use across several pages. As our first major project,
      we used our limited toolset to its maximum capabilities and created an application with the ability to give the user
      solutions to some of their problems in their life.`,
    },
    {
      title: "Retrospective",
      src: "/screenshots/Steady_Results_Crop.png",
      aspectratio: "7/10",
      description: `In the end, we created an application that met our expectations with many improvements
      that were possible by learning more about storing data and better practices. However, we learned plenty
      the foundation of web development that I would be able to apply to future projects.`,
    },
  ],
  onme: [
    {
      title: "Ideation",
      src: "/screenshots/OnMe_Dashboard.png",
      aspectratio: "5/10",
      description: `onmeonmeonmeonmeonme`,
    },
    {
      title: "Technology",
      src: "/screenshots/OnMe_RestaurantSelection.png",
      aspectratio: "5/10",
      description: `onmeonmeonmeonmeonme`,
    },
    {
      title: "Retrospective",
      src: "/screenshots/OnMe_OrderSummary.png",
      aspectratio: "5/10",
      description: `onmeonmeonmeonmeonme`,
    },
  ],
  scout: [
    {
      title: "Ideation",
      src: "/screenshots/scout_explore.png",
      aspectratio: "19/10",

      description: `scoutscoutscoutscout`,
    },
    {
      title: "Technology",
      src: "/screenshots/scout_filter.png",
      aspectratio: "19/10",
      description: `scoutscoutscoutscout`,
    },
    {
      title: "Retrospective",
      src: "/screenshots/scout_light.png",
      aspectratio: "19/10",
      description: `scoutscoutscoutscout`,
    },
  ],
};
