import styled from "styled-components";
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";

import { useTheme } from "@/utils/provider";
import { SITE_THEME, DEVICES } from "@/utils/variables";

const HamburgerCont = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: ${(props) => props.hamburgerColor};
  transition: color 0.25s;

  &:hover {
    color: ${(props) => props.hamburgerHoverColor};
  }

  @media (min-width: ${DEVICES.tablet}) {
    display: none;
  }
`;

export default function Hamburger() {
  const { theme } = useTheme();

  return (
    <HamburgerCont
      hamburgerColor={SITE_THEME[theme].text}
      hamburgerHoverColor={SITE_THEME[theme].strong}
    >
      <HiMenu size="100%" />
    </HamburgerCont>
  );
}
