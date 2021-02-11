import React from "react";
import styled from "styled-components";

const Info = () => {
  return (
    <InfoWrapper>
      <Blur />
      <div className="card">
        <span>Title</span>
        <div className="h-x4"></div>
        <label>
          POC for improved expand collapse D3 chart (Performance wise).
        </label>
        <div className="h-x"></div>
        <span>Functionality</span>
        <div className="h-x4"></div>
        <label>
          Click on bars to view their children.Each clicked parent section is
          highlighted.
          <br></br>
          Each bar has its own state, so clicking other bar won't collapse the
          previous clicked bar.The axis labels also stretch for the occupied
          respective space.
          <br></br>
          Currently the chart is only vertically scrollable, but can be extended
          for horizontal scroll also.
        </label>
        <div className="h-x"></div>
        <span>Author</span>
        <div className="h-x4"></div>
        <label>Saumya Raj</label>
        <div className="h-x"></div>
        <span>Repository</span>
        <div className="h-x4"></div>
        <label>
          <a href="https://github.com/raj-saumya">
            https://github.com/raj-saumya
          </a>
        </label>
      </div>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  backdrop-filter: blur(2px);
  width: 100%;
  z-index: 1;
`;

export default Info;
