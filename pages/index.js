import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
} from "@/utils/provider";

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
  max-width: 100vw;
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
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  transition: 0.2s;
  display: ${(props) => props.fadeDisplay};
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

export default function Home() {
  const { activeCard, setActiveCard } = useActiveCard();
  const { activeProject } = useActiveProject();
  const { activeDrawer, setActiveDrawer } = useActiveDrawer();
  const ap = activeProject;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  });

  if (loaded === false) {
    return (
      <PageContainer>
        <LogoAnim />
      </PageContainer>
    );
  }

  if (loaded === true) {
    return (
      <PageContainer>
        <Head></Head>
        <Fade
          animate={activeCard || activeDrawer ? "active" : "inactive"}
          variants={FadeVariants}
          onClick={() => {
            setActiveCard(false);
            setActiveDrawer(false);
          }}
        />
        <Drawer />
        <NavBar burgerOnClick={() => setActiveDrawer(!activeDrawer)} />
        <MainContainer mainSelect={activeCard ? "none" : "auto"}>
          <HeroText arrowHref="#projects" />
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
