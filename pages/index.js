import Head from "next/head";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import HeroText from "../components/HeroText";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.main`
  width: 80%;
`;

export default function Home() {
  return (
    <PageContainer>
      <Head></Head>
      <NavBar />
      <MainContainer>
        <HeroText />
        <Projects />
        <Footer />
      </MainContainer>
    </PageContainer>
  );
}
