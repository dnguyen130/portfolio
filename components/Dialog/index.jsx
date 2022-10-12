import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

import { useTheme, useCardActive } from "@/utils/provider";
import { SITE_THEME, DEVICES, LINKS } from "../../utils/variables";
import styles from "./dialog.module.css";

const DialogCont = styled.div`
  width: 60%;
  min-width: 300px;
  max-width: 1200px;
  aspect-ratio: 3/2;
  border-radius: 10px;
  z-index: 101;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  overflow: hidden;
`;

const TopRow = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Dialog() {
  const { theme } = useTheme();

  return (
    <DialogCont>
      <TopRow>
        <CloseButton>
          <IconContext.Provider
            value={{
              color: SITE_THEME[theme].background,
              size: "70%",
              className: styles.closeButton,
            }}
          >
            <AiOutlineCloseCircle />
          </IconContext.Provider>
        </CloseButton>
      </TopRow>
    </DialogCont>
  );
}
