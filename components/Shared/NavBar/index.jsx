import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import {
  useTheme,
  useActiveTab,
  useActiveDrawer,
  useActiveCard,
} from "../../../utils/provider";
import {
  SITE_THEME,
  DEVICES,
  LINKS,
  PROJECTLIST,
} from "../../../utils/variables";

const NavBarCont = styled.header`
  position: fixed;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.bgColor};
  padding: 20px 20px;
  z-index: 2;
  transition: 0.5s;
`;

const HamburgerCont = styled(motion.div)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${(props) => props.hamburgercolor};
  transition: 0.25s;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;

  &:hover {
    color: ${(props) => props.hamburgerhovercolor};
  }

  @media (min-width: ${DEVICES.laptop}) {
    display: none;
  }
`;

const NavBarPlaceholder = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
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

  @media (min-width: ${DEVICES.laptop}) {
    display: flex;
  }
`;

const NavLink = styled.a`
  margin: 0 30px;
  transition: color 0.25s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hovercolor};
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
  display: flex;
`;

const ResumeButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 3px;
  font-family: "Maven Pro", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid ${(props) => props.buttontextcolor};
  color: ${(props) => props.buttontextcolor};
  display: none;
  cursor: pointer;
  transition: 0.2s;

  @media (min-width: ${DEVICES.laptop}) {
    display: block;

    &:hover {
      border-color: ${(props) => props.buttonhovercolor};
      color: ${(props) => props.buttonhovercolor};
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

  @media (min-width: ${DEVICES.laptop}) {
    justify-content: flex-start;
  }
`;

const ProjectButton = styled.div`
  display: flex;
  transition: color 0.25s;
  cursor: pointer;
  color: ${(props) => props.color};

  &:hover {
    color: ${(props) => props.hovercolor};
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

const Dropdown = styled(motion.div)`
  width: 150px;
  background-color: white;
  position: absolute;
  top: 40px;
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 5px;
  z-index: 5;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const DropdownItem = styled.div`
  width: 90%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 0.8em;
  transition: 0.2s;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hovercolor};
    background-color: ${(props) => props.hoverbgcolor};
  }

  &:first-child {
    margin-top: 10px;
  }
`;

const ArrowCont = styled.div`
  position: relative;
  margin-left: 20px;
  width: 20px;
  height: 20px;
  top: ${(props) => props.arrowtop};
  transform: ${(props) => props.arrowrotate};
  transition: 0.2s;
`;

const DropdownVariants = {
  inactive: {
    height: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  active: {
    display: "flex",
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  transitionEnd: {
    display: "none",
  },
};

export default function NavBar({ burgerOnClick = () => {} }) {
  const { theme } = useTheme();
  const { activeTab, setActiveTab } = useActiveTab();
  const { activeDrawer } = useActiveDrawer();
  const { activeCard } = useActiveCard();

  return (
    <>
      <NavBarPlaceholder />
      <NavBarCont
        bgColor={SITE_THEME[theme].navbar}
        zindex={activeDrawer || activeCard ? 1 : 2}
        onClick={() => setActiveTab(false)}
      >
        <ContentWrapper>
          <ContentGroup>
            <LogoWrapper>
              <Link href="/" passHref legacyBehavior>
                <LogoLink>
                  <LogoCont src="/logo.svg" alt="logo" />
                </LogoLink>
              </Link>
            </LogoWrapper>
            <HamburgerCont
              hamburgercolor={SITE_THEME[theme].text}
              hamburgerhovercolor={SITE_THEME[theme].strong}
              onClick={burgerOnClick}
              whileTap={{ scale: 0.8, transition: { duration: 0.01 } }}
            >
              <HiMenu size="90%" />
            </HamburgerCont>
            <NavLinkCont color={SITE_THEME[theme].text}>
              {LINKS.map((o, i) => {
                return (
                  <Link key={i} href={o.url} passHref legacyBehavior>
                    <NavCont>
                      <NavLink hovercolor={SITE_THEME[theme].strong}>
                        {o.name}
                      </NavLink>
                    </NavCont>
                  </Link>
                );
              })}
              <NavCont>
                <ProjectButton
                  color={
                    activeTab
                      ? SITE_THEME[theme].strong
                      : SITE_THEME[theme].text
                  }
                  hovercolor={SITE_THEME[theme].strong}
                  onClick={(e) => (
                    e.stopPropagation(), setActiveTab(!activeTab)
                  )}
                >
                  Projects
                  <ArrowCont
                    arrowtop={
                      activeTab ? "calc(50% - 6px)" : "calc(50% - 12px)"
                    }
                    arrowrotate={activeTab ? "rotate(180deg)" : "rotate(0deg)"}
                  >
                    <FaChevronDown size="100%" />
                  </ArrowCont>
                </ProjectButton>
                <AnimatePresence>
                  {activeTab && (
                    <Dropdown
                      initial="inactive"
                      animate="active"
                      variants={DropdownVariants}
                      exit="inactive"
                      bordercolor={SITE_THEME[theme].strong}
                      bgcolor={SITE_THEME[theme].background}
                    >
                      {PROJECTLIST.map((o, i) => {
                        return (
                          <Link href={o.url} passHref key={i} legacyBehavior>
                            <DropdownItem
                              bgcolor={SITE_THEME[theme].navbar}
                              color={SITE_THEME[theme].text}
                              height={activeTab ? "40px" : 0}
                              hoverbgcolor={SITE_THEME[theme].drawerhover}
                              hovercolor={SITE_THEME[theme].strong}
                            >
                              {o.name}
                            </DropdownItem>
                          </Link>
                        );
                      })}
                    </Dropdown>
                  )}
                </AnimatePresence>
              </NavCont>
            </NavLinkCont>
          </ContentGroup>
          <ResumeButton
            buttontextcolor={SITE_THEME[theme].text}
            buttonhovercolor={SITE_THEME[theme].strong}
          >
            <ResumeLink target="_blank" href="/resume.pdf">
              Resume
            </ResumeLink>
          </ResumeButton>
        </ContentWrapper>
      </NavBarCont>
    </>
  );
}
