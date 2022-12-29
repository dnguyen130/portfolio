import styled from "styled-components";

import { useTheme } from "@/utils/provider";
import { SITE_THEME, DEVICES } from "@/utils/variables";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Underline from "@/components/Shared/Underline";
import ToolkitCard from "./ToolkitCard";
import { ToolkitIcons } from "@/utils/variables";

const ToolkitCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 20px 0 0;
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

const ToolkitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 50px;
  column-gap: 50px;
  max-width: 800px;
  width: 100%;
  height: 1150px;

  @media (min-width: ${DEVICES.mobile}) {
    grid-template-columns: 1fr 1fr;
    height: 550px;
  }
`;

export default function Toolkit() {
  const { theme } = useTheme();

  const UnderlineProps = {
    height: "1px",
    gradientangle: "90deg",
    gradient1: SITE_THEME[theme].strong,
    borderradius: "1px",
    marginbottom: "30px",
  };

  return (
    <ToolkitCont>
      <Title titlecolor={SITE_THEME[theme].text}>Notable Skills</Title>
      <Underline {...UnderlineProps} />
      <ToolkitGrid>
        {Object.entries(ToolkitIcons).map((o, i) => {
          return (
            <ToolkitCard
              key={i}
              ToolkitCardTitle={o[0]}
              ToolkitCardArray={o[1][0]}
              ToolkitCategory={o}
            />
          );
        })}
      </ToolkitGrid>
    </ToolkitCont>
  );
}
