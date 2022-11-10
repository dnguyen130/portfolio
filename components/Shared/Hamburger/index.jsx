import styled from "styled-components";
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";

import { useTheme } from "@/utils/provider";
import { SITE_THEME, DEVICES } from "@/utils/variables";

const HamburgerCont = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;

  @media (min-width: ${DEVICES.tablet}) {
    display: none;
  }
`;

export default function Hamburger() {
  const { theme } = useTheme();

  return (
    <HamburgerCont>
      <IconContext.Provider
        value={{
          size: "100%",
          color: SITE_THEME[theme].text,
        }}
      >
        <HiMenu />
      </IconContext.Provider>
    </HamburgerCont>
  );
}
