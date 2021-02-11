import React from "react";
import styled from "styled-components";
import Bars from "./Bars";
import YAxisLabel from "./YAxisLabel";

const BarsContainer = ({ dataSet, minYear, xScale, width }) => {
  return (
    <div>
      {dataSet.map((d, i) => (
        <FlexRow key={`row-${i}`}>
          <YAxisLabel
            label={d.segment}
            rotate={true}
            maxHeight={20 * d.markets.length}
            background="#dadada"
          />
          <div>
            {d.markets.map((d, i) => (
              <FlexRow key={`chart-${i}`}>
                <YAxisLabel
                  label={d.countryCode}
                  rotate={false}
                  background={i % 2 ? "#fff" : "#eeeeee"}
                />
                <Bars {...d} minYear={minYear} xScale={xScale} width={width} />
              </FlexRow>
            ))}
          </div>
        </FlexRow>
      ))}
    </div>
  );
};

const FlexRow = styled.div`
  display: flex;
`;

export default BarsContainer;
