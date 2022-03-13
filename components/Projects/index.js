import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import PhoneCarousel from "../PhoneCarousel";
import Carousel from "../Carousel";
import Button from "../Button";

import { motion } from "framer-motion";

const ProjectsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const ProjectsCont = styled.div`
	display: flex;
	margin: 0 0 100px;
	position: relative;
`;

const ProjectsCont2 = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: row-reverse;
`;

const ProjectHeader = styled.h1`
	color: ${(props) => props.headercolor};
	margin: 0;
	font-family: "Maven Pro", sans-serif;
	font-size: 3em;
	font-weight: 700;
`;

const ProjectHeader2 = styled.h1`
	color: ${(props) => props.headercolor};
	margin: 0;
	font-family: "Maven Pro", sans-serif;
	font-size: 3em;
	text-align: right;
`;

const ProjectDescriptionCont = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 20px;
`;

const ProjectDescription = styled.div`
	display: flex;
	flex-direction: column;
	color: ${(props) => props.desccolor};
	font-size: 1.2em;
`;

const StrongSpan = styled.span`
	color: ${(props) => props.strongcolor};
	font-size: 1.3em;
	margin: 15px 0;
	text-align: center;
`;

const ProjectList = styled.ul`
	color: ${(props) => props.desccolor};
	font-size: 1em;
	font-weight: 300;
`;

const ProjectListItem = styled.li`
	margin-bottom: 20px;
`;

const ProjectTechCont = styled.div`
	display: flex;
	font-size: 1.2em;
	font-weight: 500;
	color: ${(props) => props.techcolor};
	width: 100%;
	justify-content: space-around;
	margin: 15px 0;
`;

const ProjectTech = styled.div`
	font-family: "Maven Pro", sans-serif;
`;

const ButtonCont = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const ButtonCont2 = styled.div`
	width: 100%;
	display: flex;
`;

const variants = {
	visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 1 } },
	lefthidden: { opacity: 0, x: -100 },
	righthidden: { opacity: 0, x: 100 },
};

const Projects = () => {
	const { theme } = useTheme();

	return (
		<ProjectsWrapper>
			<ProjectsCont>
				<motion.div
					variants={variants}
					initial="lefthidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<PhoneCarousel />
				</motion.div>
				<motion.div
					variants={variants}
					initial="righthidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<ProjectDescriptionCont>
						<ProjectHeader headercolor={site_theme[theme].onme}>OnMe</ProjectHeader>
						<ProjectDescription desccolor={site_theme[theme].text}>
							<ProjectTechCont techcolor={site_theme[theme].onme}>
								<ProjectTech>React Native</ProjectTech>
								<ProjectTech>Expo</ProjectTech>
								<ProjectTech>styled-components</ProjectTech>
								<ProjectTech>PHP/SQL</ProjectTech>
							</ProjectTechCont>
							<StrongSpan strongcolor={site_theme[theme].text}>
								<q>Create a connection with a little liquid courage.</q>
							</StrongSpan>
							<ProjectList>
								<ProjectListItem>
									Cross-platform mobile application designed to combat loneliness in
									Vancouver.
								</ProjectListItem>
								<ProjectListItem>
									Send a drink with a custom message and spark a conversation!
								</ProjectListItem>
								<ProjectListItem>
									Designed and developed in 12 weeks by student designers and developers.
								</ProjectListItem>
								<ProjectListItem>
									Proof of concept presented to over 100 people, including students,
									faculty, and industry professionals.
								</ProjectListItem>
							</ProjectList>
							<ButtonCont>
								<Button
									btnText="Client Repo"
									btnLink="https://github.com/dnguyen130/onme"
									height="50px"
									width="250px"
									bgcolor={site_theme[theme].text}
									bghover={site_theme[theme].onme}
									clr={site_theme[theme].background}
								/>
								<Button
									btnText="Server Repo"
									btnLink="https://github.com/dnguyen130/OnMe-Serverside"
									height="50px"
									width="250px"
									bgcolor={site_theme[theme].text}
									bghover={site_theme[theme].onme}
									clr={site_theme[theme].background}
								/>
							</ButtonCont>
						</ProjectDescription>
					</ProjectDescriptionCont>
				</motion.div>
			</ProjectsCont>
			<ProjectsCont2>
				<motion.div
					variants={variants}
					initial="righthidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<Carousel />
				</motion.div>
				<motion.div
					variants={variants}
					initial="lefthidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<ProjectDescriptionCont>
						<ProjectHeader2 headercolor={site_theme[theme].steady}>Steady</ProjectHeader2>
						<ProjectDescription desccolor={site_theme[theme].text}>
							<ProjectTechCont techcolor={site_theme[theme].steady}>
								<ProjectTech>React</ProjectTech>
								<ProjectTech>Next.js</ProjectTech>
								<ProjectTech>styled-components</ProjectTech>
							</ProjectTechCont>
							<StrongSpan strongcolor={site_theme[theme].text}>
								<q>Get back on track to a happy life.</q>
							</StrongSpan>
							<ProjectList>
								<ProjectListItem>Web-based self-therapy application</ProjectListItem>
								<ProjectListItem>
									Answer questions based on eating, sleeping, and exercise habits.
								</ProjectListItem>
								<ProjectListItem>
									Receive results with tips to balance your lifestyle.
								</ProjectListItem>
								<ProjectListItem>
									Researched, designed, prototyped, tested, and developed by first year D3
									students.
								</ProjectListItem>
							</ProjectList>
							<ButtonCont2>
								<Button
									btnText="Live Site"
									btnLink="https://steadyofficial.vercel.app/"
									height="50px"
									width="250px"
									bgcolor={site_theme[theme].text}
									bghover={site_theme[theme].steady}
									clr={site_theme[theme].background}
								/>
								<Button
									btnText="Client Repo"
									btnLink="https://github.com/wilyyy/Steady"
									height="50px"
									width="250px"
									bgcolor={site_theme[theme].text}
									bghover={site_theme[theme].steady}
									clr={site_theme[theme].background}
								/>
							</ButtonCont2>
						</ProjectDescription>
					</ProjectDescriptionCont>
				</motion.div>
			</ProjectsCont2>
		</ProjectsWrapper>
	);
};

export default Projects;
