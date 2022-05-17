import Head from "next/head";
import styled from "styled-components";

import NavBar from "../components/navbar";
import HeroText from "../components/herotext";

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
      </MainContainer>
    </PageContainer>
  );
}
