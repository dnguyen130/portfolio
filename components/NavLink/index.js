import styled from "styled-components";
import DiamondIcon from "../DiamondIcon";

import { FaRegUser } from "react-icons/fa";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";
import Link from "next/link";

const NavLinkCont = styled.div`
	width: 200px;
	height: 70px;
	transform: skew(-45deg);
	padding: 0 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.25s;

	&:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}
`;

const UnskewCont = styled.div`
	transform: skew(45deg);
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	width: 80%;
`;

const TextCont = styled.p`
	margin: 0;
	color: ${(props) => props.txtcolor};
	font-size: 1.2em;
	transition: 0.25s;

	${NavLinkCont}:hover & {
		color: ${(props) => props.txthvrclr};
	}
`;

const IconCont = styled.div`
	width: 35px;
	height: 35px;
	margin-right: 15px;
	transform: rotate(45deg);
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.clr};
	vertical-align: middle;
	background: none;
	border: 0;
	position: relative;
	transition: 0.25s;

	&::before,
	&::after {
		content: "";
		position: absolute;
		border: 2px solid transparent;
		width: 0;
		height: 0;
		box-sizing: inherit;
		z-index: -99999;
	}

	&::before {
		top: 0;
		left: 0;
	}

	&::after {
		bottom: 0;
		right: 0;
	}

	${NavLinkCont}:hover & {
		color: ${(props) => props.hvrclr};

		&::before,
		&::after {
			width: 100%;
			height: 100%;
		}

		&::before {
			border-top-color: ${(props) => props.borderColor};
			border-right-color: ${(props) => props.borderColor};
			transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
		}

		&::after {
			border-bottom-color: ${(props) => props.borderColor};
			border-left-color: ${(props) => props.borderColor};
			transition: border-color 0s ease-out 0.2s, width 0.1s ease-out 0.2s,
				height 0.1s ease-out 0.3s;
		}
	}
`;

const ReverseIconCont = styled.div`
	transform: rotate(-45deg);
`;

const NavLink = ({ linkText = "default", children, pageLink = "/" }) => {
	const { theme } = useTheme();

	return (
		<Link href={pageLink}>
			<NavLinkCont>
				<UnskewCont>
					<IconCont
						borderColor={site_theme[theme].strong}
						clr={site_theme[theme].text}
						hvrclr={site_theme[theme].strong}
					>
						<ReverseIconCont>{children}</ReverseIconCont>
					</IconCont>
					<TextCont txtcolor={site_theme[theme].text} txthvrclr={site_theme[theme].strong}>
						{linkText}
					</TextCont>
				</UnskewCont>
			</NavLinkCont>
		</Link>
	);
};

export default NavLink;
