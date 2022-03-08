import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const PolicyCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 80%;
	border: 2px solid green;
	color: ${(props) => props.txtcolor};
`;

const LegalText = ({ children }) => {
	const { theme } = useTheme();

	return <PolicyCont txtcolor={site_theme[theme].text}>{children}</PolicyCont>;
};

export default LegalText;
