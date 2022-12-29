import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import { DEVICES, SITE_THEME } from "@/utils/variables";
import { useTheme } from "@/utils/provider";

import Underline from "@/components/Shared/Underline";

const ProfileCardCont = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ProfileHero = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  position: absolute;
  z-index: 1;
`;

const HeroWrapper = styled.div`
  background-size: cover;
  background-position: 55% center;
  z-index: -2;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  border: 5px solid ${(props) => props.bordercolor};
  border-left: 0px;
  border-right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeroWrapperImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const ProfileTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.color};
  font-size: 3.5rem;
  z-index: 1;

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 4rem;
  }
`;

const GradientTransparency = styled.div`
  position: absolute;
  background: linear-gradient(
    to right,
    ${(props) => props.gradientbg},
    70%,
    rgba(0, 0, 0, 0)
  );
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const container = {
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const rightItem = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const MotionContainer = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;

const MotionItem = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

export default function ProfileCard() {
  const { theme } = useTheme();

  return (
    <ProfileCardCont>
      <MotionContainer
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <MotionItem variants={item}>
          <ProfileHero bordercolor={SITE_THEME[theme].strong}>
            <ProfileTitle color={SITE_THEME[theme].strong}>
              About Me
            </ProfileTitle>
          </ProfileHero>
        </MotionItem>
        <MotionItem variants={rightItem}>
          <GradientTransparency gradientbg={SITE_THEME[theme].background} />
          <HeroWrapper bordercolor={SITE_THEME[theme].strong}>
            <HeroWrapperImage
              src="/test.jpeg"
              layout="fill"
              alt="cover"
              objectFit="cover"
            />
          </HeroWrapper>
        </MotionItem>
      </MotionContainer>
    </ProfileCardCont>
  );
}
