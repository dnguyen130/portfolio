import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";

import NavBar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import Drawer from "@/components/Shared/Drawer";
import ProfileCard from "@/components/About/ProfileCard";
import Toolkit from "@/components/About/Toolkit";
import ToolkitDialog from "@/components/About/Toolkit/ToolkitDialog";
import Other from "@/components/About/Other";
import Layout from "@/components/Shared/Layout";

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

const DescriptionCont = styled.div`
  width: 100%;
  min-height: calc(50vh - 100px);
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: ${DEVICES.laptop}) {
    width: 90%;
    max-width: 1200px;
  }
`;

const Description = styled.p`
  width: 100%;
  height: 100%;
  font-size: 1em;
  line-height: 1.3em;
  color: ${(props) => props.color};
  margin: 0 0 15px;

  @media (min-width: ${DEVICES.tablet}) {
    width: 90%;
    font-size: 1.2em;
    line-height: 1.4em;
  }

  @media (min-width: ${DEVICES.desktop}) {
    width: 80%;
    font-size: 1.3em;
    line-height: 1.5em;
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

const MotionContainer = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;

const MotionItem = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const container = {
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      staggerChildren: 0.7,
      delayChildren: 1.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ease: "easeOut", duration: 0.7 },
  },
};

export default function Home() {
  const { activeCard, setActiveCard } = useActiveCard();
  const { activeProject } = useActiveProject();
  const ap = activeProject;
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
    <Layout>
      <PageContainer>
        <Head>
          {/* Primary Meta Tags, generated at Metatags.io */}
          <title>Danny Nguyen | Front-end Developer</title>
          <meta name="title" content="Danny Nguyen | Front-end Developer" />
          <meta
            name="description"
            content="A little bit about me and my career."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta charSet="UTF-8" />
          <link rel="canonical" href="https://dannynguyen.ca/" />
          {/* Favicon Tags, generated at realfavicongenerator.net */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#15ade4" />
          <meta name="msapplication-TileColor" content="#050610" />
          <meta name="theme-color" content="#ffffff" />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dannynguyen.ca/" />
          <meta
            property="og:title"
            content="Danny Nguyen | Front-end Developer"
          />
          <meta
            property="og:description"
            content="A little bit about me and my career."
          />
          <meta property="og:image" content="/cover.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dannynguyen.ca/" />
          <meta
            property="twitter:title"
            content="Danny Nguyen | Front-end Developer"
          />
          <meta
            property="twitter:description"
            content="A little bit about me and my career."
          />
          <meta property="twitter:image" content="/cover.png" />
        </Head>
        <ToolkitDialog
          title={ap[0] ? ap[0] : null}
          iconArray={ap[1] ? ap[1][0] : null}
          description={ap[1] ? ap[1][1].description : null}
          description2={ap[1] ? ap[1][1].description2 : null}
        />
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
            <MotionContainer
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ width: "100%" }}
            >
              <DescriptionCont>
                <MotionItem variants={item}>
                  <Description color={SITE_THEME[theme].text}>
                    Why hello! Thank you for taking the time to learn more about
                    me and my experience in web development.{" "}
                  </Description>
                  <Description color={SITE_THEME[theme].text}>
                    My first experience with the web was back in 2003 when I
                    created my first email account to play Neopets, a virtual
                    pet website. Since then, my whole life, like many others,
                    has revolved around using the web to communicate and learn
                    from others.
                  </Description>
                  <Description color={SITE_THEME[theme].text}>
                    At the British Columbia Institute of Technology, I was able
                    to experience a fast-paced, cooperative school environment.
                    I developed technical and social skills working in teams of
                    designers and developers to produce web and mobile
                    applications through their Digital Design and Development
                    Program.
                  </Description>
                </MotionItem>
              </DescriptionCont>
              <Toolkit />
              {/* <Other /> */}
            </MotionContainer>
          </Padded>
        </MainContainer>
        <Footer />
      </PageContainer>
    </Layout>
  );
}
