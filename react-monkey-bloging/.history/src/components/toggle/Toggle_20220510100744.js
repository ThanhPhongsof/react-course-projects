import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ToggleStylis = styled.label`
  .toggle {
    &-div {
      display: inline-block;
      width: 70px;
      height: 42px;
      position: relative;
      border-radius: 9999px;
      padding: 0.25rem;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      cursor: pointer;
    }
    &-span {
      display: inline-block;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      border-radius: inherit;
      width: 34px;
      height: 34px;
      background-color: white;
    }
  }
`;

const Toggle = ({ on, onClick, ...rest }) => {
  return (
    <ToggleStylis>
      <input
        type="checkbox"
        checked={on}
        className="hidden-input"
        onClick={onClick}
        onChange={() => {}}
      />
      <div
        className={`toggle-div ${on ? "bg-green-500" : "bg-gray-300"}`}
        {...rest}
      >
        <span
          className={`toggle-span ${on ? "translate-x-[28px]" : ""}`}
        ></span>
      </div>
    </ToggleStylis>
  );
};

Toggle.propTypes = {
  on: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Toggle;
