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
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 80%;
  padding: 10px;

  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: row;
    padding: 10px 30px;
  }
`;

const Column = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  margin: 0 20px;
  @media (min-width: ${DEVICES.laptop}) {
    max-width: 50%;
  }
`;

const ImageColumn = styled.div`
  position: relative;
  aspect-ratio: ${(props) => props.aspect};
  max-height: 40vh;

  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${DEVICES.tablet}) {
    max-width: 50%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: ${(props) => props.aspect};
  cursor: pointer;
  max-height: 40vh;

  @media (min-width: ${DEVICES.tablet}) {
    max-width: 100%;
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
  arrows: false,
  speed: 600,
  easing: "ease-in",
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
    console.log(sp.url);
    for (var i = 0; i < SLIDESARRAY.length; i++) {
      if (
        SLIDESARRAY[i][0] == sp.url &&
        // Object.entries(projectSlides).length == 0 &&
        !checked
      ) {
        setChecked(true);
        setProjectSlides(SLIDESARRAY[i]);
        console.log(SLIDESARRAY[i]);
        return;
      }
    }
  });

  const UnderlineProps = {
    height: "1px",
    gradientangle: "90deg",
    gradient1: SITE_THEME[theme].strong,
    borderradius: "1px",
    marginbottom: "20px",
  };

  return (
    <CarouselCont>
      {Object.entries(projectSlides).length != 0 ? (
        <Slider {...SliderSettings}>
          {projectSlides[1].map((o, i) => {
            return (
              <CarouselSlide key={i}>
                <Title color={SITE_THEME[theme].text}>{o.title}</Title>
                <Underline {...UnderlineProps} />
                <Container>
                  <ImageColumn aspect={o.aspectratio}>
                    <ImageWrapper
                      aspect={o.aspectratio}
                      onClick={(e) => {
                        setActiveCard(true);
                        setProjectImage({
                          src: e.nativeEvent.explicitOriginalTarget.src,
                          aspectratio: o.aspectratio,
                        });
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
          })}
        </Slider>
      ) : (
        <div>Loading</div>
      )}
    </CarouselCont>
  );
}
