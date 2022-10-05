import Link from "next/link";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";

import { useTheme } from "../../utils/provider";
import { SITE_THEME, DEVICES, LINKS } from "../../utils/variables";
import styles from "./navbar.module.css";

const NavBarCont = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.bgColor};
  padding: 20px 20px;
  z-index: 999;
  transition: 0.5s;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  transform: rotate(0deg);
`;

const LogoCont = styled.img`
  transform: rotate(45deg) scale(1);
  width: 70px;
  height: 70px;
  transition: 0.2s;
  pointer-events: none;
`;

const LogoLink = styled.a`
  width: 50px;
  height: 50px;
  transform: rotate(-45deg);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinkCont = styled.div`
  color: ${(props) => props.color};
  font-size: 1.5rem;
  display: none;
  margin-left: 100px;

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

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavCont = styled.div`
  position: relative;
  margin: 0 30px;
  cursor: pointer;
`;

const ResumeButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 3px;
  font-family: "Maven Pro", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid ${(props) => props.buttonTextColor};
  color: ${(props) => props.buttonTextColor};
  display: none;
  cursor: pointer;
  transition: 0.2s;

  @media (min-width: ${DEVICES.tablet}) {
    display: block;

    &:hover {
      border-color: ${(props) => props.buttonHoverColor};
      color: ${(props) => props.buttonHoverColor};
    }
  }
`;

const ResumeLink = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (min-width: ${DEVICES.tablet}) {
    justify-content: flex-start;
  }
`;

export default function NavBar() {
  const { theme } = useTheme();

  return (
    <NavBarCont bgColor={SITE_THEME[theme].navbar}>
      <ContentWrapper>
        <ContentGroup>
          <LogoWrapper>
            <LogoLink href="/">
              <LogoCont src="/logo.svg" alt="logo" />
            </LogoLink>
          </LogoWrapper>
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
                  <NavCont>
                    <NavLink hoverColor={SITE_THEME[theme].strong}>
                      {o.name}
                    </NavLink>
                  </NavCont>
                </Link>
              );
            })}
          </NavLinkCont>
        </ContentGroup>
        <ResumeButton
          buttonTextColor={SITE_THEME[theme].text}
          buttonHoverColor={SITE_THEME[theme].strong}
        >
          <ResumeLink target="_blank" href="/resume.pdf">
            Resume
          </ResumeLink>
        </ResumeButton>
      </ContentWrapper>
    </NavBarCont>
  );
}
