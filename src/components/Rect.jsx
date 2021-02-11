import React from "react";
import styled from "styled-components";

const Rect = ({ x, y, height, width, parent, onClick = null }) => {
  return (
    <ModelBar
      x={x}
      y={height * 1.4 * y + 4}
      height={height}
      width={width}
      stroke={parent ? "#8a8a8a" : "#8a8a8a"}
      fill={parent ? "#fff" : "#eeeeee"}
      rx="2"
      onClick={onClick}
    />
  );
};

const ModelBar = styled.rect`
  cursor: pointer;
`;

export default Rect;
