import styled from "styled-components"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import LeftNav from "../components/LeftNav"
import TopNav from "../components/TopNav"
import HeroText from "../components/HeroText";
import LogoAnim from "../components/LogoAnim";

import { useTheme } from "../utils/provider";

const HomePageCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 720px;
  padding: 20px;
`

const CenterCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-width: 1400px;
  min-height: 720px;
`

export default function Home() {

  const [checked, setChecked] = useState(false);
  const {theme, setTheme} = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  })

  const ThemeSwitcher = () => {
    setChecked(!checked);
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if(loading === false) {
    return(
      <HomePageCont>
        <CenterCont>
          <LogoAnim />
        </CenterCont>
      </HomePageCont>
    )
  }

  if(loading === true) {
    return (
      <HomePageCont>
        <LeftNav />
        <TopNav onChange={ThemeSwitcher} checked={checked}/>
        <CenterCont>
          <HeroText />
        </CenterCont>
      </HomePageCont>
    )
  }
}
