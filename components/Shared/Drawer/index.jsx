import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

import { useTheme, useActiveDrawer } from "@/utils/provider";

import { SITE_THEME, LINKS, PROJECTLIST } from "../../../utils/variables";

const DrawerCont = styled(motion.div)`
  background-color: ${(props) => props.bgcolor};
  position: relative;
  height: 100vh;
  width: clamp(250px, 50%, 300px);
  /* width: 50%;
  max-width: 300px; */
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 4;
  top: 0;
`;

const TopRow = styled.div`
  height: 100px;
  width: 100%;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseButton = styled(motion.div)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${(props) => props.closecolor};
  transition: color 0.25s;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;

  &:hover {
    color: ${(props) => props.closehover};
  }
`;

const DrawerButton = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => props.drawerbgcolor};
  transition: 0.25s;
  cursor: pointer;
  margin-bottom: 10px;
  padding-right: 20px;
  font-size: 1.3em;
  font-weight: 500;
  z-index: 10;

  &:hover {
    color: ${(props) => props.drawerfonthover};
    background-color: ${(props) => props.drawerbghover};
  }
`;

const ProjectButton = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.drawerbgcolor};
  color: ${(props) => props.projectbuttoncolor};
  transition: 0.25s;
  cursor: pointer;
  padding: 0 20px;
  font-size: 1.3em;
  font-weight: 500;
  z-index: 10;

  &:hover {
    color: ${(props) => props.drawerfonthover};
    background-color: ${(props) => props.drawerbghover};
  }
`;
const Underline = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    270deg,
    ${(props) => props.gradient1},
    transparent
  );
  border-radius: 1px;
  opacity: 0;
  transition: 0.25s;

  ${DrawerButton}:hover & {
    opacity: 1;
  }

  ${ProjectButton}:hover & {
    opacity: 1;
  }
`;

const ButtonLabel = styled.h2`
  margin: 0;
  font-size: 1em;
  font-weight: 500;
  color: ${(props) => props.buttonlabelcolor};

  ${DrawerButton}:hover & {
    color: ${(props) => props.closehovercolor};
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.buttonwrappercolor};
`;

const ArrowCont = styled.div`
  position: absolute;
  left: 20px;
  top: ${(props) => props.arrowTop};
  transform: ${(props) => props.arrowRotate};
  transition: 0.2s;
`;

const ProjectSubMenu = styled.div`
  background-color: ${(props) => props.submenubg};
  width: 100%;
  height: ${(props) => props.submenuheight};
  position: relative;
  z-index: ${(props) => props.submenuz};
  opacity: ${(props) => props.submenuopacity};
  transition: 0.3s;
  margin-top: 10px;
  padding: 0 10px;
`;

const SubMenuButton = styled.div`
  cursor: pointer;
  width: 100%;
  height: ${(props) => props.submenubuttonheight};
  margin-bottom: 10px;
  background-color: ${(props) => props.submenubuttoncolor};
  transition: 0.3s;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.submenubghover};
  }
`;

const SubMenuButtonLabel = styled.h3`
  margin: 0;
  color: ${(props) => props.submenufontcolor};
  font-weight: 300;
  transition: 0.2s;

  ${SubMenuButton}:hover & {
    color: ${(props) => props.submenufonthovercolor};
  }
`;

const MenuLink = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DrawerVariants = {
  inactive: {
    x: 300,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  active: {
    display: "flex",
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  transitionEnd: {
    display: "none",
  },
};

export default function Drawer() {
  const { theme } = useTheme();
  const { activeDrawer, setActiveDrawer } = useActiveDrawer();
  const [activeProjectButton, setActiveProjectButton] = useState(false);

  return (
    <AnimatePresence>
      {activeDrawer && (
        <DrawerCont
          bgcolor={SITE_THEME[theme].background}
          initial="inactive"
          animate="active"
          variants={DrawerVariants}
          exit="inactive"
        >
          <TopRow>
            <CloseButton
              closecolor={SITE_THEME[theme].text}
              closehover={SITE_THEME[theme].strong}
              onClick={() => setActiveDrawer(false)}
              whileTap={{ scale: 0.8 }}
            >
              <CgClose size="90%" />
            </CloseButton>
          </TopRow>
          <ButtonWrapper buttonwrappercolor={SITE_THEME[theme].background}>
            {LINKS.map((o, i) => {
              return (
                <Link href={o.url} passHref legacyBehavior key={i}>
                  <DrawerButton
                    drawerbgcolor={SITE_THEME[theme].navbar}
                    drawerbghover={SITE_THEME[theme].drawerhover}
                    drawerfonthover={SITE_THEME[theme].strong}
                    gradient={SITE_THEME[theme].strong}
                    onClick={() => setActiveDrawer(false)}
                  >
                    <MenuLink>
                      <ButtonLabel
                        buttonlabelcolor={SITE_THEME[theme].text}
                        closehovercolor={SITE_THEME[theme].strong}
                      >
                        {o.name}
                      </ButtonLabel>
                      <Underline gradient1={SITE_THEME[theme].strong} />
                    </MenuLink>
                  </DrawerButton>
                </Link>
              );
            })}
            <DrawerButton
              drawerbgcolor={SITE_THEME[theme].navbar}
              drawerbghover={SITE_THEME[theme].drawerhover}
              drawerfonthover={SITE_THEME[theme].strong}
              gradient={SITE_THEME[theme].strong}
            >
              <MenuLink href="/resume.pdf" target="_blank">
                <ButtonLabel
                  buttonlabelcolor={SITE_THEME[theme].text}
                  closehovercolor={SITE_THEME[theme].strong}
                >
                  Resume
                </ButtonLabel>
              </MenuLink>
              <Underline gradient1={SITE_THEME[theme].strong} />
            </DrawerButton>
            <ProjectButton
              drawerbgcolor={SITE_THEME[theme].navbar}
              drawerbghover={SITE_THEME[theme].drawerhover}
              drawerfonthover={SITE_THEME[theme].strong}
              gradient={SITE_THEME[theme].strong}
              onClick={() => setActiveProjectButton(!activeProjectButton)}
              projectbuttoncolor={
                activeProjectButton
                  ? SITE_THEME[theme].strong
                  : SITE_THEME[theme].text
              }
            >
              <ArrowCont
                arrowTop={
                  activeProjectButton ? "calc(50% - 15px)" : "calc(50% - 10px)"
                }
                arrowRotate={
                  activeProjectButton ? "rotate(180deg)" : "rotate(0deg)"
                }
              >
                <FaChevronDown size="1em" />
              </ArrowCont>
              <ButtonLabel>Projects</ButtonLabel>
              <Underline gradient1={SITE_THEME[theme].strong} />
            </ProjectButton>
            <ProjectSubMenu
              submenuopacity={activeProjectButton ? "1" : "0"}
              submenuz={activeProjectButton ? "1" : "-1"}
              submenuheight={activeProjectButton ? "auto" : "0"}
              submenubg={SITE_THEME[theme].background}
              submenubghover={SITE_THEME[theme].drawerhover}
            >
              {PROJECTLIST.map((o, i) => {
                return (
                  <Link href={o.url} passHref key={i} legacyBehavior>
                    <SubMenuButton
                      submenubuttonheight={activeProjectButton ? "40px" : "0"}
                      submenubuttoncolor={SITE_THEME[theme].navbar}
                      submenubghover={SITE_THEME[theme].drawerhover}
                    >
                      <MenuLink>
                        <SubMenuButtonLabel
                          submenufontcolor={SITE_THEME[theme].text}
                          submenufonthovercolor={SITE_THEME[theme].strong}
                        >
                          {o.name}
                        </SubMenuButtonLabel>
                      </MenuLink>
                    </SubMenuButton>
                  </Link>
                );
              })}
            </ProjectSubMenu>
          </ButtonWrapper>
        </DrawerCont>
      )}
    </AnimatePresence>
  );
}
