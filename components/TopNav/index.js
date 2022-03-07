import styled from "styled-components";
import ReactSwitch from "react-switch";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";
import { motion } from "framer-motion";
import {
	FaLaptopCode,
	FaRegUser,
	FaHome,
	FaRegFolderOpen,
	FaPhone,
} from "react-icons/fa";

import DiamondIcon from "../DiamondIcon";
import NavLink from "../NavLink";

const TopNavCont = styled.div`
	display: flex;
	justify-content: flex-end;
	align-self: flex-end;
	align-items: center;
	width: 1200px;
	height: 120px;
	font-family: "Maven Pro", sans-serif;
	z-index: 99999;
	position: absolute;
	top: 0;
	margin: 20px 0 20px 20px;
	background: linear-gradient(90deg, #000, #fff);
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

const TopNav = ({ onChange = () => {}, checked = false }) => {
	const { theme } = useTheme();

	return (
		<TopNavCont>
			<motion.div
				variants={container}
				animate="visible"
				initial="hidden"
				style={motionStyle}
			>
				<NavLink linkText="Home" />
				<NavLink linkText="About" />
				<NavLink linkText="Portfolio" />
				<NavLink linkText="Contact" />
				<label htmlFor="darkmode-switch">
					<ReactSwitch
						borderRadius={20}
						onChange={onChange}
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
		</TopNavCont>
	);
};

export default TopNav;
