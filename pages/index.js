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

const Logo = styled.img`
	position: fixed;
	top: 20px;
	left: 20px;
	z-index: 99999;
	width: 120px;
`;

const Page = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
`;

const PageCont = styled.div`
	padding: 20px;
`;

const HomePageCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100vw;
	height: 100vh;
	min-height: 720px;
`;

const NonHomePageCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CenterCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70%;
	min-height: 720px;
`;

const SectionCont = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	margin-bottom: 150px;
`;

export default function Home() {
	const [checked, setChecked] = useState(false);
	const { theme, setTheme } = useTheme();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoaded(true), 4000);
	});

	const ThemeSwitcher = () => {
		setChecked(!checked);
		setTheme(theme === "dark" ? "light" : "dark");
	};

	if (loaded === false) {
		return (
			<HomePageCont>
				<Head>
					<title>Danny Nguyen</title>
					<meta name="title" content="Danny Nguyen | Web Developer" />
					<meta
						name="description"
						content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices."
					/>
					<meta
						name="keywords"
						content="Danny, Nguyen, Portfolio, Web, Developer, BCIT, Front-End, Frontend, Home"
					/>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta charSet="UTF-8" />
					<link rel="canonical" href="https://dannynguyen.ca/" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#030f22" />
					<meta name="msapplication-TileColor" content="#030f22" />
					<meta name="theme-color" content="#030f22" />

					{/* Facebook / Open Graph */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://dannynguyen.ca/" />
					<meta property="og:title" content="Danny Nguyen" />
					<meta
						property="og:description"
						content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices."
					/>
					<meta property="og:image" content="/cover.png" />

					{/* Twitter */}
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://dannynguyen.ca/" />
					<meta property="twitter:title" content="Danny Nguyen" />
					<meta
						property="twitter:description"
						content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices."
					/>
					<meta property="twitter:image" content="/cover.png" />
				</Head>
				<CenterCont>
					<LogoAnim />
				</CenterCont>
			</HomePageCont>
		);
	}

	if (loaded === true) {
		return (
			<Page id="home">
				<Head>
					<title>Danny Nguyen | Front-End Web Developer</title>
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
					<link rel="canonical" href="https://dannynguyen.ca/" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#030f22" />
					<meta name="msapplication-TileColor" content="#030f22" />
					<meta name="theme-color" content="#030f22" />

					{/* Facebook / Open Graph */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://dannynguyen.ca/" />
					<meta property="og:title" content="Danny Nguyen" />
					<meta
						property="og:description"
						content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices."
					/>
					<meta property="og:image" content="/cover.png" />

					{/* Twitter */}
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://dannynguyen.ca/" />
					<meta property="twitter:title" content="Danny Nguyen" />
					<meta
						property="twitter:description"
						content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices."
					/>
					<meta property="twitter:image" content="/cover.png" />
				</Head>
				<PageCont>
					<HomePageCont>
						<a href="#home">
							<Logo src="/logo.svg" />
						</a>
						<LeftNav />
						<TopNav onChange={ThemeSwitcher} checked={checked} />
						<CenterCont>
							<HeroText />
							<Chevron />
						</CenterCont>
					</HomePageCont>
					<NonHomePageCont id="about">
						<SectionCont>
							<Header headertext="About Me" />
							<AboutMe />
						</SectionCont>
					</NonHomePageCont>
					<NonHomePageCont id="toolkit">
						<SectionCont>
							<Header headertext="Technical Toolkit" />
							<Toolkit />
						</SectionCont>
					</NonHomePageCont>
					<NonHomePageCont id="projects">
						<SectionCont>
							<Header headertext="Projects" />
							<Projects />
						</SectionCont>
					</NonHomePageCont>
					<NonHomePageCont id="contact">
						<SectionCont>
							<Header headertext="Get in Touch" />
							<Contact />
						</SectionCont>
					</NonHomePageCont>
				</PageCont>
				<Footer />
			</Page>
		);
	}
}
