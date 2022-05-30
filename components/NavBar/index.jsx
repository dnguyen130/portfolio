import Link from "next/link";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";

import { useTheme } from "../../utils/provider";
import { SITE_THEME, DEVICES, LINKS } from "../../utils/variables";
import styles from "./navbar.module.css";

const NavBarCont = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 100px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.bgColor};
  padding: 10px 20px;
  z-index: 999;

  @media (min-width: ${DEVICES.tablet}) {
    justify-content: center;
  }
`;

const LogoCont = styled.img`
  width: 70px;
  height: 70px;
`;

const NavLinkCont = styled.div`
  color: ${(props) => props.color};
  font-size: 1.5rem;
  // hides links on mobileL
  display: none;

  @media (min-width: ${DEVICES.tablet}) {
    display: flex;
  }
`;

const NavLink = styled.a`
  margin: 0 30px;
  transition: color 0.25s;
  &:hover {
    color: ${(props) => props.hoverColor};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default function NavBar() {
  const { theme } = useTheme();

  return (
    <NavBarCont bgColor={SITE_THEME[theme].navbar}>
      <IconContext.Provider
        value={{
          className: styles.hamburgerMenu,
          color: SITE_THEME[theme].text,
        }}
      >
        <HiMenu />
      </IconContext.Provider>
      <NavLinkCont color={SITE_THEME[theme].text}>
        {LINKS.map((o, i) => {
          return (
            <Link key={i} href={o.url} passHref>
              <NavLink hoverColor={SITE_THEME[theme].strong}>{o.name}</NavLink>
            </Link>
          );
        })}
      </NavLinkCont>
    </NavBarCont>
  );
}
