import styled from "styled-components";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import { CgFigma } from "react-icons/cg";
import {
	SiAdobeaftereffects,
	SiAdobeillustrator,
	SiAdobeindesign,
	SiAdobephotoshop,
	SiAdobepremierepro,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiSass,
	SiStyledcomponents,
	SiJquery,
	SiNodedotjs,
	SiExpo,
	SiExpress,
	SiMongodb,
	SiFirebase,
	SiPhp,
	SiMysql,
	SiGithub,
	SiGnubash,
} from "react-icons/si";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import { motion } from "framer-motion";

const ToolkitCont = styled.div`
	display: flex;
	flex-direction: column;
`;

const Toolheader = styled.h3`
	color: ${(props) => props.headcolor};
	font-family: "Maven Pro", sans-serif;
	font-size: 2rem;
	margin: 10px 0;
	font-weight: 500;
`;

const Toolbar = styled.div`
	height: 140px;
	background: linear-gradient(
		135deg,
		${(props) => props.bargrad1},
		50%,
		${(props) => props.bargrad2}
	);
	width: 100%;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	box-shadow: 5px 5px 5px black;
	margin-bottom: 50px;
`;

const ToolRow = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;

	//firefox
	scrollbar-color: ${(props) => props.scrollbarcolor} ${(props) => props.scrollcontcolor};
	scrollbar-width: thin;

	//chromium
	&::-webkit-scrollbar {
		height: 10px;
		width: 100%;
		background-color: ${(props) => props.scrollcontcolor};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.scrollbarcolor};
	}
`;

const Tool = styled.div`
	height: 70px;
	width: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: ${(props) => props.toolbg};
	box-shadow: 5px 5px 5px black;
`;

const ToolGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 180px;
	height: 120px;
	flex: 0 0 auto;
`;

const ToolLabel = styled.div`
	margin: 5px 0 0 0;
	font-family: "Maven Pro", sans-serif;
	font-weight: 500;
	font-size: 1.2em;
	color: ${(props) => props.labelcolor};
	text-align: center;
`;

const container = {
	visible: {
		opacity: 1,
		transition: {
			ease: "easeOut",
			duration: 1.5,
			staggerChildren: 0.5,
		},
	},
	hidden: {
		opacity: 0,
	},
};

const item = {
	visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1 } },
	hidden: { opacity: 0, y: 50 },
};

const Toolkit = ({}) => {
	const { theme } = useTheme();

	return (
		<ToolkitCont>
			<motion.div
				whileInView="visible"
				viewport={{ once: true }}
				initial="hidden"
				variants={container}
			>
				<motion.div variants={item}>
					<Toolheader headcolor={site_theme[theme].text}>Design</Toolheader>
					<Toolbar bargrad1={site_theme[theme].gray} bargrad2={site_theme[theme].background}>
						<ToolRow
							scrollcontcolor={site_theme[theme].oppositeGray}
							scrollbarcolor={site_theme[theme].weak}
						>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<CgFigma size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Figma</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiAdobeaftereffects size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>After Effects</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiAdobeillustrator size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Illustrator</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiAdobeindesign size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Indesign</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiAdobephotoshop size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Photoshop</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiAdobepremierepro size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Premiere Pro</ToolLabel>
							</ToolGroup>
						</ToolRow>
					</Toolbar>
				</motion.div>
				<motion.div variants={item}>
					<Toolheader headcolor={site_theme[theme].text}>Front-End Development</Toolheader>
					<Toolbar bargrad1={site_theme[theme].gray} bargrad2={site_theme[theme].background}>
						<ToolRow
							scrollcontcolor={site_theme[theme].oppositeGray}
							scrollbarcolor={site_theme[theme].weak}
						>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<IoLogoHtml5 size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>HTML5</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<IoLogoCss3 size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>CSS3</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiSass size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Sass</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiStyledcomponents size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>styled</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiJavascript
										style={{ borderRadius: 4 }}
										size="50px"
										color={site_theme[theme].text}
									/>
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Javascript</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiJquery size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>JQuery</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiNodedotjs size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Node.js</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiReact size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>React</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiNextdotjs size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Next.js</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiReact size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>React Native</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiExpo size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Expo</ToolLabel>
							</ToolGroup>
						</ToolRow>
					</Toolbar>
				</motion.div>
				<motion.div variants={item}>
					<Toolheader headcolor={site_theme[theme].text}>
						Back-End Development / Other
					</Toolheader>
					<Toolbar bargrad1={site_theme[theme].gray} bargrad2={site_theme[theme].background}>
						<ToolRow
							scrollcontcolor={site_theme[theme].oppositeGray}
							scrollbarcolor={site_theme[theme].weak}
						>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiExpress size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Express</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiMongodb size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>MongoDB</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiFirebase size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Firebase</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiPhp size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>PHP</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiMysql size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>MySQL</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiGithub size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>GitHub</ToolLabel>
							</ToolGroup>
							<ToolGroup>
								<Tool toolbg={site_theme[theme].background}>
									<SiGnubash size="50px" color={site_theme[theme].text} />
								</Tool>
								<ToolLabel labelcolor={site_theme[theme].text}>Bash</ToolLabel>
							</ToolGroup>
						</ToolRow>
					</Toolbar>
				</motion.div>
			</motion.div>
		</ToolkitCont>
	);
};

export default Toolkit;
