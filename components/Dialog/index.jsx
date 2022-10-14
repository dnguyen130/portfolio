import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

import { useTheme, useCardActive } from "@/utils/provider";
import { SITE_THEME, DEVICES, LINKS } from "../../utils/variables";
import styles from "./dialog.module.css";

const DialogCont = styled(motion.div)`
  width: 60%;
  min-width: 300px;
  max-width: 1200px;
  padding: 10px;
  aspect-ratio: 2/3;
  border-radius: 10px;
  z-index: 101;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: 0.2s;
`;

const TopRow = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 255, 0, 0.5);
`;

const CloseButton = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2``;

const Tags = styled.h4``;

const Description = styled.p``;

const LinkButtons = styled.button``;

const DialogVariants = {
  active: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export function Dialog() {
  const { theme } = useTheme();
  const { cardActive, setCardActive } = useCardActive();

  return (
    <DialogCont
      // dialogDisplay={cardActive ? "flex" : "none"}
      // dialogOpacity={cardActive ? "1" : "0"}
      animate={cardActive ? "active" : "inactive"}
      variants={DialogVariants}
    >
      <TopRow>
        <CloseButton onClick={() => setCardActive(false)}>
          <IconContext.Provider
            value={{
              color: SITE_THEME[theme].background,
              className: styles.closeButton,
              size: "100%",
            }}
          >
            <CgClose />
          </IconContext.Provider>
        </CloseButton>
      </TopRow>
      <Title>Hello</Title>
      <Tags>Next.js, React, Styled-Components</Tags>
      <Description>
        This is a short description about the application.
      </Description>
      <LinkButtons>Learn More</LinkButtons>
      <LinkButtons>Live Site</LinkButtons>
      <LinkButtons>GitHub</LinkButtons>
    </DialogCont>
  );
}
