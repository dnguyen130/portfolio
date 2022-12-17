import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTheme, useActiveCard, useActiveProject } from "@/utils/provider";
import { SITE_THEME } from "@/utils/variables";

const ToolkitCardCont = styled(motion.div)`
  width: ${(props) => props.width};
  aspect-ratio: 1/1;
  border-radius: 5px;
  background-color: ${(props) => props.bgcolor};
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: 0.1s;
`;

const ToolkitCardWrapper = styled(motion.div)`
  background: linear-gradient(
    to left,
    ${(props) => props.hovercolor1},
    ${(props) => props.hovercolor2}
  );
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  position: absolute;
  top: 0;
  left: 0;
`;

const ToolkitCardItem = styled.div`
  width: 125px;
  height: 125px;
  color: ${(props) => props.color};
`;

const ToolkitCardSVG = styled.img`
  width: 125px !important;
  height: 125px;
`;

const ToolkitCardLabel = styled.h3`
  width: 100%;
  text-align: center;
  margin: 5px 0;
  font-size: 1.5em;
  font-weight: 500;
  color: ${(props) => props.color};
  z-index: 2;
  position: relative;
`;

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

const hiddenMask = `linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 0, rgba(0,0,0,0) 100%)`;
const visibleMask = `linear-gradient(to left, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)`;

export default function ToolkitCard({
  ToolkitCategory = {},
  ToolkitCardTitle = "",
  ToolkitCardArray = [],
}) {
  const { theme } = useTheme();
  const { setActiveCard } = useActiveCard();
  const { activeProject, setActiveProject } = useActiveProject();

  const [activeToolkit, setActiveToolkit] = useState(true);

  const ToolkitOnClick = () => {
    setActiveToolkit(true);
  };

  const WrapperVariants = {
    hover: {
      WebkitMaskImage: visibleMask,
      maskImage: visibleMask,
      transition: { duration: 0.2 },
    },
    notHover: {
      WebkitMaskImage: hiddenMask,
      maskImage: hiddenMask,
      transition: { duration: 0.2 },
    },
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <ToolkitCardCont
      width={activeToolkit ? "250px" : "0"}
      whileTap={{ scale: 0.95 }}
      bgcolor={SITE_THEME[theme].text}
      bghover={SITE_THEME[theme].cardhover}
      onClick={() => {
        setActiveCard(true), setActiveProject(ToolkitCategory);
      }}
    >
      <ToolkitCardLabel color={SITE_THEME[theme].background}>
        {ToolkitCardTitle}
      </ToolkitCardLabel>
      <ToolkitCardWrapper
        hovercolor1={SITE_THEME[theme].strong}
        hovercolor2={SITE_THEME[theme].text}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        animate={isHover ? "hover" : "notHover"}
        variants={WrapperVariants}
      />
      <Slider {...SliderSettings}>
        {ToolkitCardArray.map((o, i) => {
          return o.src ? (
            <ToolkitCardSVG key={i} src={o.src} />
          ) : (
            <ToolkitCardItem color={o.color} key={i}>
              <o.logo size="100%" />
            </ToolkitCardItem>
          );
        })}
      </Slider>
    </ToolkitCardCont>
  );
}
