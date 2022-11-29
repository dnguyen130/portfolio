import styled from "styled-components";

import {
  useTheme,
  useActiveCard,
  useActiveProject,
} from "../../../utils/provider";
import { SITE_THEME, DEVICES, SOCIALS } from "../../../utils/variables";

import ProjectCard from "../ProjectCard";

const ExtrasCont = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
  color: ${(props) => props.titleColor};
  align-self: flex-start;

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

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    ${(props) => props.gradient1},
    transparent
  );
  border-radius: 1px;
  margin: 0 0 30px;
`;

const Grid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;
  width: 100%;

  @media (min-width: ${DEVICES.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const PortraitCont = styled.div`
  width: 200px;
  aspect-ratio: 1/1;
  transform: rotate(45deg);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 60px;
  border-radius: 5px;
  background: linear-gradient(
    45deg,
    ${(props) => props.portraitgradient1},
    ${(props) => props.portraitgradient2},
    ${(props) => props.portraitgradient1}
  );
`;

const PortraitWrapper = styled.div`
  width: 185px;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 5px;

  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const BorderCont = styled.div`
  background: radial-gradient(white 50%, black);
  transform: rotate(-45deg);
  position: absolute;
  width: 300px;
  height: 100px;
  z-index: 1;
`;

const Portrait = styled.img`
  width: 185px;
  aspect-ratio: 1/1;
  transform: rotate(90deg);
`;

const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Description = styled.p`
  margin: 0 0 10px;
  color: ${(props) => props.txtcolor};
  text-align: center;
`;

const ButtonCont = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  width: 100%;
  justify-items: center;
`;

const SocialButton = styled.div`
  cursor: pointer;
  width: 80%;
  height: 50px;
  padding: 0 10px;
  border-radius: 5px;
  background: ${(props) => props.buttoncolor};
  color: ${(props) => props.txtcolor};
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const SocialIcon = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  margin-right: 15px;
`;

export default function Extras() {
  const { theme } = useTheme();
  const { setActiveCard } = useActiveCard();
  const { setActiveProject } = useActiveProject();

  return (
    <ExtrasCont>
      <Title titleColor={SITE_THEME[theme].text}>About Me</Title>
      <Underline gradient1={SITE_THEME[theme].strong} />
      <Grid>
        <PortraitCont
          portraitgradient1={SITE_THEME[theme].logodark}
          portraitgradient2={SITE_THEME[theme].logolight}
        >
          <PortraitWrapper>
            <Portrait src="/angle2.jpg" />
          </PortraitWrapper>
          <BorderCont />
        </PortraitCont>
        <DescriptionCont>
          <Description txtcolor={SITE_THEME[theme].text}>
            Hey there! My name is Danny and I find designing and developing fun!
          </Description>
          <Description txtcolor={SITE_THEME[theme].text}>
            You can learn more from my page, or contact me through my social
            platforms!
          </Description>
          <ButtonCont>
            {SOCIALS.map((o, i) => {
              return (
                <SocialButton
                  buttoncolor={SITE_THEME[theme].text}
                  txtcolor={SITE_THEME[theme].background}
                  key={i}
                >
                  <SocialIcon>
                    <o.logo size="100%" />
                  </SocialIcon>
                  {o.name}
                </SocialButton>
              );
            })}
          </ButtonCont>
        </DescriptionCont>
      </Grid>
    </ExtrasCont>
  );
}
