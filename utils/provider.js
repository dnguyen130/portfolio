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

  activeDrawer: false,
  setActiveDrawer: () => {},

  initialLoad: false,
  setInitialLoad: () => {},

  activeTab: false,
  setActiveTab: () => {},

  selectedProject: {},
  setSelectedProject: () => {},

  projectSlides: {},
  setProjectSlides: () => {},

  projectImage: "",
  setProjectImage: () => {},
};

const MyContext = createContext(initialStates);

export default function AppProvider({ children }) {
  //children all the pages/components insider this provider
  const [theme, setTheme] = useState(initialStates.theme);
  const [activeCard, setActiveCard] = useState(initialStates.activeCard);
  const [activeProject, setActiveProject] = useState(
    initialStates.activeProject
  );
  const [activeDrawer, setActiveDrawer] = useState(initialStates.activeDrawer);
  const [initialLoad, setInitialLoad] = useState(initialStates.initialLoad);
  const [activeTab, setActiveTab] = useState(initialStates.activeTab);
  const [selectedProject, setSelectedProject] = useState(
    initialStates.selectedProject
  );
  const [projectSlides, setProjectSlides] = useState(
    initialStates.projectSlides
  );
  const [projectImage, setProjectImage] = useState(initialStates.projectImage);

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
        activeDrawer,
        setActiveDrawer,
        initialLoad,
        setInitialLoad,
        activeTab,
        setActiveTab,
        selectedProject,
        setSelectedProject,
        projectSlides,
        setProjectSlides,
        projectImage,
        setProjectImage,
      }}
    >
      <style jsx global>
        {`
          html {
            scrollbar-color: ${SITE_THEME[theme].weak}
              ${SITE_THEME[theme].scrollbar}; /* Gecko Browsers */
            overflow: ${activeCard || activeDrawer ? "hidden" : "auto"};
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

export function useActiveDrawer() {
  const { activeDrawer, setActiveDrawer } = useContext(MyContext);
  return { activeDrawer, setActiveDrawer };
}

export function useInitialLoad() {
  const { initialLoad, setInitialLoad } = useContext(MyContext);
  return { initialLoad, setInitialLoad };
}

export function useActiveTab() {
  const { activeTab, setActiveTab } = useContext(MyContext);
  return { activeTab, setActiveTab };
}

export function useSelectedProject() {
  const { selectedProject, setSelectedProject } = useContext(MyContext);
  return { selectedProject, setSelectedProject };
}

export function useProjectSlides() {
  const { projectSlides, setProjectSlides } = useContext(MyContext);
  return { projectSlides, setProjectSlides };
}

export function useProjectImage() {
  const { projectImage, setProjectImage } = useContext(MyContext);
  return { projectImage, setProjectImage };
}
// ::selection {
//   background: ${SITE_THEME[theme].weak}; /* WebKit/Blink Browsers */
// }

// ::-moz-selection {
//   background: ${SITE_THEME[theme].weak}; /* Gecko Browsers */
// }
