import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Chart from "./components/Chart";
import sampleData from "./mocks/sample";
import IconSvg from "./assets/query.svg";
import Info from "./components/Info";

const getYearBoundary = (data) => {
  let minYear = Infinity;
  let maxYear = -Infinity;
  for (let i = 0; i < data.length; i++) {
    minYear = Math.min(
      minYear,
      data[i].markets.reduce(
        (acc, value) =>
          Math.min(
            acc,
            value.sosYear,
            value.cannabalizeModels.reduce(
              (acc, d) => Math.min(acc, d.sosYear),
              Infinity
            )
          ),
        minYear
      )
    );
    maxYear = Math.max(
      maxYear,
      data[i].markets.reduce(
        (acc, value) =>
          Math.max(
            acc,
            value.eosYear,
            value.cannabalizeModels.reduce(
              (acc, d) => Math.max(acc, d.eosYear),
              -Infinity
            )
          ),
        minYear
      )
    );
  }

  return [minYear, maxYear];
};

const App = () => {
  const [viewInfo, setViewInfo] = useState(false);
  const [dimensions, setDimensions] = useState({});
  const [dataSet] = useState(sampleData);
  const [minYear, maxYear] = getYearBoundary(dataSet);

  useEffect(() => {
    setDimensions({
      height: document.querySelector("main").getBoundingClientRect().height,
      width: document.querySelector("main").getBoundingClientRect().width,
    });
  }, []);

  return (
    <main>
      <Chart
        dimensions={dimensions}
        dataSet={dataSet}
        minYear={minYear}
        maxYear={maxYear}
      />
      {viewInfo && <Info />}
      <QueryIcon src={IconSvg} onClick={() => setViewInfo(!viewInfo)} />
    </main>
  );
};

const QueryIcon = styled.img`
  position: absolute;
  bottom: 40px;
  right: 40px;
  height: 40px;
  width: 40px;
  z-index: 4;
  cursor: pointer;
`;

export default App;
