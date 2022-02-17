import styled from "styled-components"
import { useEffect, useState } from "react";
import { useTheme } from "../utils/provider";

import LeftNav from "../components/LeftNav"
import TopNav from "../components/TopNav"
import HeroText from "../components/HeroText";
import LogoAnim from "../components/LogoAnim";
import Chevron from "../components/Chevron";

import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Toolkit from "../components/Toolkit";
import Projects from "../components/Projects";

const Logo = styled.img`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 99999;
  width: 120px;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
`

const HomePageCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  height: 100vh;
  min-height: 720px;
`

const NonHomePageCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CenterCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-height: 720px;
`

const SectionCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 150px;
`

// const variants = {
//   visible: {opacity: 1, x: 0, transition: {ease: "easeOut", duration: 1.5}},
//   hidden: {opacity: 0, x: 200}
// }

// const verticalVariants = {
//   visible: {opacity: 1, y: 0, transition: {ease: "easeOut", duration: 1}},
//   hidden: {opacity: 0, y: 200}
// } ANI STUFF

export default function Home() {

  const [checked, setChecked] = useState(false);
  const {theme, setTheme} = useTheme();
  const [loaded, setLoaded] = useState(false);
  // const controls = useAnimation();
  // const [ref, inView] = useInView(); ANI STUFF

  useEffect(() => {
    setTimeout(() => setLoaded(true), 4000);
    // if(inView) {
    //   controls.start("visible"); } ANI STUFF
  }
  // ,[controls, inView]
  )

  const ThemeSwitcher = () => {
    setChecked(!checked);
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if(loaded === false) {
    return(
      <HomePageCont>
        <CenterCont>
          <LogoAnim />
        </CenterCont>
      </HomePageCont>
    )
  }

  if(loaded === true) {
    return (
      <Page>
      <HomePageCont id="home">
        <Logo src="/logo.svg" />
        <LeftNav />
        <TopNav onChange={ThemeSwitcher} checked={checked}/>
        <CenterCont>
          <HeroText />
          <Chevron />
        </CenterCont>
      </HomePageCont>
      <NonHomePageCont id="about">
        <SectionCont>
          <Header headertext="About Me"/>
          <AboutMe />
        </SectionCont>
      </NonHomePageCont>
      <NonHomePageCont id="toolkit">
        <SectionCont>
          <Header headertext="Technical Toolkit"/>
          <Toolkit />
        </SectionCont>
      </NonHomePageCont>
      <NonHomePageCont id="projects">
        <SectionCont>
          <Header headertext="Projects"/>
          <Projects />
        </SectionCont>
      </NonHomePageCont>
      <NonHomePageCont id="contact">
        <SectionCont>
          <Header headertext="Get in Touch"/>
        </SectionCont>
      </NonHomePageCont>
      </Page>
    )
  }
}
