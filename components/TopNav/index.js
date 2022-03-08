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
	justify-content: space-between;
	align-items: center;
	height: 70px;
	width: 100%;
	font-family: "Maven Pro", sans-serif;
	position: relative;
	padding: 0 20px;
	margin: 20px 0 0 0;
	border: 3px solid purple;
`;

const TopNavBackground = styled.div`
	display: flex;
	align-items: center;
	width: 1000px;
	height: 100%;
	font-family: "Maven Pro", sans-serif;
	background: linear-gradient(
		135deg,
		transparent 10%,
		${(props) => props.navgrad2} 40% 60%,
		transparent 85%
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

const TopNav = ({ onChange = () => {}, checked = false }) => {
	const { theme } = useTheme();

	return (
		<TopNavCont>
			<Logo src="/logo.svg" />
			<TopNavBackground navgrad2={site_theme[theme].gray}>
				<motion.div
					variants={container}
					animate="visible"
					initial="hidden"
					style={motionStyle}
				>
					<a href="#home"></a>
					<NavLink linkText="Home">
						<FaHome size={25} />
					</NavLink>
					<NavLink linkText="About">
						<FaRegUser size={25} />
					</NavLink>
					<NavLink linkText="Portfolio">
						<FaRegFolderOpen size={25} />
					</NavLink>
					<NavLink linkText="Contact">
						<FaPhone size={20} />
					</NavLink>
					<label
						htmlFor="darkmode-switch"
						style={{ position: "relative", left: 30 }}
					>
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
			</TopNavBackground>
		</TopNavCont>
	);
};

export default TopNav;
