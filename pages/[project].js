import Head from "next/head";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CgClose } from "react-icons/cg";

import NavBar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import Drawer from "@/components/Shared/Drawer";
import ProfileCard from "@/components/About/ProfileCard";
import Toolkit from "@/components/About/Toolkit";
import ToolkitDialog from "@/components/About/Toolkit/ToolkitDialog";
import Other from "@/components/About/Other";
import Layout from "@/components/Shared/Layout";
import Carousel from "@/components/Project/carousel";

import {
  useActiveCard,
  useActiveProject,
  useActiveDrawer,
  useInitialLoad,
  useTheme,
  useActiveTab,
  useSelectedProject,
  useProjectImage,
  useProjectSlides,
} from "@/utils/provider";

import {
  SITE_THEME,
  DEVICES,
  PROJECTLIST,
  PROJECTINFO,
} from "@/utils/variables";
import Image from "next/image";
import loading from "@/public/loading.gif";

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
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: ${(props) => props.mainSelect};
  padding: 0 10px;
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

const LogoCont = styled.div`
  margin: 30px 0;
  width: 100px;
  height: 100px;
  position: relative;

  @media (min-width: ${DEVICES.mobile}) {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;

const LogoTitle = styled.h2`
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontfamily};
  font-size: 2em;
  margin-top: 0;

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 3em;
  }
`;

const LogoQuote = styled.q`
  color: ${(props) => props.color};
  margin-bottom: 10px;
  font-size: 1em;
  text-align: center;

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 1.5em;
  }
`;

const HeaderCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 250px;
  position: relative;

  @media (min-width: ${DEVICES.mobile}) {
    flex-direction: ${(props) => props.flexDirection};
    width: 75%;
    min-width: 500px;
    height: 300px;
  }
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
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;

const MotionItem = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const QuoteCont = styled.div`
  width: 80vw;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${DEVICES.mobile}) {
    height: 100px;
  }
`;

const SelectedProjectImage = styled(motion.div)`
  min-width: 70vw;
  max-width: 90vw;
  min-height: 20vh;
  max-height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  aspect-ratio: ${(props) => props.aspect};
  border-radius: 5px;
  overflow: hidden;

  @media (min-width: ${DEVICES.mobile}) {
    min-width: ${(props) => props.minwidth};
    max-width: 90vw;
    min-height: ${(props) => props.minheight};
    max-height: 90vh;
  }
`;

const CloseButton = styled(motion.div)`
  height: 100%;
  position: absolute;
  top: 10px;
  right: 10px;
  aspect-ratio: 1/1;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  color: ${(props) => props.closebuttoncolor};

  &:hover {
    color: ${(props) => props.closebuttonhovercolor};
  }
`;

const container = {
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const ImageVariants = {
  active: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export default function Home() {
  const { activeCard, setActiveCard } = useActiveCard();
  const { activeDrawer, setActiveDrawer } = useActiveDrawer();
  const { initialLoad, setInitialLoad } = useInitialLoad();
  const { theme } = useTheme();
  const { activeTab, setActiveTab } = useActiveTab();
  const { selectedProject, setSelectedProject } = useSelectedProject();
  const sp = selectedProject;
  const router = useRouter();
  const { projectImage, setProjectImage } = useProjectImage();
  const { projectSlides } = useProjectSlides();

  useEffect(() => {
    if (initialLoad == false) {
      setInitialLoad(true);
    }
  });

  useEffect(() => {
    const ChangeProjectPage = (i) => {
      setSelectedProject(PROJECTLIST[i]);
    };

    if (
      Object.values(sp).length != 0 &&
      router &&
      router.query.project != sp.url
    ) {
      for (let j = 0; j < PROJECTLIST.length; j++) {
        if (router.query.project == PROJECTLIST[j].url) {
          ChangeProjectPage(j);
        }
      }
    }

    if (
      //Initial Project Load
      Object.keys(sp).length == 0
    ) {
      for (var i = 0; i < PROJECTLIST.length; i++) {
        if (router.query.project == PROJECTLIST[i].url) {
          setSelectedProject(PROJECTLIST[i]);
        }
      }
    }
  }, [router, setSelectedProject, sp]);

  return (
    <PageContainer>
      <Head>
        {/* Primary Meta Tags, generated at Metatags.io */}
        <title>{sp.name}</title>
        <meta name="title" content="Danny Nguyen | Front-end Developer" />
        <meta name="description" content="Learn more about my projects." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
          content="Learn more about my projects."
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
          content="Learn more about my projects."
        />
        <meta property="twitter:image" content="/cover.png" />
      </Head>
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
      <AnimatePresence>
        {projectImage && activeCard && (
          <SelectedProjectImage
            variants={ImageVariants}
            initial="inactive"
            animate="active"
            exit="inactive"
            aspect={projectImage.aspect}
            minwidth={projectImage.orientation == "landscape" ? null : "400px"}
            minheight={
              projectImage.orientation == "landscape" ? "300px" : "450px"
            }
          >
            <Image
              alt="project image"
              quality={100}
              layout="fill"
              src={projectImage.src}
              objectFit="contain"
              placeholder
            />
            <CloseButton
              onClick={() => setActiveCard(false)}
              closebuttoncolor={SITE_THEME[theme].background}
              closebuttonhovercolor={SITE_THEME[theme].strong}
              whileTap={{ scale: 0.8 }}
            >
              <CgClose size="90%" />
            </CloseButton>
          </SelectedProjectImage>
        )}
      </AnimatePresence>
      <NavBar burgerOnClick={() => setActiveDrawer(!activeDrawer)} />
      <Drawer />
      <MotionContainer
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <MainContainer mainSelect={activeCard ? "none" : "auto"}>
          <HeaderCont flexDirection={sp.hasLogo ? "row" : "column"}>
            <MotionItem variants={item}>
              <LogoCont
                width={sp.hasLogo ? "200px" : "250px"}
                height={sp.hasLogo ? "200px" : "100px"}
              >
                <Image
                  layout="fill"
                  alt="ss"
                  src={`/${sp.url}_logo.svg`}
                  placeholder
                />
              </LogoCont>
            </MotionItem>
            <QuoteCont>
              {sp.hasLogo && (
                <LogoTitle color={sp.color_strong} fontfamily={sp.title_font}>
                  <MotionItem variants={item}>{sp.name}</MotionItem>
                </LogoTitle>
              )}
              <MotionItem variants={item}>
                <LogoQuote color={sp.color_strong}>{sp.quote}</LogoQuote>
              </MotionItem>
            </QuoteCont>
          </HeaderCont>
          <MotionItem variants={item}>
            <Carousel />
          </MotionItem>
        </MainContainer>
      </MotionContainer>
      <Footer />
    </PageContainer>
  );
}
