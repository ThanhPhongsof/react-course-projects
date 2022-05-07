import React from "react";
import styled from "styled-components";

const ToggleStylis = styled.label`
  .toggle{
    &-div {
      display: inline-block;
      width: 100px;
      height: 52px;
      position: relative;
      border-radius:9999px;

    }
  }
`

const Toggle = ({on, onClick, ...rest}}) => {

  return <ToggleStylis>
    <input 
type="checkbox"
checked={on}
onClick={onClick}
className="hidden-input"
onChange={() => {}}
    />
    <div className="toggle-div">
      <span className="toggle-span"></span>
    </div>
  </ToggleStylis>;
};

export default Toggle;
