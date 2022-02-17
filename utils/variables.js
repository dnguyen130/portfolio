const Colors = {
  AliceBlue: "#EDF3FD",
  DarkerAlice: "#303133",
  SkyBlue: "#38DBFF",
  Sapphire: "#00AEE8",
  DarkBlue: "#030F22",
  Orange: "#FFC757",
  DarkGray: "#6D6E70",
  LightGray: "#C7C8CA",
  OnMePink: "#FE4370",
  OnMeGold: "#A57760"
}

export const site_theme = {
  light: {
      background: Colors.AliceBlue,
      text: Colors.DarkBlue,
      strong: Colors.Sapphire,
      gray: Colors.LightGray,
      oppositeGray: Colors.DarkGray,
      weak: Colors.SkyBlue,
      onme: Colors.OnMeGold
  },

  dark: {
      background: Colors.DarkBlue,
      text: Colors.AliceBlue,
      strong: Colors.SkyBlue,
      gray: Colors.DarkGray,
      oppositeGray: Colors.LightGray,
      weak: Colors.Sapphire,
      onme: Colors.OnMePink
  }
}

//Logo Gradient
//Purple: #702c8c 0%
//Pink: #e8248c 40%
//Red: #e82424 60% 
//Orange: #ffbc2c 100%