import { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Underline from "@/components/Shared/Underline";

import {
  useTheme,
  useSelectedProject,
  useProjectSlides,
  useActiveCard,
  useProjectImage,
} from "@/utils/provider";

import { SITE_THEME, DEVICES, PROJECTINFO } from "@/utils/variables";

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

  @media (min-width: ${DEVICES.tablet}) {
    padding: 10px 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  @media (min-width: ${DEVICES.tablet}) {
    width: 50%;
  }
`;

const ImageColumn = styled.div`
  position: relative;
  height: 35vh;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${DEVICES.tablet}) {
    height: 50vh;
    width: 50%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 35vh;
  aspect-ratio: ${(props) => props.aspect};
  cursor: pointer;
  @media (min-width: ${DEVICES.tablet}) {
    height: 50vh;
  } ;
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
  const { projectSlides, setProjectSlides } = useProjectSlides();
  const { activeCard, setActiveCard } = useActiveCard();
  const { projectImage, setProjectImage } = useProjectImage();
  const sp = selectedProject;
  const [checked, setChecked] = useState(false);

  const SLIDESARRAY = Object.entries(PROJECTINFO);

  useEffect(() => {
    console.log("go");
    for (var i = 0; i < SLIDESARRAY.length; i++) {
      if (
        (Object.entries(projectSlides).length == 0 ||
          SLIDESARRAY[i][0] == sp.url) &&
        !checked
      ) {
        setChecked(true);
        setProjectSlides(SLIDESARRAY[i]);
        return;
      }
    }
  }, [checked]);

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
        {Object.entries(projectSlides).length != 0 ? (
          projectSlides[1].map((o, i) => {
            return (
              <CarouselSlide key={i}>
                <Title color={SITE_THEME[theme].text}>{o.title}</Title>
                <Underline {...UnderlineProps} />
                <Container>
                  <ImageColumn>
                    <ImageWrapper
                      aspect={o.aspectratio}
                      onClick={(e) => {
                        setActiveCard(true);
                        setProjectImage(
                          e.nativeEvent.explicitOriginalTarget.src
                        );
                      }}
                    >
                      <Image
                        quality={100}
                        layout="fill"
                        src={o.src}
                        objectFit="contain"
                      />
                    </ImageWrapper>
                  </ImageColumn>
                  <Column>
                    <Description color={SITE_THEME[theme].text}>
                      {o.description}
                    </Description>
                  </Column>
                </Container>
              </CarouselSlide>
            );
          })
        ) : (
          <div style={{ color: "white" }}>Loading</div>
        )}
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
