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

export default function Home() {
  return (
    <HomePageCont>
      <LeftNav />
    </HomePageCont>
  )
}
