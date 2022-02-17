import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack, DotGroup, Dot } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from "next/image";

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import welcome from '../../public/steady/Steady_Welcome_Crop.png';
import about from '../../public/steady/Steady_About_Crop.png';
import instructions from '../../public/steady/Steady_Instructions_Crop.png';
import menu from '../../public/steady/Steady_Menu_Crop.png';
import meals from '../../public/steady/Steady_Meals_Crop.png';
import results from '../../public/steady/Steady_Results_Crop.png';

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 10px;
  align-items: center;
`

const Carousel = () => {

  const {theme} = useTheme();

  return (
  <CarouselProvider
    totalSlides={6}
    naturalSlideHeight={440}
    naturalSlideWidth={285}
    orientation="horizontal"
    className="CaroCont2"
    isPlaying={true}
    infinite={true}
  >
    <Slider className="Carousel2" style={{borderColor: site_theme[theme].text}}>
      <Slide index={0}>
        <Image src={welcome} width="285px" height="440px" />
      </Slide>
      <Slide index={1}>
        <Image src={about} width="285px" height="440px" />
      </Slide>
      <Slide index={2}>
        <Image src={instructions} width="285px" height="440px" />
      </Slide>
      <Slide index={3}>
        <Image src={menu} width="285px" height="440px" />
      </Slide>
      <Slide index={4}>
        <Image src={meals} width="285px" height="440px" />
      </Slide>
      <Slide index={5}>
        <Image src={results} width="285px" height="440px" />
      </Slide>
    </Slider>
    <Row>
      <ButtonBack className="CaroButton" style={{backgroundColor:site_theme[theme].background}}>
        <IoIosArrowDropleftCircle size="30px" color={site_theme[theme].text} />
      </ButtonBack>
      <Dot slide={0} className="CaroDot"/>
      <Dot slide={1} className="CaroDot"/>
      <Dot slide={2} className="CaroDot"/>
      <Dot slide={3} className="CaroDot"/>
      <Dot slide={4} className="CaroDot"/>
      <Dot slide={5} className="CaroDot"/>
      <ButtonNext className="CaroButton" style={{backgroundColor:site_theme[theme].background}}>
        <IoIosArrowDroprightCircle size="30px" color={site_theme[theme].text}/>
      </ButtonNext>
    </Row>
  </CarouselProvider>
  )
}

export default Carousel;