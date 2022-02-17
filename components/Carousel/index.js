import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack, DotGroup, Dot } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from "next/image";

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const PhoneCont = styled.div`
  width: 211px;
  height: 428px;
  background-image: url("/iphone_cutout.png");
  background-size: contain;
  position: absolute;
  z-index: 2;
  pointer-events: none;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 10px;
  align-items: center;
`

const StaticPhoneCont = styled.div`
  width: 211px;
  height: 428px;
  background-image: url("/iphone_cutout.png");
  background-size: contain;
  z-index: -99999;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`

const PhoneInnerCont = styled.div`
  border-radius: 24px;
  width: 190px;
  height: 411px;
  overflow: hidden;
  position: relative;
  right: 0;
  z-index: 1;

`

const Carousel = () => {

  const {theme} = useTheme();

  return (
  <CarouselProvider
    totalSlides={5}
    naturalSlideHeight={410}
    naturalSlideWidth={190}
    orientation="horizontal"
    className="CaroCont"
    isPlaying={true}
    infinite={true}
  >
    <PhoneCont />
    <StaticPhoneCont>
    <PhoneInnerCont>
    <Slider className="Carousel">
      <Slide index={0}>
        <Image src="/onme/OnMe_Dashboard.png" width="190px" height="410px" />
      </Slide>
      <Slide index={1}>
        <Image src="/onme/OnMe_RestaurantSelection.png"width="190px" height="410px" />
      </Slide>
      <Slide index={2}>
        <Image src="/onme/OnMe_RestaurantMenu.png" width="190px" height="410px" />
      </Slide>
      <Slide index={3}>
        <Image src="/onme/OnMe_SeatSelection.png" width="190px" height="410px" />
      </Slide>
      <Slide index={4}>
        <Image src="/onme/OnMe_OrderSummary.png" width="190px" height="410px" />
      </Slide>
    </Slider>
    </PhoneInnerCont>
    </StaticPhoneCont>
    <Row>
      <ButtonBack className="CaroButton" style={{backgroundColor:site_theme[theme].background}}>
        <IoIosArrowDropleftCircle size="30px" color={site_theme[theme].text} />
      </ButtonBack>
      <Dot slide={0} className="CaroDot"/>
      <Dot slide={1} className="CaroDot"/>
      <Dot slide={2} className="CaroDot"/>
      <Dot slide={3} className="CaroDot"/>
      <Dot slide={4} className="CaroDot"/>
      <ButtonNext className="CaroButton" style={{backgroundColor:site_theme[theme].background}}>
        <IoIosArrowDroprightCircle size="30px" color={site_theme[theme].text}/>
      </ButtonNext>
    </Row>
  </CarouselProvider>
  )
}

export default Carousel;