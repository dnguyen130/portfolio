import { useContext, createContext, useState } from "react";
import { site_theme } from "./variables";

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
	theme: "dark",
	setTheme: () => {},

	activePage: "home",
	setActivePage: () => {},
};

const MyContext = createContext(initialStates);

export default function AppProvider({ children }) {
	//children all the pages/components insider this provider
	const [theme, setTheme] = useState(initialStates.theme);
	const [activePage, setActivePage] = useState(initialStates.activePage);

	//put in the variables you want to share
	return (
		<MyContext.Provider value={{ theme, setTheme, activePage, setActivePage }}>
			<style jsx global>
				{`
					html {
						scrollbar-color: ${site_theme[theme].weak}
							${site_theme[theme].scrollbar}; /* Gecko Browsers */
					}

					html::-webkit-scrollbar-thumb {
						background: ${site_theme[theme].weak};
					}

					html::-webkit-scrollbar-thumb:hover {
						background: ${site_theme[theme].hoverscroll};
					}

					html::-webkit-scrollbar-thumb:active {
						background: ${site_theme[theme].activescroll};
					}

					html::-webkit-scrollbar {
						background: ${site_theme[theme].scrollbar};
					}

					html::-webkit-scrollbar-button {
						background-color: ${site_theme[theme].scrollbar};
						background-size: 10px 10px;
						background-position: center center;
						background-repeat: no-repeat;
						height: 20px;
						width: 1em;
						-webkit-box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
					}

					html::-webkit-scrollbar-button:start:decrement {
						background-image: url("/angle_up_${theme}.svg");
					}

					html::-webkit-scrollbar-button:start:decrement:active {
						background-image: url("/angle_up_${theme === "dark"
							? "light"
							: "dark"}.svg");
						background-color: ${site_theme[theme].strong};
					}

					html::-webkit-scrollbar-button:end:increment {
						background-image: url("/angle_down_${theme}.svg");
					}

					html::-webkit-scrollbar-button:end:increment:active {
						background-image: url("/angle_down_${theme === "dark"
							? "light"
							: "dark"}.svg");
						background-color: ${site_theme[theme].strong};
					}

					html::-webkit-scrollbar-button:start:increment,
					html::-webkit-scrollbar-button:end:decrement {
						display: none;
					}

					body {
						background-color: ${site_theme[theme].background};
					}

					::selection {
						background: ${site_theme[theme].weak}; /* WebKit/Blink Browsers */
					}

					::-moz-selection {
						background: ${site_theme[theme].weak}; /* Gecko Browsers */
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

export function useActivePage() {
	const { activePage, setActivePage } = useContext(MyContext);
	return { activePage, setActivePage };
}
