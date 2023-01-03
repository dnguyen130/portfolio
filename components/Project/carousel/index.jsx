import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Underline from "@/components/Shared/Underline";

import { useTheme } from "@/utils/provider";

import { SITE_THEME, DEVICES } from "@/utils/variables";

const CarouselCont = styled.div`
  width: 100%;
  height: 60vh;
  min-height: 400px;
  border: 1px solid red;
  font-size: 1.5em;
  background-color: gray;
`;

const CarouselSlide = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${DEVICES.laptop}) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  width: 50%;
`;

const Title = styled.h3`
  color: ${(props) => props.color};
  margin: 0;
`;

const Description = styled.p`
  color: ${(props) => props.color};
`;

const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,

  speed: 3000,
};

export default function Carousel() {
  const { theme } = useTheme();

  const UnderlineProps = {
    height: "1px",
    gradientangle: "90deg",
    gradient1: SITE_THEME[theme].strong,
    borderradius: "1px",
    marginbottom: "30px",
  };

  return (
    <CarouselCont>
      <Slider {...SliderSettings}>
        <CarouselSlide>
          <Title color={SITE_THEME[theme].text}>Title</Title>
          <Underline {...UnderlineProps} />
          <Container>
            <Column>
              <Description>Hihihihihih</Description>
            </Column>
            <Column>
              <Description>Hihihihihihi</Description>
            </Column>
          </Container>
        </CarouselSlide>
        <CarouselSlide>
          <Title color={SITE_THEME[theme].text}>Title</Title>
          <Underline {...UnderlineProps} />
        </CarouselSlide>
        <CarouselSlide>
          <Title color={SITE_THEME[theme].text}>Title</Title>
          <Underline {...UnderlineProps} />
        </CarouselSlide>
      </Slider>
    </CarouselCont>
  );
}
