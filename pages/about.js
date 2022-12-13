import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";

import NavBar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import Drawer from "@/components/Shared/Drawer";
import ProfileCard from "@/components/About/ProfileCard";
import Toolkit from "@/components/About/Toolkit";
import Underline from "@/components/Shared/Underline";

import {
  useActiveCard,
  useActiveProject,
  useActiveDrawer,
  useInitialLoad,
  useTheme,
  useActiveTab,
} from "@/utils/provider";

import { SITE_THEME, DEVICES } from "@/utils/variables";

const PageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.main`
  box-sizing: border-box;
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Description = styled.p`
  margin: 0 0 15px;
  font-size: 1em;
  line-height: 1.3em;
  color: ${(props) => props.color};

  @media (min-width: ${DEVICES.laptop}) {
    width: 80%;
  }
`;

const Padded = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        zindex={activeDrawer || activeCard ? 4 : 2}
        variants={FadeVariants}
        onClick={() => {
          setActiveCard(false);
          setActiveDrawer(false);
          setActiveTab(false);
        }}
      />
      <NavBar burgerOnClick={() => setActiveDrawer(!activeDrawer)} />
      <Drawer />
      <MainContainer mainSelect={activeCard ? "none" : "auto"}>
        <ProfileCard />
        <Padded>
          <Description color={SITE_THEME[theme].text}>
            Why hello! Thank you for taking the time to learn more about me and
            my experience in web development. <br />
            <br />
            My first experience with the web was back in 2003 when I created my
            first email account to play Neopets, a virtual pet website. Since
            then, my whole life, like many others, has revolved around using the
            web to communicate and learn from others. <br />
            <br />
            At the British Columbia Institute of Technology, I was able to
            experience a fast-paced, cooperative school environment. I developed
            technical and social skills working in teams of designers and
            developers to produce web and mobile applications through their
            Digital Design and Development Program.
          </Description>
          <Toolkit />
        </Padded>
      </MainContainer>
      <Footer />
    </PageContainer>
  );
}
