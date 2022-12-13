import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
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

import {
  useActiveCard,
  useActiveProject,
  useActiveDrawer,
  useInitialLoad,
  useActiveTab,
  useTheme,
} from "@/utils/provider";

import { SITE_THEME } from "@/utils/variables";

const PageContainer = styled.div`
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
  align-self: center;
  position: absolute;
  bottom: 20px;
  color: ${(props) => props.arrowcolor};
  transition: color 0.25s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.arrowhovercolor};
  }
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
    y: 0,
  },
  active: {
    y: [-5, 5],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
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

  useEffect(() => {
    if (initialLoad == false) {
      setTimeout(() => setInitialLoad(true), 3000);
    }
  });

  if (initialLoad === false) {
    return (
      <PageContainer>
        <LogoAnim />
      </PageContainer>
    );
  }

  if (initialLoad === true) {
    return (
      <PageContainer>
        <Head></Head>
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
          zindex={activeDrawer || activeCard ? 3 : 2}
        />
        <Drawer />
        <NavBar burgerOnClick={() => setActiveDrawer(!activeDrawer)} />
        <MainContainer mainSelect={activeCard ? "none" : "auto"}>
          <HeroText arrowhref="#projects" />
          <Arrow
            initial="initial"
            animate="active"
            variants={ArrowVariants}
            whileTap={{ scale: 0.8 }}
            arrowcolor={SITE_THEME[theme].text}
            arrowhovercolor={SITE_THEME[theme].strong}
          >
            <Link href="#projects" passHref>
              <a>
                <HiOutlineChevronDoubleDown size="100%" />
              </a>
            </Link>
          </Arrow>
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
    );
  }
}
