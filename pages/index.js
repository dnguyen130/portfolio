import styled from "styled-components"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import LeftNav from "../components/LeftNav"
import TopNav from "../components/TopNav"
import HeroText from "../components/HeroText";
import LogoAnim from "../components/LogoAnim";
import Chevron from "../components/Chevron";

import Header from "../components/Header";

import { useTheme } from "../utils/provider";
import AboutMe from "../components/AboutMe";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
  width: 60%;
  min-height: 720px;
`

const SectionCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: 1px solid red;
`

export default function Home() {

  const [checked, setChecked] = useState(false);
  const {theme, setTheme} = useTheme();
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  })

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
      <HomePageCont>
        <LeftNav />
        <TopNav onChange={ThemeSwitcher} checked={checked}/>
        <CenterCont>
          <HeroText />
          <Chevron />
        </CenterCont>
      </HomePageCont>
      <NonHomePageCont>
        <SectionCont>
          <Header headertext="About Me"/>
          <AboutMe />
        </SectionCont>
      </NonHomePageCont>
      </Page>
    )
  }
}
