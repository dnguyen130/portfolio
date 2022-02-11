import Image from "next/image"

import TopNav from "../components/TopNav"
import LeftNav from "../components/LeftNav"
import styled from "styled-components"

const HomePageCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid green;
  height: 100vh;
  min-height: 720px;
  padding: 20px;
`

const FixedCont = styled.div`
  position: fixed;
`

export default function Home() {
  return (
    <HomePageCont>
      <LeftNav />
    </HomePageCont>
  )
}
