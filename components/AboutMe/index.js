import styled from "styled-components";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import { motion } from "framer-motion";

const AboutMeCont = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	min-width: 1000px;
`;

const AboutMeText = styled.p`
	color: ${(props) => props.color};
	font-size: 1.3rem;
	width: 100%;
	font-weight: 200;
`;

const ImgCont = styled.div`
	box-shadow: inset 0 0 12px 10px ${(props) => props.scolor},
		inset 0 0 10px 3px ${(props) => props.scolor};
	background-color: #20ace4;
	width: 100%;
	padding: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	transition: box-shadow 0.5s;
`;

const AboutMeImage = styled.img`
	width: 100%;
	border-radius: 10px;
`;

const Link = styled.a`
	color: ${(props) => props.linkcolor};
	text-decoration: underline rgba(0, 0, 0, 0);
	transition: text-decoration-color 200ms;

	&:hover {
		text-decoration: underline ${(props) => props.undercolor};
	}
`;

const variants = {
	visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 1.5 } },
	lefthidden: { opacity: 0, x: -200 },
	righthidden: { opacity: 0, x: 200 },
};

const AboutMe = ({}) => {
	const { theme } = useTheme();

	return (
		<AboutMeCont>
			<motion.div
				viewport={{ once: true }}
				whileInView="visible"
				initial="lefthidden"
				variants={variants}
				style={{ width: "70%" }}
			>
				<AboutMeText color={site_theme[theme].text}>
					Hey there! My name is Danny and I find designing and developing fun! <br /> <br />
					My first experience with the web was back in 2003 when I created my first email
					account to play Neopets, a virtual pet website. Since then, my whole life, like many
					others, has revolved around using the web to communicate and learn from others.{" "}
					<br /> <br />
					After experiencing a few different disciplines in the workforce, I fell in love with
					web and mobile development. I got to experience a fast-paced, cooperative school
					environment at the&nbsp;
					<Link
						href="https://www.bcit.ca/"
						linkcolor={site_theme[theme].strong}
						undercolor={site_theme[theme].strong}
					>
						British Columbia Instiute of Technology
					</Link>
					, where I would work in teams of designers and developers, creating web and mobile
					applications from scratch in the&nbsp;
					<Link
						href="https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6405dipma/"
						linkcolor={site_theme[theme].strong}
						undercolor={site_theme[theme].strong}
					>
						Digital Design and Development Program!
					</Link>{" "}
					<br /> <br />
					Currently, I am looking for a practicum as a student intern to attain credits
					required for graduation. Afterwards, I will be looking for a full-time job as a
					developer, creating web and/or mobile applications that users would enjoy!
				</AboutMeText>
			</motion.div>
			<motion.div
				viewport={{ once: true }}
				whileInView="visible"
				initial="righthidden"
				variants={variants}
				style={{ width: "30%" }}
			>
				<ImgCont scolor={site_theme[theme].background}>
					<AboutMeImage src="/profile.png" alt="Profile Picture" />
				</ImgCont>
			</motion.div>
		</AboutMeCont>
	);
};

export default AboutMe;
