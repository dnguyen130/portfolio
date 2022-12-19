import styled from "styled-components";

import { useTheme } from "@/utils/provider";

import Underline from "@/components/Shared/Underline";
import { SITE_THEME, DEVICES } from "@/utils/variables";

const OtherCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
  width: 100%;
  text-align: left;
  color: ${(props) => props.titlecolor};

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 2rem;
  }

  @media (min-width: ${DEVICES.desktop}) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  margin: 15px 0;
  width: 90%;
  min-height: 30vh;
  font-size: 1em;
  line-height: 1.3em;
  color: ${(props) => props.color};

  @media (min-width: ${DEVICES.laptop}) {
    width: 80%;
  }
`;

export default function Other() {
  const { theme } = useTheme();

  const UnderlineProps = {
    height: "1px",
    gradientangle: "90deg",
    gradient1: SITE_THEME[theme].strong,
    borderradius: "1px",
    marginbottom: "30px",
  };

  return (
    <OtherCont>
      <Title titlecolor={SITE_THEME[theme].text}>Other Projects</Title>
      <Underline {...UnderlineProps} />
      <Description color={SITE_THEME[theme].text}>
        While my strengths lie in web development, I was also given the
        opportunity to hone my skills in design and UI/UX. Here are some other
        projects I&apos;ve worked on.
      </Description>
    </OtherCont>
  );
}
