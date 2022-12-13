import styled from "styled-components";
import { useState } from "react";

import { useTheme } from "@/utils/provider";
import { SITE_THEME, DEVICES } from "@/utils/variables";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Underline from "@/components/Shared/Underline";
import Image from "next/image";
import { ToolkitIcons } from "@/utils/variables";

const ToolkitCont = styled.div`
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

const ToolkitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 50px;
  column-gap: 50px;
  max-width: 800px;
  width: 100%;

  @media (min-width: ${DEVICES.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ToolkitAccordion = styled.div`
  width: ${(props) => props.width};
  aspect-ratio: 1/1;
  border-radius: 5px;
  background-color: white;
`;

const ToolkitAccordionItem = styled.div`
  width: 125px;
  height: 125px;
  color: ${(props) => props.color};
`;

const ToolkitAccordionSVG = styled.img`
  width: 125px !important;
  height: 125px;
`;

export default function Toolkit() {
  const { theme } = useTheme();

  const [activeToolkit, setActiveToolkit] = useState(true);

  const ToolkitOnClick = () => {};

  const UnderlineProps = {
    height: "1px",
    gradientangle: "90deg",
    gradient1: SITE_THEME[theme].strong,
    borderradius: "1px",
    marginbottom: "30px",
  };

  const SliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    arrows: false,
    cssEase: "linear",
    adaptiveHeight: true,
    draggable: false,
    pauseOnHover: false,
  };

  return (
    <ToolkitCont>
      <Title titlecolor={SITE_THEME[theme].text}>Notable Skills</Title>
      <Underline {...UnderlineProps} />
      <ToolkitGrid>
        {Object.values(ToolkitIcons).map((o, i) => {
          return (
            <ToolkitAccordion key={i} width={activeToolkit ? "250px" : "0"}>
              <Slider {...SliderSettings}>
                {o.map((o, i) => {
                  return o.src ? (
                    <ToolkitAccordionSVG src={o.src} />
                  ) : (
                    <ToolkitAccordionItem color={o.color}>
                      <o.logo size="100%" />
                    </ToolkitAccordionItem>
                  );
                })}
              </Slider>
            </ToolkitAccordion>
          );
        })}
      </ToolkitGrid>
    </ToolkitCont>
  );
}
