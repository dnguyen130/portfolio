import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";

import NavBar from "@/components/NavBar";
import HeroText from "@/components/HeroText";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Extras from "@/components/Section";
import { Dialog } from "@/components/Dialog";

import { useCardActive } from "@/utils/provider";

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

export default function Home() {
  const { cardActive, setCardActive } = useCardActive();

  return (
    <PageContainer>
      <Head></Head>
      <Fade
        fadeOpacity={cardActive ? 0.8 : 0}
        fadeDisplay={cardActive ? "block" : "none"}
        onClick={() => {
          setCardActive(false);
        }}
      />
      <NavBar />
      <MainContainer>
        <Dialog />
        <HeroText />
        <Projects />
        <Extras />
      </MainContainer>
      <Footer />
    </PageContainer>
  );
}
