import styled from "styled-components"
import { useState } from "react";

import LeftNav from "../components/LeftNav"
import TopNav from "../components/TopNav"
import HeroText from "../components/HeroText";

import { useTheme } from "../utils/provider";

const HomePageCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
  min-height: 720px;
  padding: 20px;
  border: 1px solid green;
`

const CenterCont = styled.div`
  display: flex;
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

  const ThemeSwitcher = () => {
    setChecked(!checked);
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <HomePageCont>
      <LeftNav />
      <TopNav onChange={ThemeSwitcher } checked={checked}/>
      <CenterCont>
        <HeroText />
      </CenterCont>
    </HomePageCont>
  )
}
