import { useEffect, useState } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme, useActiveCard, useActiveProject } from "@/utils/provider";
import { SITE_THEME, DEVICES, LINKS } from "../../utils/variables";
import styles from "./dialog.module.css";

const DialogCont = styled(motion.div)`
  width: 70%;
  min-width: 300px;
  max-width: 600px;
  padding: 10px;
  aspect-ratio: 3/4;
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

  @media (min-width: ${DEVICES.mobile}) {
    aspect-ratio: 1/1;
    width: 50%;
  }
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

const TagsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Description = styled.p``;

const LinkButtons = styled.button``;

const DialogVariants = {
  active: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export function Dialog({
  title = "Example Title",
  tags = ["tag 1", "tag 2", "tag 3"],
  description = "Example description.",
  infoLink,
  liveSite,
  gitClient,
  gitServer,
}) {
  const { theme } = useTheme();
  const { activeCard, setActiveCard } = useActiveCard();
  const { activeProject } = useActiveProject();

  return (
    <AnimatePresence>
      {activeCard && (
        <DialogCont
          initial="inactive"
          animate="active"
          variants={DialogVariants}
          exit="inactive"
        >
          <TopRow>
            <CloseButton onClick={() => setActiveCard(false)}>
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
          <Title>{title}</Title>
          <TagsWrapper>
            {tags.map((i) => (
              <Tags key={i}>{i}</Tags>
            ))}
          </TagsWrapper>
          <Description>{description}</Description>
          <LinkButtons>{infoLink}</LinkButtons>
          {liveSite && <LinkButtons>{liveSite}</LinkButtons>}
          <LinkButtons>{gitClient}</LinkButtons>
          {gitServer && <LinkButtons>{gitServer}</LinkButtons>}
        </DialogCont>
      )}
    </AnimatePresence>
  );
}
