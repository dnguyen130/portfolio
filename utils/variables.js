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

export const PROJECTLIST = [
  {
    name: "Test 1",
    url: "Test",
  },
  {
    name: "Test 2",
    url: "Test",
  },
  {
    name: "Test 3",
    url: "Test",
  },
  {
    name: "Test 4",
    url: "Test",
  },
  {
    name: "Test 5",
    url: "Test",
  },
  {
    name: "Test 6",
    url: "Test",
  },
];
