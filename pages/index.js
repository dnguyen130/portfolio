import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";

import NavBar from "@/components/NavBar";
import HeroText from "@/components/HeroText";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Extras from "@/components/Section";
import { Dialog } from "@/components/Dialog";

import { useActiveCard, useActiveProject } from "@/utils/provider";

import { PROJECTLIST } from "../utils/variables";

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
  z-index: 100;
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
  const ap = activeProject;

  return (
    <PageContainer>
      <Head></Head>
      <Fade
        animate={activeCard ? "active" : "inactive"}
        variants={FadeVariants}
        onClick={() => {
          setActiveCard(false);
        }}
      />
      <NavBar />
      <MainContainer mainSelect={activeCard ? "none" : "auto"}>
        <HeroText />
        <Projects />
        <Extras />
      </MainContainer>
      <Footer />
      <Dialog
        title={ap.name}
        tags={ap.tags}
        description={ap.description}
        infoLink={ap.url}
        liveSite={ap.live_site}
        gitClient={ap.github_client ? ap.github_client : null}
        gitServer={ap.github_server ? ap.github_server : null}
      />
    </PageContainer>
  );
}
