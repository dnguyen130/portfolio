import styled from "styled-components";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const HeaderCont = styled.h2`
	margin: 0;
	font-family: "Maven Pro", sans-serif;
	font-size: 4rem;
	color: ${(props) => props.color};
	margin-bottom: 30px;
	font-weight: 500;
`;

const Line = styled.div`
	background: linear-gradient(
		90deg,
		${(props) => props.linecolor},
		30%,
		rgba(0, 0, 0, 0)
	);
	height: 2px;
`;

const Header = ({ headertext = "Default" }) => {
	const { theme } = useTheme();

	return (
		<HeaderCont color={site_theme[theme].text}>
			{headertext}
			<Line linecolor={site_theme[theme].strong} />
		</HeaderCont>
	);
};

export default Header;
