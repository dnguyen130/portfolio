import Head from "next/head";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
  width: 90%;
  min-height: 30vh;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  width: 100%;
  font-size: 1em;
  line-height: 1.3em;
  color: ${(props) => props.color};

  @media (min-width: ${DEVICES.laptop}) {
    width: 80%;
  }
`;

const Padded = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoCont = styled.div`
  margin: 20px 0;
  width: 100px;
  height: 100px;
  position: relative;
`;

const LogoTitle = styled.h2`
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontfamily};
  font-size: 2em;
  margin-top: 0;
`;

const LogoQuote = styled.q`
  color: ${(props) => props.color};
  margin-bottom: 10px;
  font-size: 1em;
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
  position: relative;
`;

const SelectedProjectImage = styled(motion.div)`
  min-width: 80vw;
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
    min-height: 35vh;
    max-height: 90vh;
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
  }, [router]);

  return (
    <PageContainer>
      <Head></Head>
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
            minwidth={projectImage.orientation == "landscape" ? null : "30vw"}
          >
            <Image
              quality={100}
              layout="fill"
              src={projectImage.src}
              objectFit="contain"
            />
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
          <LogoCont>
            <MotionItem variants={item}>
              <Image layout="fill" alt="ss" src={`/${sp.url}_logo.svg`} />
            </MotionItem>
          </LogoCont>
          {sp.hasLogo && (
            <LogoTitle color={sp.color_strong} fontfamily={sp.title_font}>
              <MotionItem variants={item}>{sp.name}</MotionItem>
            </LogoTitle>
          )}
          <MotionItem variants={item}>
            <LogoQuote color={sp.color_strong}>{sp.quote}</LogoQuote>
          </MotionItem>
          <Carousel />
        </MainContainer>
      </MotionContainer>
      <Footer />
    </PageContainer>
  );
}
