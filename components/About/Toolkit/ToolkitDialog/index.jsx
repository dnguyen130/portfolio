import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme, useActiveCard, useActiveProject } from "@/utils/provider";
import { SITE_THEME, DEVICES } from "../../../../utils/variables";

const ToolkitDialogCont = styled(motion.div)`
  width: 90%;
  min-width: 280px;
  max-width: 500px;
  min-height: 450px;
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
    max-width: 650px;
    height: 500px;
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

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled(motion.div)`
  height: 100%;
  aspect-ratio: 1/1;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  color: ${(props) => props.closebuttoncolor};

  &:hover {
    color: ${(props) => props.closebuttonhovercolor};
  }
`;

const Title = styled.h2`
  text-align: center;
  margin: 0 0 30px;
  font-size: 2em;
  color: ${(props) => props.titlecolor};

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 2.5em;
  }

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 3em;
  }
`;

const IconCont = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ToolkitCardItem = styled.div`
  width: 50px;
  height: 50px;

  color: ${(props) => props.color};

  @media (min-width: ${DEVICES.mobile}) {
    width: 75px;
    height: 75px;
  }
`;

const ToolkitCardSVG = styled.img`
  width: 50px;
  height: 50px;

  @media (min-width: ${DEVICES.mobile}) {
    width: 75px;
    height: 75px;
  }
`;

const ToolkitTitle = styled.h4`
  color: ${(props) => props.color};
  margin: 10px 0 0;
  text-align: center;
  font-size: 0.8em;
  font-weight: 400;

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 1em;
  }

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 1.2em;
  }
`;

const ToolkitCardColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;
  width: 50%;
`;

const ToolkitDialogDescription = styled.p`
  font-size: 1em;
  line-height: 1.3em;
  color: ${(props) => props.color};
  margin: 10px 0;
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

export default function ToolkitDialog({
  title = "",
  iconArray = [],
  description = "",
  description2 = "",
}) {
  const { theme } = useTheme();
  const { activeCard, setActiveCard } = useActiveCard();

  return (
    <AnimatePresence>
      {activeCard && (
        <ToolkitDialogCont
          initial="inactive"
          animate="active"
          variants={DialogVariants}
          exit="inactive"
          bgcolor={SITE_THEME[theme].text}
          txtcolor={SITE_THEME[theme].background}
        >
          <Section>
            <TopRow>
              <CloseButton
                onClick={() => setActiveCard(false)}
                closebuttoncolor={SITE_THEME[theme].background}
                closebuttonhovercolor={SITE_THEME[theme].strong}
                whileTap={{ scale: 0.8 }}
              >
                <CgClose size="90%" />
              </CloseButton>
            </TopRow>
            <Title titlecolor={SITE_THEME[theme].background}>{title}</Title>
            <IconCont>
              {iconArray
                ? iconArray.map((o, i) => {
                    return o.src ? (
                      <ToolkitCardColumn key={i}>
                        <ToolkitCardItem>
                          <ToolkitCardSVG src={o.src} />
                        </ToolkitCardItem>
                        <ToolkitTitle color={SITE_THEME[theme].background}>
                          {o.title}
                        </ToolkitTitle>
                      </ToolkitCardColumn>
                    ) : (
                      <ToolkitCardColumn key={i}>
                        <ToolkitCardItem color={o.color}>
                          <o.logo size="100%" />
                        </ToolkitCardItem>
                        <ToolkitTitle color={SITE_THEME[theme].background}>
                          {o.title}
                        </ToolkitTitle>
                      </ToolkitCardColumn>
                    );
                  })
                : null}
            </IconCont>
          </Section>
          <Section>
            <ToolkitDialogDescription>{description}</ToolkitDialogDescription>
            <ToolkitDialogDescription>{description2}</ToolkitDialogDescription>
          </Section>
        </ToolkitDialogCont>
      )}
      ;
    </AnimatePresence>
  );
}
