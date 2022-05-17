const Colors = {
  AliceBlue: "#EDF3FD",
  DarkBlue: "#030F22",
  SkyBlue: "#38DBFF",
  Sapphire: "#00AEE8",
  DarkGray: "#6D6E70",
  LightGray: "#C7C8CA",

  //Scrollbar
  DarkerAlice: "#CED3DB",
  LighterDarkBlue: "#051A3B",

  //Webkit States
  LightScrollBarHover: "#17B2D1",
  LightScrollBarActive: "#006A81",
  DarkScrollBarHover: "#008DC0",
  DarkScrollBarActive: "#00537B",

  //Project Colours
  OnMePink: "#FE4370",
  OnMeGold: "#A57760",
  SteadyOrange: "#F57C33",
  SteadyBlue: "#2C2C80",

  //Navigation Bar
  NavBar: "#04152F",
};

export const SITE_THEME = {
  light: {
    background: Colors.AliceBlue,
    text: Colors.DarkBlue,
    strong: Colors.Sapphire,
    gray: Colors.LightGray,
    oppositeGray: Colors.DarkGray,
    weak: Colors.SkyBlue,
    onme: Colors.OnMeGold,
    steady: Colors.SteadyBlue,

    scrollbar: Colors.DarkerAlice,
    hoverscroll: Colors.LightScrollBarHover,
    activescroll: Colors.LightScrollBarActive,
  },

  dark: {
    background: Colors.DarkBlue,
    text: Colors.AliceBlue,
    strong: Colors.SkyBlue,
    gray: Colors.DarkGray,
    oppositeGray: Colors.LightGray,
    weak: Colors.Sapphire,
    onme: Colors.OnMePink,
    steady: Colors.SteadyOrange,

    scrollbar: Colors.LighterDarkBlue,
    hoverscroll: Colors.DarkScrollBarHover,
    activescroll: Colors.DarkScrollBarActive,

    navbar: Colors.NavBar,
  },
};

export const DEVICES = {
  mobileS: "350px",
  mobile: "600px",
  tablet: "768px",
  desktop: "1200px",
};

export const LINKS = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "About",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
];
