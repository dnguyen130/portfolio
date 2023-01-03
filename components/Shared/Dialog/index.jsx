import styled from "styled-components";
import { CgClose } from "react-icons/cg";
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

import { useTheme, useActiveCard } from "@/utils/provider";
import { SITE_THEME, DEVICES } from "../../../utils/variables";

const DialogCont = styled(motion.div)`
  width: 95%;
  min-width: 280px;
  max-width: 450px;
  max-height: 95vh;
  padding: 15px;
  border-radius: 10px;
  z-index: 5;
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
    width: 90%;
    max-width: 700px;
    height: 800px;
    padding: 25px;
  }
`;

const TopRow = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${DEVICES.tablet}) {
    height: 50px;
  }
`;

const CloseButton = styled(motion.div)`
  height: 100%;
  aspect-ratio: 1/1;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  color: ${(props) => props.closebuttoncolor};

  &:hover {
    color: ${(props) => props.closebuttonhovercolor};
  }
`;

const Logo = styled.img`
  border-radius: 10px;
  height: 100px;
  max-width: 90%;
  margin: 10px;

  @media (min-width: ${DEVICES.mobile}) {
    height: 120px;
    max-width: 250px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin: 0 0 10px;
  font-size: 2em;
  color: ${(props) => props.titlecolor};

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
    width: 90%;
    font-size: 3em;
  }
`;

const Description = styled.ul`
  font-size: 0.8em;
  padding-left: 15px;

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 1em;
    padding-left: 25px;
  }
`;

const DescriptionBullet = styled.li`
  margin: 5px 0 0;

  @media (min-width: ${DEVICES.tablet}) {
    margin: 10px 0 0;
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  margin: 15px 0 0;
  min-height: 35px;

  @media (min-width: ${DEVICES.tablet}) {
    width: 70%;
  }
`;

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 35px;
  grid-column: ${(props) => props.buttonspan};
  justify-self: center;
  position: relative;

  @media (min-width: ${DEVICES.tablet}) {
    width: 150px;
    height: 40px;
  }
`;

const Button = styled(motion.div)`
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

const Row = styled.div`
  margin-bottom: 10px;
  @media (min-width: ${DEVICES.tablet}) {
    display: flex;
    align-items: center;
  }
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

export default function Dialog({
  title = "Example Title",
  description,
  tags,
  infoLink,
  logoSrc,
  liveSite,
  gitClient,
  gitServer,
  lightColor,
  darkColor,
  strongColor,
  hoverColor,
  hasLogo,
  buttonName = ["Learn More", "Live Site", "Client Github", "Server Github"],
}) {
  const { theme } = useTheme();
  const { activeCard, setActiveCard } = useActiveCard();

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
              <CloseButton
                onClick={() => setActiveCard(false)}
                closebuttoncolor={SITE_THEME[theme].text}
                closebuttonhovercolor={strongColor}
                whileTap={{ scale: 0.8 }}
              >
                <CgClose size="90%" />
              </CloseButton>
            </TopRow>
            <Row>
              <Logo src={logoSrc} />
              {hasLogo && <Title titlecolor={strongColor}>{title}</Title>}
            </Row>
            {tags ? (
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
            ) : null}
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
                buttonspan={liveSite ? "span 1" : "span 2"}
              >
                <Button
                  bgbutton={strongColor}
                  hoverbutton={hoverColor}
                  whileTap={{ scale: 0.9 }}
                >
                  {buttonName[0]}
                </Button>
              </ButtonLink>
              {liveSite && (
                <ButtonLink href={liveSite} target="_blank">
                  <Button
                    bgbutton={strongColor}
                    hoverbutton={hoverColor}
                    whileTap={{ scale: 0.9 }}
                  >
                    {buttonName[1]}
                  </Button>
                </ButtonLink>
              )}
            </ButtonGroup>
            <ButtonGroup>
              {gitClient && (
                <ButtonLink
                  href={gitClient}
                  target="_blank"
                  buttonspan={gitServer ? "span 1" : "span 2"}
                >
                  <Button
                    bgbutton={strongColor}
                    hoverbutton={hoverColor}
                    whileTap={{ scale: 0.9 }}
                  >
                    {buttonName[2]}
                  </Button>
                </ButtonLink>
              )}
              {gitServer && (
                <ButtonLink href={gitServer} target="_blank">
                  <Button
                    bgbutton={strongColor}
                    hoverbutton={hoverColor}
                    whileTap={{ scale: 0.9 }}
                  >
                    {buttonName[3]}
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
