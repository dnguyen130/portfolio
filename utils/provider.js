import { useContext, createContext, useState } from "react";
import { SITE_THEME } from "./variables";

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
  theme: "dark",
  setTheme: () => {},

  activeCard: false,
  setActiveCard: () => {},

  activeProject: {},
  setActiveProject: () => {},
};

const MyContext = createContext(initialStates);

export default function AppProvider({ children }) {
  //children all the pages/components insider this provider
  const [theme, setTheme] = useState(initialStates.theme);
  const [activeCard, setActiveCard] = useState(initialStates.activeCard);
  const [activeProject, setActiveProject] = useState(
    initialStates.activeProject
  );

  //put in the variables you want to share
  return (
    <MyContext.Provider
      value={{
        theme,
        setTheme,
        activeCard,
        setActiveCard,
        activeProject,
        setActiveProject,
      }}
    >
      <style jsx global>
        {`
          html {
            scrollbar-color: ${SITE_THEME[theme].weak}
              ${SITE_THEME[theme].scrollbar}; /* Gecko Browsers */
            overflow: ${activeCard ? "hidden" : "auto"};
          }

          html::-webkit-scrollbar-thumb {
            background: ${SITE_THEME[theme].weak};
          }

          html::-webkit-scrollbar-thumb:hover {
            background: ${SITE_THEME[theme].hoverscroll};
          }

          html::-webkit-scrollbar-thumb:active {
            background: ${SITE_THEME[theme].activescroll};
          }

          html::-webkit-scrollbar {
            background: ${SITE_THEME[theme].scrollbar};
          }

          html::-webkit-scrollbar-button {
            background-color: ${SITE_THEME[theme].scrolbar};
            background-size: 10px 10px;
            background-position: center center;
            background-repeat: no-repeat;
            height: 16px;
            width: 1em;
            -webkit-box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
          }

          html::-webkit-scrollbar-button:horizontal:increment {
            background-image: url(https://dl.dropboxusercontent.com/u/55165267/icon2.png);
          }

          html::-webkit-scrollbar-button:end:increment {
            background-image: url("/angle_down_${theme}.svg");
          }

          html::-webkit-scrollbar-button:start:decrement {
            background-image: url("/angle_up_${theme}.svg");
          }

          body {
            background-color: ${SITE_THEME[theme].background};
          }
        `}
      </style>

      {children}
    </MyContext.Provider>
  );
}

//use the Context to create Hooks like useTheme
export function useTheme() {
  const { theme, setTheme } = useContext(MyContext);
  return { theme, setTheme };
}

export function useActiveCard() {
  const { activeCard, setActiveCard } = useContext(MyContext);
  return { activeCard, setActiveCard };
}

export function useActiveProject() {
  const { activeProject, setActiveProject } = useContext(MyContext);
  return { activeProject, setActiveProject };
}

// ::selection {
//   background: ${SITE_THEME[theme].weak}; /* WebKit/Blink Browsers */
// }

// ::-moz-selection {
//   background: ${SITE_THEME[theme].weak}; /* Gecko Browsers */
// }
