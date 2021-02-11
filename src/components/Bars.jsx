import React, { useState } from "react";
import styled from "styled-components";
import Rect from "./Rect";
import Text from "./Text";

const Bars = ({
  sosYear,
  sosMonth,
  eosYear,
  eosMonth,
  modelName,
  cannabalizeModels = [],
  minYear,
  xScale,
  width,
}) => {
  const [viewChildren, setViewChildren] = useState(false);
  const barHeight = 20;

  const handleClick = () => {
    setViewChildren(!viewChildren);
  };

  return (
    <div style={viewChildren && cannabalizeModels.length ? highlight : null}>
      <Svg
        height={
          barHeight * 1.4 * (1 + (viewChildren ? cannabalizeModels.length : 0))
        }
        width={width}
      >
        <Rect
          x={xScale((sosYear - minYear) * 12 + sosMonth)}
          y={0}
          height={barHeight}
          width={
            xScale((eosYear - minYear) * 12 + eosMonth) -
            xScale((sosYear - minYear) * 12 + sosMonth)
          }
          parent={true}
          onClick={handleClick}
        />
        <Text
          x={xScale((sosYear - minYear) * 12 + sosMonth)}
          y={0}
          height={barHeight}
          label={modelName}
          parent={true}
          childrenExists={cannabalizeModels.length > 0}
        />
        {viewChildren &&
          cannabalizeModels.map(
            ({ sosYear, sosMonth, eosYear, eosMonth, modelName }, i) => (
              <g key={i}>
                <Rect
                  x={xScale((sosYear - minYear) * 12 + sosMonth)}
                  y={i + 1}
                  height={barHeight}
                  width={
                    xScale((eosYear - minYear) * 12 + eosMonth) -
                    xScale((sosYear - minYear) * 12 + sosMonth)
                  }
                  parent={false}
                />
                <Text
                  x={xScale((sosYear - minYear) * 12 + sosMonth)}
                  y={i + 1}
                  height={barHeight}
                  label={modelName}
                />
              </g>
            )
          )}
      </Svg>
    </div>
  );
};

const highlight = {
  background: "#9e9e9e2e",
};

const Svg = styled.svg`
  transform: translateY(2px);
`;

export default Bars;
