import React from "react";

const Text = ({
  x,
  y,
  height,
  label,
  parent = false,
  childrenExists = false,
}) => {
  return (
    <text
      x={x + 4}
      y={height * 1.4 * y + 16}
      textAnchor="start"
      fontSize={10}
      fontFamily="Roboto"
      fill={parent ? "#000" : "#4c4c4c"}
    >
      {label} {childrenExists ? "[ Click to expand ]" : null}
    </text>
  );
};

export default Text;
