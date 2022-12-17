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
    </OtherCont>
  );
}
