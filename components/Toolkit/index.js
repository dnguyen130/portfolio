import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const ToolkitCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Toolkit = ({}) => {

  const {theme} = useTheme();

  return (
    <ToolkitCont>

    </ToolkitCont>
  )
}

export default Toolkit;