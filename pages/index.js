import Head from "next/head";
import styled from "styled-components";

import NavBar from "@/components/NavBar";
import HeroText from "@/components/HeroText";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Extras from "@/components/Section";

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

export default function Home() {
  return (
    <PageContainer>
      <Head></Head>
      <NavBar />
      <MainContainer>
        <HeroText />
        <Projects />
        <Extras />
      </MainContainer>
      <Footer />
    </PageContainer>
  );
}
