import Head from "next/head";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import HeroText from "../components/HeroText";
import Projects from "../components/Projects";

const PageContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.main`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
`;

export default function Home() {
  return (
    <PageContainer>
      <Head></Head>
      <NavBar />
      <MainContainer>
        <HeroText />
        <Projects />
      </MainContainer>
    </PageContainer>
  );
}
