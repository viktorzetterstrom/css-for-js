/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const WIDTH = 370;
const HEIGHT = {
  large: 24,
  medium: 12,
  small: 8,
};

const BORDER_RADIUS = {
  large: 8,
  medium: 4,
  small: 4,
};

const Container = styled.div.attrs({
  role: "meter",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
})`
  width: ${WIDTH}px;
  height: ${(p) => HEIGHT[p.size]}px;
  border-radius: ${(p) => BORDER_RADIUS[p.size]}px;
  background-color: ${COLORS.transparentGray15};
  padding: ${(p) => (p.size === "large" ? 4 : 0)}px;
`;

const Progress = styled.svg`
  display: block;
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Container aria-valuenow={value} size={size}>
      <Progress
        size={size}
        width="100%"
        height="100%"
        class="fill"
        aria-hidden="true"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width={`${value}%`}
          height="100%"
          fill={COLORS.primary}
        ></rect>
      </Progress>
    </Container>
  );
};

export default ProgressBar;
