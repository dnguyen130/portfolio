import Link from "next/link";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";

import { useTheme } from "../../utils/provider";
import { SITE_THEME, DEVICES } from "../../utils/variables";
import styles from "./navbar.module.css";

const NavBarCont = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.bgColor};
  padding: 10px 20px;

  @media (min-width: ${DEVICES.tablet}) {
    padding: 10px 50px;
    height: 120px;
  }
`;

const LogoCont = styled.img`
  width: 50px;
  height: 50px;

  @media (min-width: ${DEVICES.tablet}) {
    width: 80px;
    height: 80px;
  }
`;

const NavLinkCont = styled.div`
  color: ${(props) => props.color};
  font-size: 2rem;
  display: none;

  @media (min-width: ${DEVICES.tablet}) {
    display: flex;
  }
`;

const NavLink = styled.a`
  margin: 0 25px;
  transition: color 0.25s;
  &:hover {
    color: ${(props) => props.hoverColor};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default function NavBar() {
  const { theme } = useTheme();

  return (
    <NavBarCont bgColor={SITE_THEME[theme].navbar}>
      <LogoCont src="/logo.svg" />
      <IconContext.Provider
        value={{
          className: styles.hamburgerMenu,
          color: SITE_THEME[theme].text,
        }}
      >
        <div>
          <HiMenu />
        </div>
      </IconContext.Provider>
      <NavLinkCont color={SITE_THEME[theme].text}>
        <Link href="#" passHref>
          <NavLink hoverColor={SITE_THEME[theme].strong}>Home</NavLink>
        </Link>
        <Link href="#" passHref>
          <NavLink hoverColor={SITE_THEME[theme].strong}>About</NavLink>
        </Link>
        <Link href="#" passHref>
          <NavLink hoverColor={SITE_THEME[theme].strong}>Contact</NavLink>
        </Link>
      </NavLinkCont>
    </NavBarCont>
  );
}
