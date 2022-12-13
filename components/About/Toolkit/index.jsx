import styled from "styled-components";

import { useTheme } from "@/utils/provider";
import { SITE_THEME, DEVICES } from "@/utils/variables";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

import Underline from "@/components/Shared/Underline";
import Image from "next/image";

const ToolkitCont = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
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
  row-gap: 30px;

  @media (min-width: ${DEVICES.mobile}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${DEVICES.laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ToolkitAccordion = styled.div`
  width: 250px;
  aspect-ratio: 1/1;
  border-radius: 5px;
  background-color: white;
`;

const ToolkitAccordionItem = styled.div`
  width: 150px;
  height: 150px;
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

  const SliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    arrows: false,
    cssEase: "linear",
    adaptiveHeight: "true",
  };

  return (
    <ToolkitCont>
      <Title titlecolor={SITE_THEME[theme].text}>Notable Skills</Title>
      <Underline {...UnderlineProps} />
      <ToolkitGrid>
        <ToolkitAccordion>
          <Slider {...SliderSettings}>
            <ToolkitAccordionItem>
              <SiHtml5 size="100%" />
            </ToolkitAccordionItem>
            <ToolkitAccordionItem>
              <SiCss3 size="100%" />
            </ToolkitAccordionItem>
            <ToolkitAccordionItem>
              <SiJavascript size="100%" />
            </ToolkitAccordionItem>
          </Slider>
        </ToolkitAccordion>
        <ToolkitAccordion />
        <ToolkitAccordion />
      </ToolkitGrid>
    </ToolkitCont>
  );
}
