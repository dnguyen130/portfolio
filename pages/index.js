import styled from "styled-components";
import { useEffect, useState } from "react";
import { useTheme } from "../utils/provider";
import Head from "next/head";

import LeftNav from "../components/LeftNav";
import TopNav from "../components/TopNav";
import HeroText from "../components/HeroText";
import LogoAnim from "../components/LogoAnim";
import Chevron from "../components/Chevron";

import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Toolkit from "../components/Toolkit";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const Page = styled.div`
	display: flex;
	flex-direction: column;
	overflow: auto;
	align-items: center;
`;

const PageCont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const HomePageCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	height: 60vh;
	width: 70%;
`;

const NonHomePageCont = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	flex: 1;
`;

const ProjectContainer = styled.div`
	width: 100%;
	display: flex;
`;

const CenterCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 300px;
	height: 50%;
`;

const SectionCont = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	margin-bottom: 150px;
`;

export default function Home() {
	return (
		<Page id="home">
			<Head>
				<title>Danny Nguyen</title>
				<meta name="title" content="Danny Nguyen's Portfolio | Front-End Web Developer" />
				<meta
					name="description"
					content="A front-end web developer who enjoys developing usable, accessible, and interactive applications."
				/>
				<meta
					name="keywords"
					content="Danny, Nguyen, Portfolio, Web, Developer, BCIT, Front-End, Frontend, Mobile, React, JavaScript, Next.js   "
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta charSet="UTF-8" />
				<link rel="canonical" href="https://portfolio-dnguyen130.vercel.app/" />
				<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
				<link rel="manifest" href="/static/site.webmanifest" />
				<link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#030f22" />
				<meta name="msapplication-TileColor" content="#030f22" />
				<meta name="theme-color" content="#030f22" />

				{/* Facebook / Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://portfolio-dnguyen130.vercel.app/" />
				<meta property="og:title" content="Danny Nguyen" />
				<meta
					property="og:description"
					content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices."
				/>
				<meta property="og:image" content="/static/cover.png" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://portfolio-dnguyen130.vercel.app/" />
				<meta property="twitter:title" content="Danny Nguyen" />
				<meta
					property="twitter:description"
					content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices."
				/>
				<meta property="twitter:image" content="/static/cover.png" />
			</Head>
			<PageCont>
				<HomePageCont>
					<CenterCont>
						<HeroText />
					</CenterCont>
				</HomePageCont>
				<NonHomePageCont>
					<ProjectContainer>
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
					</ProjectContainer>
				</NonHomePageCont>
			</PageCont>
			<Footer />
		</Page>
	);
}
