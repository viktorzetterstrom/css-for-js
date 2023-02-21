import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const InvisibleNativeSelect = styled.select`
  appearance: none;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
`;

const Root = styled.div`
  position: relative;
  box-sizing: border-box;
  width: fit-content;
  background-color: ${COLORS.transparentGray15};
  border: 1px solid transparent;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    border: 1px solid ${COLORS.primary};
  }

  & > * {
    margin-left: 8px;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Root>
      <InvisibleNativeSelect value={value} onChange={onChange}>
        {children}
      </InvisibleNativeSelect>
      {displayedValue}

      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L13 1"
          stroke="#656565"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Root>
  );
};

export default Select;
