import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const XAxisGenerator = ({ height, width, xScale, totalYears, minYear }) => {
  const ref = useRef();

  useEffect(() => {
    const svgElement = d3.select(ref.current);

    const axisGenerator = d3
      .axisTop(xScale)
      .ticks(totalYears * 12)
      .tickSize(-height)
      .tickPadding(8)
      .tickFormat((d) =>
        d && !((d - 6) % 12) ? (d - 6) / 12 + minYear : null
      );

    const xAxis = svgElement
      .append("g")
      .attr("transform", "translate(0, 16)")
      .call(axisGenerator);

    xAxis
      .selectAll(".tick line")
      .attr("stroke", "#c1c1c1")
      .attr("opacity", (d) => (d % 12 ? 0.4 : 1));

    xAxis.select("path").attr("stroke", "#c1c1c1");

    xAxis
      .selectAll(".tick line")
      .attr("transform", (d) => `translate(0,${!(d % 12) ? -16 : 0}) `);
  }, []);

  return <svg ref={ref} height={height} width={width}></svg>;
};

export default XAxisGenerator;
