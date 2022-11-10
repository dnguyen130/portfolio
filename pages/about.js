import Head from "next/head";
import styled from "styled-components";

import NavBar from "../components/Shared/NavBar";
import HeroText from "../components/Home/HeroText";

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
      <Head />
      <NavBar />
      <MainContainer>
        <HeroText />
      </MainContainer>
    </PageContainer>
  );
}
