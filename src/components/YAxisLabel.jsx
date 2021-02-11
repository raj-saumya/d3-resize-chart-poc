import React from "react";
import styled from "styled-components";

const rotateText = {
  transform: "rotate(-180deg) translate(0, -4px)",
  writingMode: "vertical-rl",
  overflow: "hidden",
};

const YAxisLabel = ({ label, rotate, maxHeight = 0, background }) => {
  return (
    <YAxisContainer background={background}>
      <Label title={label} style={rotate ? { ...rotateText, maxHeight } : null}>
        {label}
      </Label>
    </YAxisContainer>
  );
};

const YAxisContainer = styled.div`
  height: auto;
  min-height: 32px;
  width: 31px;
  background: ${(props) => props.background};
  border: 1px solid #c1c1c1;
  text-align: center;
  color: #4c4c4c;
`;

const Label = styled.label`
  font-size: 10px;
  font-family: Roboto;
`;

export default YAxisLabel;
