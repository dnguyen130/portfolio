import styled from "styled-components";
import ReactSwitch from "react-switch";
import { useTheme } from "../../utils/provider";
import { useActivePage } from "../../utils/provider";
import { site_theme } from "../../utils/variables";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLaptopCode, FaRegUser, FaHome, FaRegFolderOpen, FaPhone } from "react-icons/fa";

import DiamondIcon from "../DiamondIcon";
import NavLink from "../NavLink";

const TopNavCont = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 90px;
	width: 100%;
	font-family: "Maven Pro", sans-serif;
	position: relative;
	padding: 0 20px;
	padding-top: 20px;
	position: fixed;
	top: 0;
	background-color: ${(props) => props.bgcolor};
	transition: background-color 0.5s;
`;

const TopNavBackground = styled.div`
	display: flex;
	align-items: center;
	width: 1000px;
	height: 100%;
	font-family: "Maven Pro", sans-serif;
	background: linear-gradient(
		135deg,
		transparent 20%,
		${(props) => props.navgrad2} 40% 60%,
		transparent 87%
	);
`;

const Logo = styled.img`
	width: 70px;
`;

const container = {
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeOut",
			duration: 0.5,
			delay: 2,
		},
	},
	hidden: {
		opacity: 0,
		y: -20,
	},
};

const switchStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100%",
	fontSize: 15,
};

const motionStyle = {
	display: "flex",
	justifyContent: "center",
	width: "100%",
	alignItems: "center",
};

const TopNav = ({}) => {
	const { theme, setTheme } = useTheme();
	const { activePage, setActivePage } = useActivePage();
	const [checked, setChecked] = useState(false);

	const ThemeSwitcher = () => {
		setChecked(!checked);
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<TopNavCont bgcolor={site_theme[theme].background}>
			<Logo src="/logo.svg" />
			<TopNavBackground navgrad2={site_theme[theme].gray}>
				<motion.div variants={container} animate="visible" initial="hidden" style={motionStyle}>
					<NavLink linkText="Home" pageLink="/">
						<FaHome size={25} />
					</NavLink>
					<NavLink linkText="About" pageLink="about">
						<FaRegUser size={25} />
					</NavLink>
					<NavLink linkText="Development">
						<FaRegFolderOpen size={25} />
					</NavLink>
					<label htmlFor="darkmode-switch" style={{ position: "relative", left: 30 }}>
						<ReactSwitch
							borderRadius={20}
							onChange={ThemeSwitcher}
							checked={checked}
							offColor={site_theme[theme].text}
							offHandleColor={site_theme[theme].background}
							onColor={site_theme[theme].text}
							onHandleColor={site_theme[theme].background}
							activeBoxShadow={`0 0 2px 3px ${site_theme[theme].strong}`}
							uncheckedIcon={false}
							checkedIcon={false}
							uncheckedHandleIcon={<div style={switchStyle}>🌙</div>}
							checkedHandleIcon={<div style={switchStyle}>☀️</div>}
							id="darkmode-switch"
						/>
					</label>
				</motion.div>
			</TopNavBackground>
		</TopNavCont>
	);
};

export default TopNav;
