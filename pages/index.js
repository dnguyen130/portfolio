import Head from "next/head";
import styled from "styled-components";

import NavBar from "../components/navbar";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <PageContainer>
      <Head></Head>
      <NavBar />
    </PageContainer>
  );
}
