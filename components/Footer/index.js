import styled from "styled-components";
import Link from "next/link";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";
import { SiGithub, SiLinkedin } from "react-icons/si";

const FooterCont = styled.div`
	height: 50px;
	background-color: ${(props) => props.bgcolor};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 20px;
`;

const FooterText = styled.h3`
	margin: 0;
	color: ${(props) => props.textcolor};
	font-weight: 600;
	width: 200px;
`;

const WordLinkCont = styled.div`
	margin: 0;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	width: 400px;
`;

const WordLink = styled.a`
	color: ${(props) => props.linkcolor};
	transition: 0.25s;
	&:hover {
		color: ${(props) => props.hovercolor};
	}
`;

const SocialCont = styled.div`
	color: ${(props) => props.iconcolor};
	display: flex;
	justify-content: flex-end;
	width: 200px;
`;

const Footer = ({}) => {
	const { theme } = useTheme();

	return (
		<FooterCont bgcolor={site_theme[theme].gray}>
			<FooterText textcolor={site_theme[theme].text}>
				© 2022 Danny Nguyen
			</FooterText>
			<WordLinkCont>
				<Link href="/privacy" passHref>
					<WordLink
						linkcolor={site_theme[theme].text}
						hovercolor={site_theme[theme].strong}
					>
						Privacy
					</WordLink>
				</Link>
				<Link href="/terms-conditions" passHref>
					<WordLink
						linkcolor={site_theme[theme].text}
						hovercolor={site_theme[theme].strong}
					>
						Terms and Conditions
					</WordLink>
				</Link>
				<WordLink
					href="mailto:dt.ngu95@gmail.com"
					linkcolor={site_theme[theme].text}
					hovercolor={site_theme[theme].strong}
				>
					Contact Me
				</WordLink>
			</WordLinkCont>
			<SocialCont iconcolor={site_theme[theme].text}>
				<a href="https://www.linkedin.com/in/dnguyen130/">
					<SiLinkedin size={25} />
				</a>
				<a href="https://github.com/dnguyen130">
					<SiGithub size={25} />
				</a>
			</SocialCont>
		</FooterCont>
	);
};

export default Footer;
