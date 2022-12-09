import styled from "styled-components";

const UnderlineCont = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  background: linear-gradient(
    ${(props) => props.gradientangle},
    ${(props) => props.gradient1},
    ${(props) => props.gradientpercentage},
    transparent
  );
  border-radius: ${(props) => props.borderradius};
  margin-bottom: ${(props) => props.marginbottom};
`;

export default function Underline({
  height = "1px",
  gradientangle = "90deg",
  gradient1,
  gradientpercentage = "70%",
  borderradius = 0,
  marginbottom = 0,
}) {
  return (
    <UnderlineCont
      height={height}
      gradientangle={gradientangle}
      gradient1={gradient1}
      gradientpercentage={gradientpercentage}
      borderradius={borderradius}
      marginbottom={marginbottom}
    />
  );
}
