import AppProvider from "../utils/provider";
import "../styles/globals.css";
import TopNav from "../components/TopNav";
import { useState, useEffect } from "react";
import { useTheme } from "../utils/provider";
import LogoAnim from "../components/LogoAnim";
import styled from "styled-components";
import Head from "next/head";
import { domAnimation, LazyMotion, AnimatePresence, m } from "framer-motion";
import { fade } from "../utils/variables";

const HomePageCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	height: 100vh;
	min-height: 720px;
`;

const CenterCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70%;
	min-height: 300px;
	height: 50%;
`;

function MyApp({ Component, pageProps, router }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoaded(true), 4000);
	});

	if (loaded === false) {
		return (
			<AppProvider>
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
						<link rel="canonical" href="https://portfolio-dnguyen130.vercel.app/" />
						<link
							rel="apple-touch-icon"
							sizes="180x180"
							href="/static/apple-touch-icon.png"
						/>
						<link
							rel="icon"
							type="image/png"
							sizes="32x32"
							href="/static/favicon-32x32.png"
						/>
						<link
							rel="icon"
							type="image/png"
							sizes="16x16"
							href="/static/favicon-16x16.png"
						/>
						<link rel="manifest" href="/statc/site.webmanifest" />
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
					<CenterCont>
						<LogoAnim />
					</CenterCont>
				</HomePageCont>
			</AppProvider>
		);
	}

	if (loaded === true) {
		return (
			<AppProvider>
				<TopNav />
				{/* <LazyMotion features={domAnimation}>
					<AnimatePresence
						exitBeforeEnter
						initial={false}
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<m.div
							variants={fade.variants}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={fade.transition}
						> */}
				<Component {...pageProps} />
				{/* </m.div>
					</AnimatePresence>
				</LazyMotion> */}
			</AppProvider>
		);
	}
}

export default MyApp;
