import styled from "styled-components";
import Link from "next/link";
import { FaLaptopCode, FaRegUser, FaHome, FaRegFolderOpen, FaPhone } from "react-icons/fa";
import { site_theme } from "../../utils/variables";
import { useTheme } from "../../utils/provider";

const LinkCont = styled.a`
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  margin: 15px;
  `

const IconCont = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  color: ${props=>props.clr};  
  vertical-align: middle;
  background: none;
  border: 0;
  position: relative;
  transition: 0.25s;
  
  &::before, &::after{
    content: "";
    position: absolute;
    border: 2px solid transparent;
    width: 0;
    height: 0;
    box-sizing: inherit;
    z-index: -99999;

  }

  &::before {
    top: 0;
    left: 0;

  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {

    color: ${props=>props.hvrclr};

    &::before, &::after{
      width: 100%;
      height: 100%;
    }

    &::before {
      border-top-color: ${props=>props.borderColor};
      border-right-color: ${props=>props.borderColor};
      transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
    }

    &::after {
      border-bottom-color: ${props=>props.borderColor};
      border-left-color: ${props=>props.borderColor};
      transition: border-color 0s ease-out 0.2s, width 0.1s ease-out 0.2s, height 0.1s ease-out 0.3s;
    }
  }
`

const ReverseIconCont = styled.div`
  transform: rotate(-45deg);
`

const DiamondIcon = ({

  children,
  href = "#home",
  onClick = ()=>{}

}) => {

  const {theme} = useTheme();

  return (
    <Link href={href} passHref>
      <LinkCont>
        <IconCont IconCont borderColor={site_theme[theme].strong} clr={site_theme[theme].text} hvrclr={site_theme[theme].strong}>
          <ReverseIconCont>
            {children}
          </ReverseIconCont>
        </IconCont>
      </LinkCont>
    </Link>
  )
}

export default DiamondIcon;