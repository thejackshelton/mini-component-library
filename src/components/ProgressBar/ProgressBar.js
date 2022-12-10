/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

/*
const SIZES = {
  small: {
    "--height": 8 + "px",
  },
  medium: {
    "--height": 12 + "px",
  },
  large: {
    "--height": 16 + "px",
    "--padding": "3px",
  },
};
*/

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar`);
  }
  /*
  const styles = SIZES[size];
  if (value > 100 || value < 0) {
    throw new Error(
      "Invalid progress percentage, it should be between 0 and 100%"
    );
  }
  */

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{ "--width": value + "%", "--height": styles.height + "px" }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

/*
  return (
    <Progress
      aria-label="Progress Bar"
      value={value}
      max="100"
      style={styles}
    ></Progress>
  );
};

let Progress = styled.progress`
  background-color: ${COLORS.gray50};
  color: ${COLORS.primary};
  width: 370px;
  border: transparent;
  padding: var(--padding);
  height: var(--height);
  border-radius: 4px;
  box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;

  &::-moz-progress-bar {
    border-radius: 4px;
  }

  //  &[value="100"] {
  //   &::-moz-progress-bar {
  //     border-radius: 0px;
  //   }
  // }

  &:not([value="100"]) {
    &::-moz-progress-bar {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
`;

*/

export default ProgressBar;
