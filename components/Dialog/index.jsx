import { useEffect, useState } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiExpo,
} from "react-icons/si";

import { useTheme, useActiveCard, useActiveProject } from "@/utils/provider";
import { SITE_THEME, DEVICES, LINKS } from "../../utils/variables";
import styles from "./dialog.module.css";

const DialogCont = styled(motion.div)`
  width: 90%;
  min-width: 280px;
  max-width: 450px;
  max-height: 90%;
  padding: 15px;
  border-radius: 10px;
  z-index: 101;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.txtcolor};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.2s;

  @media (min-width: ${DEVICES.tablet}) {
    aspect-ratio: 7/8;
    max-width: 700px;
    max-height: 800px;
    padding: 25px;
  }
`;

const TopRow = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  border-radius: 10px;
  height: 100px;
  max-width: 90%;
  margin: 10px;

  @media (min-width: ${DEVICES.mobile}) {
    height: 150px;
    max-width: 250px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin: 0 0 10px;
  font-size: 2em;
  color: ${(props) => props.titleColor};

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 2.5em;
  }

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 3em;
  }
`;

const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 2.5em;

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 3.5em;
  }
`;

const Description = styled.ul`
  font-size: 1em;
  padding-left: 15px;

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 1.2em;
  }
`;

const DescriptionBullet = styled.li`
  margin: 5px 0 0;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  margin: 15px 0 0;

  @media (min-width: ${DEVICES.tablet}) {
    margin: 25px 0 0;
  }
`;

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 35px;
  grid-column: ${(props) => props.buttonSpan};
  justify-self: center;
  position: relative;

  @media (min-width: ${DEVICES.tablet}) {
    width: 150px;
    height: 50px;
  }
`;

const Button = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgbutton};
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1em;
  position: absolute;
  transition: 0.1s;

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 1.3em;
  }

  &:hover {
    box-shadow: 4px 4px 3px black;
    background-color: ${(props) => props.hoverbutton};
  }
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const ICONS = [
  {
    key: "react",
    name: "React",
    element: SiReact,
  },
  {
    key: "nextdotjs",
    name: "Next.js",
    element: SiNextdotjs,
  },
  {
    key: "styled-components",
    name: "styled-components",
    element: SiStyledcomponents,
  },
  {
    key: "reactnative",
    name: "React Native",
    element: SiReact,
  },
  {
    key: "mongodb",
    name: "MongoDB",
    element: SiMongodb,
  },
  {
    key: "php",
    name: "PHP",
    element: SiPhp,
  },
  {
    key: "mysql",
    name: "MySQL",
    element: SiMysql,
  },
  {
    key: "expo",
    name: "Expo",
    element: SiExpo,
  },
];

export function Dialog({
  title = "Example Title",
  description,
  tags,
  infoLink,
  liveSite,
  gitClient,
  gitServer,
  lightColor,
  darkColor,
  strongColor,
  hoverColor,
  hasLogo,
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
          bgcolor={darkColor}
          txtcolor={lightColor}
        >
          <Section>
            <TopRow>
              <CloseButton onClick={() => setActiveCard(false)}>
                <IconContext.Provider
                  value={{
                    color: SITE_THEME[theme].text,
                    className: styles.closeButton,
                    size: "100%",
                  }}
                >
                  <CgClose />
                </IconContext.Provider>
              </CloseButton>
            </TopRow>
            <Logo src={`/${infoLink}_logo.svg`} />
            {hasLogo && <Title titleColor={strongColor}>{title}</Title>}
            <TagsWrapper>
              {tags.map((o, i) => {
                var j = 0;
                for (i = 0; i < o.length; i++) {
                  for (j = 0; j < ICONS.length; j++) {
                    if (o == ICONS[j].name) {
                      const IconMatch = ICONS[j].element;
                      return <IconMatch key={ICONS[j].key} />;
                    }
                  }
                }
              })}
            </TagsWrapper>
            <Description>
              {description.map((o, i) => {
                return <DescriptionBullet key={i}>{o}</DescriptionBullet>;
              })}
            </Description>
          </Section>
          <Section>
            <ButtonGroup>
              <ButtonLink
                href={infoLink}
                buttonSpan={liveSite ? "span 1" : "span 2"}
              >
                <Button bgbutton={strongColor} hoverbutton={hoverColor}>
                  Learn More
                </Button>
              </ButtonLink>
              {liveSite && (
                <ButtonLink href={liveSite}>
                  <Button bgbutton={strongColor} hoverbutton={hoverColor}>
                    Live Site
                  </Button>
                </ButtonLink>
              )}
            </ButtonGroup>
            <ButtonGroup>
              <ButtonLink
                href={gitClient}
                buttonSpan={gitServer ? "span 1" : "span 2"}
              >
                <Button bgbutton={strongColor} hoverbutton={hoverColor}>
                  Client Github
                </Button>
              </ButtonLink>
              {gitServer && (
                <ButtonLink href={gitServer}>
                  <Button bgbutton={strongColor} hoverbutton={hoverColor}>
                    Server Github
                  </Button>
                </ButtonLink>
              )}
            </ButtonGroup>
          </Section>
        </DialogCont>
      )}
    </AnimatePresence>
  );
}
