import Head from "next/head";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

import NavBar from "@/components/Shared/NavBar";
import HeroText from "@/components/Home/HeroText";
import Projects from "@/components/Home/Projects";
import Footer from "@/components/Shared/Footer";
import Extras from "@/components/Home/Extras";
import Dialog from "@/components/Shared/Dialog";
import Drawer from "@/components/Shared/Drawer";
import LogoAnim from "@/components/Shared/LogoAnim";
import Layout from "@/components/Shared/Layout";

import {
  useActiveCard,
  useActiveProject,
  useActiveDrawer,
  useInitialLoad,
  useActiveTab,
  useTheme,
} from "@/utils/provider";

import { SITE_THEME } from "@/utils/variables";

const PageContainer = styled(motion.div)`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.main`
  box-sizing: border-box;
  max-width: 1920px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  user-select: ${(props) => props.mainSelect};
`;

const Fade = styled(motion.div)`
  background-color: black;
  opacity: ${(props) => props.fadeOpacity};
  width: 100%;
  height: 100%;
  user-select: none;
  z-index: ${(props) => props.zindex};
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  transition: 0.2s;
  display: ${(props) => props.fadeDisplay};
`;

const Arrow = styled(motion.div)`
  width: 50px;
  height: 50px;
  color: ${(props) => props.arrowcolor};
  transition: color 0.25s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.arrowhovercolor};
  }
`;

const ArrowCont = styled(motion.div)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  align-self: center;
  bottom: 20px;
`;

const FadeVariants = {
  active: {
    display: "block",
    opacity: 0.8,
    transition: {
      duration: 0.1,
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const ArrowVariants = {
  initial: {
    y: -5,
  },
  active: {
    y: 5,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
    },
  },
};

const ArrowContVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
};

export default function Home() {
  const { activeCard, setActiveCard } = useActiveCard();
  const { activeProject } = useActiveProject();
  const { theme } = useTheme();
  const ap = activeProject;
  const { activeDrawer, setActiveDrawer } = useActiveDrawer();
  const { initialLoad, setInitialLoad } = useInitialLoad();
  const { activeTab, setActiveTab } = useActiveTab();

  const smoothScrollTo = (e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    element.scrollIntoView({
      block: "start",
      behavior: "smooth", // smooth scroll
    });
  };

  useEffect(() => {
    if (initialLoad == false) {
      setTimeout(() => setInitialLoad(true), 3000);
    }
  });

  if (initialLoad === false) {
    return (
      <Layout>
        <PageContainer>
          <Head>
            {/* Primary Meta Tags, generated at Metatags.io */}
            <title>Danny Nguyen</title>
            <meta name="title" content="Danny Nguyen | Front-end Developer" />
            <meta
              name="description"
              content="A front-end developer with a passion for bringing great designs and ideas to life."
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta charSet="UTF-8" />
            <link rel="canonical" href="https://dannynguyen.ca/" />
            {/* Favicon Tags, generated at realfavicongenerator.net */}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#15ade4"
            />
            <meta name="msapplication-TileColor" content="#050610" />
            <meta name="theme-color" content="#ffffff" />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dannynguyen.ca/" />
            <meta
              property="og:title"
              content="Danny Nguyen | Front-end Developer"
            />
            <meta
              property="og:description"
              content="A front-end developer with a passion for bringing great designs and ideas to life."
            />
            <meta property="og:image" content="/cover.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://dannynguyen.ca/" />
            <meta
              property="twitter:title"
              content="Danny Nguyen | Front-end Developer"
            />
            <meta
              property="twitter:description"
              content="A front-end developer with a passion for bringing great designs and ideas to life."
            />
            <meta property="twitter:image" content="/cover.png" />
          </Head>
          <LogoAnim />
        </PageContainer>
      </Layout>
    );
  }

  if (initialLoad === true) {
    return (
      <Layout>
        <PageContainer>
          <Head>
            {/* Primary Meta Tags, generated at Metatags.io */}
            <title>Home</title>
            <meta name="title" content="Danny Nguyen | Front-end Developer" />
            <meta
              name="description"
              content="A front-end developer with a passion for bringing great designs and ideas to life."
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta charSet="UTF-8" />
            <link rel="canonical" href="https://dannynguyen.ca/" />
            {/* Favicon Tags, generated at realfavicongenerator.net */}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#15ade4"
            />
            <meta name="msapplication-TileColor" content="#050610" />
            <meta name="theme-color" content="#ffffff" />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dannynguyen.ca/" />
            <meta
              property="og:title"
              content="Danny Nguyen | Front-end Developer"
            />
            <meta
              property="og:description"
              content="A front-end developer with a passion for bringing great designs and ideas to life."
            />
            <meta property="og:image" content="/cover.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://dannynguyen.ca/" />
            <meta
              property="twitter:title"
              content="Danny Nguyen | Front-end Developer"
            />
            <meta
              property="twitter:description"
              content="A front-end developer with a passion for bringing great designs and ideas to life."
            />
            <meta property="twitter:image" content="/cover.png" />
          </Head>
          <Fade
            animate={
              activeCard || activeDrawer || activeTab ? "active" : "inactive"
            }
            zindex={activeDrawer || activeCard ? 4 : 2}
            variants={FadeVariants}
            onClick={() => {
              setActiveCard(false);
              setActiveDrawer(false);
              setActiveTab(false);
            }}
          />
          <Drawer />
          <NavBar burgerOnClick={() => setActiveDrawer(!activeDrawer)} />
          <MainContainer mainSelect={activeCard ? "none" : "auto"}>
            <HeroText />
            <ArrowCont
              initial="initial"
              animate="active"
              variants={ArrowContVariants}
            >
              <Arrow
                initial="initial"
                animate="active"
                variants={ArrowVariants}
                whileTap={{ scale: 0.8 }}
                arrowcolor={SITE_THEME[theme].text}
                arrowhovercolor={SITE_THEME[theme].strong}
                onClick={smoothScrollTo}
              >
                <HiOutlineChevronDoubleDown size="100%" />
              </Arrow>
            </ArrowCont>
            <Projects id="projects" />
            <Extras />
          </MainContainer>

          <Footer />
          <Dialog
            title={ap.name}
            tags={ap.tags}
            logoSrc={ap.logo}
            description={ap.description}
            infoLink={ap.url}
            liveSite={ap.live_site ? ap.live_site : null}
            gitClient={ap.github_client ? ap.github_client : null}
            gitServer={ap.github_server ? ap.github_server : null}
            darkColor={ap.color_dark}
            lightColor={ap.color_light}
            strongColor={ap.color_strong}
            hoverColor={ap.color_hover}
            hasLogo={ap.hasLogo}
            buttonName={ap.button_names}
          />
        </PageContainer>
      </Layout>
    );
  }
}
