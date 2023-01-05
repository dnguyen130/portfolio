import { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Underline from "@/components/Shared/Underline";

import { useTheme, useSelectedProject } from "@/utils/provider";

import { SITE_THEME, DEVICES, PROJECTSLIDES } from "@/utils/variables";

const CarouselCont = styled.div`
  width: 100%;
  height: 70vh;
  min-height: 400px;
  font-size: 1.5em;
`;

const CarouselSlide = styled.div`
  width: 100%;
  height: 70vh;
  min-height: 400px;
  padding: 10px;
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
  position: relative;
  width: 90%;
  height: auto;
  @media (min-width: ${DEVICES.laptop}) {
    width: 50%;
  }
`;

const ImageColumn = styled.div`
  position: relative;
  max-width: 90%;
  min-width: 50%;
  height: 30vh;

  @media (min-width: ${DEVICES.laptop}) {
    height: 40vh;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.color};
  margin: 0;
`;

const Description = styled.p`
  color: ${(props) => props.color};
  font-size: 0.6em;
  text-align: left;
`;

const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,

  speed: 300,
};

export default function Carousel() {
  const { theme } = useTheme();
  const { selectedProject } = useSelectedProject();
  const sp = selectedProject;
  const [slides, setSlides] = useState({});

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
        {PROJECTSLIDES.map((o, i) => {
          if (o.name == sp.url) {
            Object.entries(o).map((o, i) => {
              console.log(o);
              return (
                <CarouselSlide>
                  <Title color={SITE_THEME[theme].text}></Title>
                  <Underline {...UnderlineProps} />
                  <Container>
                    <ImageColumn>
                      <Image
                        quality={100}
                        layout="fill"
                        src="/test.JPEG"
                        objectFit="contain"
                      />
                    </ImageColumn>
                    <Column>
                      <Description color={SITE_THEME[theme].text}>
                        ?
                      </Description>
                    </Column>
                  </Container>
                </CarouselSlide>
              );
            });
          }
        })}

        {/* <CarouselSlide>
          <Title color={SITE_THEME[theme].text}>Title</Title>
          <Underline {...UnderlineProps} />
          <Container>
            
            <ImageColumn>
              <Image
                quality={100}
                layout="fill"
                src="/screenshots/Steady_Meals_Crop.png"
                objectFit="contain"
              />
            </ImageColumn>
            <Column>
              <Description color={SITE_THEME[theme].text}>
                As with any application, the project begins with a simple idea.
                My team was tasked to help solve a social problem in today's
                society. As with any application, the project begins with a
                simple idea. My team was tasked to help solve a social problem
                in today's society.
              </Description>
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
        </CarouselSlide> */}
      </Slider>
    </CarouselCont>
  );
}
