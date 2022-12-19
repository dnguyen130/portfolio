import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import NavBar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import Drawer from "@/components/Shared/Drawer";
import ProfileCard from "@/components/About/ProfileCard";
import Toolkit from "@/components/About/Toolkit";
import ToolkitDialog from "@/components/About/Toolkit/ToolkitDialog";
import Other from "@/components/About/Other";

import {
  useActiveCard,
  useActiveProject,
  useActiveDrawer,
  useInitialLoad,
  useTheme,
  useActiveTab,
  useSelectedProject,
} from "@/utils/provider";

import { SITE_THEME, DEVICES, PROJECTLIST } from "@/utils/variables";
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

export default function Home() {
  const { activeCard, setActiveCard } = useActiveCard();
  const { activeProject } = useActiveProject();
  const ap = activeProject;
  const { activeDrawer, setActiveDrawer } = useActiveDrawer();
  const { initialLoad, setInitialLoad } = useInitialLoad();
  const { theme } = useTheme();
  const { activeTab, setActiveTab } = useActiveTab();
  const { selectedProject, setSelectedProject } = useSelectedProject();
  const router = useRouter();

  useEffect(() => {
    if (initialLoad == false) {
      setInitialLoad(true);
    }
  });

  if (
    //Initial Project Load
    Object.keys(selectedProject).length == 0 ||
    //If project changes
    router.query.project != selectedProject.url
  ) {
    for (var i = 0; i < PROJECTLIST.length; i++) {
      if (router.query.project == PROJECTLIST[i].url) {
        setSelectedProject(PROJECTLIST[i]);
      }
    }
  }

  return (
    <PageContainer>
      <Head></Head>
      <ToolkitDialog
        title={ap[0] ? ap[0] : null}
        iconArray={ap[1] ? ap[1][0] : null}
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
        <p>{selectedProject.name}</p>
        <Image
          width="100px"
          height="100px"
          alt="ss"
          src={`/screenshots/${selectedProject.name}_Dashboard.png`}
        />
      </MainContainer>
      <Footer />
    </PageContainer>
  );
}
