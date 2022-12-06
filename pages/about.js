import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";

import NavBar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import Drawer from "@/components/Shared/Drawer";
import ProfileCard from "@/components/About/ProfileCard";

import {
  useActiveCard,
  useActiveProject,
  useActiveDrawer,
  useInitialLoad,
  useTheme,
  useActiveTab,
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
  max-width: 100vw;
  width: 100%;
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

const Underline = styled.div`
  width: 100%;
  height: 5px;
  background: linear-gradient(
    270deg,
    ${(props) => props.gradient1},
    70%,
    transparent
  );
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
  const { initialLoad, setInitialLoad } = useInitialLoad();
  const { theme } = useTheme();
  const { activeTab, setActiveTab } = useActiveTab();

  useEffect(() => {
    if (initialLoad == false) {
      setInitialLoad(true);
    }
  });

  return (
    <PageContainer>
      <Head></Head>
      <Fade
        animate={
          activeCard || activeDrawer || activeTab ? "active" : "inactive"
        }
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
        <Underline gradient1={SITE_THEME[theme].strong} />
        <ProfileCard />
        <Underline gradient1={SITE_THEME[theme].strong} />
      </MainContainer>
      <Footer />
    </PageContainer>
  );
}
