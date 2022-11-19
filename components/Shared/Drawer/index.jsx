import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

import { useTheme, useActiveDrawer } from "@/utils/provider";

import { SITE_THEME, DEVICES, LINKS } from "../../../utils/variables";

const DrawerCont = styled(motion.div)`
  background-color: ${(props) => props.bgcolor};
  height: 100vh;
  width: 60%;
  max-width: 300px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 3;
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
  color: ${(props) => props.closeColor};
  transition: color 0.25s;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;

  &:hover {
    color: ${(props) => props.closeHoverColor};
  }
`;

const DrawerButton = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => props.drawerBgColor};
  color: #fff;
  transition: 0.25s;
  cursor: pointer;
  margin-bottom: 10px;
  padding-right: 20px;
  font-size: 1.3em;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.drawerFontHover};
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
`;

const DrawerVariants = {
  active: {
    display: "flex",
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  inactive: {
    x: 300,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export default function Drawer() {
  const { theme } = useTheme();
  const { activeDrawer, setActiveDrawer } = useActiveDrawer();

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
              closeColor={SITE_THEME[theme].text}
              closeHoverColor={SITE_THEME[theme].strong}
              onClick={() => setActiveDrawer(false)}
              whileTap={{ scale: 0.8 }}
            >
              <CgClose size="90%" />
            </CloseButton>
          </TopRow>
          {LINKS.map((o, i) => {
            return (
              <DrawerButton
                drawerBgColor={SITE_THEME[theme].navbar}
                drawerFontHover={SITE_THEME[theme].strong}
                gradient={SITE_THEME[theme].strong}
                key={i}
              >
                {o.name}
                <Underline gradient1={SITE_THEME[theme].strong} />
              </DrawerButton>
            );
          })}
        </DrawerCont>
      )}
    </AnimatePresence>
  );
}
