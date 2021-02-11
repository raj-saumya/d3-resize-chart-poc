import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import XAxisGenerator from "./XAxisGenerator";
import BarsContainer from "./BarsContainer";

const padding = 32;
const totalAxis = 2;
const axisWidth = 32;

const Chart = ({ dimensions, dataSet, minYear, maxYear }) => {
  const totalYears = maxYear - minYear + 1;
  const xScale = d3
    .scaleLinear()
    .domain([0, totalYears * 12])
    .range([0, dimensions.width - padding - totalAxis * axisWidth - 2]);

  if (!dimensions.width) {
    return <div></div>;
  }

  return (
    <div>
      <XAxisWrapper>
        <XAxisGenerator
          height={dimensions.height - padding}
          width={dimensions.width - padding - totalAxis * axisWidth}
          xScale={xScale}
          totalYears={totalYears}
          minYear={minYear}
          padding={padding}
        />
      </XAxisWrapper>
      <BarContainerWrapper>
        <BarsContainer
          dataSet={dataSet}
          minYear={minYear}
          xScale={xScale}
          width={dimensions.width - padding - totalAxis * axisWidth}
        />
      </BarContainerWrapper>
    </div>
  );
};

const XAxisWrapper = styled.div`
  position: relative;
  width: fit-content;
  left: ${totalAxis * axisWidth + 2}px;
`;

const BarContainerWrapper = styled.div`
  position: absolute;
  top: 40px;
  max-height: calc(100vh - 64px);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Chart;
