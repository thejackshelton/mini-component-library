import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <Icon
          style={{ margin: "0px 0px 0px 24px" }}
          strokeWidth={1}
          size={20}
          id="chevron-down"
        ></Icon>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  isolation: isolate;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: color 200ms ease-in;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
