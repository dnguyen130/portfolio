import styled from "styled-components"
import { useState } from "react";

import LeftNav from "../components/LeftNav"
import TopNav from "../components/TopNav"

const HomePageCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 100vw;
  min-height: 720px;
  padding: 20px;
  border: 1px solid green;
`

export default function Home() {

  const [checked, setChecked] = useState(false);

  return (
    <HomePageCont>
      <LeftNav />
      <TopNav onChange={()=>setChecked(!checked)} checked={checked}/>
    </HomePageCont>
  )
}
