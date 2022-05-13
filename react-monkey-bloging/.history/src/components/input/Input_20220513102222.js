import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) =>
      props.hasIcon ? "15px 60px 15px 25px" : "15px 25px"};
    background-color: transparent;
    border-color: 1px solid ${(props) => props.theme.grayf1};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    font-size: 14px;
  }
  input:-webkit-input-placeholder {
    color: #84878b;
    font-weight: 500;
    transition: all 0.2s linear;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({ control, name, defaultValue: "" });

  return (
    <InputStyles hasIcon={children ? true : false}>
      <input id={name} type={type} {...props} {...field} />
      {children ? <div className="input-icon">{children}</div> : null}
    </InputStyles>
  );
};

export default Input;
