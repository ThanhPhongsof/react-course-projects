import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ToggleStylis = styled.label`
  .toggle {
    &-div {
      display: inline-block;
      width: 100px;
      height: 52px;
      position: relative;
      border-radius: 9999px;
      padding: 0.25rem;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      cursor: pointer;
      ${(props) =>
        props.on &&
        css`
          background-color: rgb(168, 85, 247);
        `};
      ${(props) =>
        !props.on &&
        css`
          background-color: rgb(209, 213, 219);
        `};
    }
    &-span {
      display: inline-block;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      border-radius: inherit;
      width: 2.75rem;
      height: 2.75rem;
      background-color: white;
      ${(props) =>
        props.on &&
        css`
          transform: translateX(48px);
        `};
    }
  }
`;

const Toggle = ({ on, onClick, ...rest }) => {
  return (
    <ToggleStylis>
      <input
        type="checkbox"
        checked={on}
        onClick={onClick}
        className="hidden-input"
        onChange={() => {}}
      />
      <div className="toggle-div" {...rest}>
        <span className="toggle-span"></span>
      </div>
    </ToggleStylis>
  );
};

Toggle.propTypes = {
  on: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Toggle;
