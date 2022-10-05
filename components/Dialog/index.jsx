import styled from "styled-components";

import { useTheme } from "../../utils/provider";
import { SITE_THEME, DEVICES, LINKS } from "../../utils/variables";

const DialogCont = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  background-color: white;
`;

export default function Dialog() {
  const { theme } = useTheme();

  return <DialogCont></DialogCont>;
}
