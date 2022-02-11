import styled from "styled-components";
import Image from "next/image";

const TopNavCont = styled.div`

`

const TopNav = ({

}) => {
  return (
    <TopNavCont>
      <Image src="/Logo.svg" height="100px" width="100px" />
    </TopNavCont>
  )
}

export default TopNav;