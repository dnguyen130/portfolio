import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import { motion } from "framer-motion";

const HeroTextCont = styled.div`
	width: 100%;
`;

const HeroTextHeading = styled.h1`
	margin: 0;
	font-family: "Maven Pro", sans-serif;
	font-size: ${(props) => props.fsize};
	color: ${(props) => props.hcolor};
	font-weight: ${(props) => props.fweight};
`;

const HeroTextBody = styled.p`
	margin: 0;
	font-weight: 200;
	font-size: 1.3rem;
	color: ${(props) => props.bcolor};
	margin-top: 20px;
`;

const HeroText = ({}) => {
	const { theme } = useTheme();

	const container = {
		visible: {
			opacity: 1,
			transition: {
				ease: "easeOut",
				duration: 1,
				staggerChildren: 0.5,
			},
		},
		hidden: {
			opacity: 0,
		},
	};

	const item = {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { ease: "easeOut", duration: 1 },
		},
	};

	return (
		<HeroTextCont>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<motion.div variants={item}>
					<HeroTextHeading hcolor={site_theme[theme].text} fsize="4rem" fweight="500">
						Ahoy, I am
					</HeroTextHeading>
				</motion.div>
				<motion.div variants={item}>
					<HeroTextHeading hcolor={site_theme[theme].strong} fsize="5rem">
						Danny Nguyen
					</HeroTextHeading>
				</motion.div>
				<motion.div variants={item}>
					<HeroTextBody bcolor={site_theme[theme].text}>
						I am a web developer with a desire to create interactive and accessible
						applications on the web.
					</HeroTextBody>
				</motion.div>
				<motion.div variants={item}>
					<HeroTextBody bcolor={site_theme[theme].text}>
						Currently a digital design &#38; development student at BCIT, learning modern
						web/mobile development, UI/UX and graphic design.
					</HeroTextBody>
				</motion.div>
			</motion.div>
		</HeroTextCont>
	);
};

export default HeroText;
