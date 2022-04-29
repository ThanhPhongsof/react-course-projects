import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: 20px;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  input:-webkit-input-placeholder {
    color: #84878b;
    font-weight: 500;
    transition: all 0.2s linear;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
`;

const Input = ({ id = "", ...props }) => {
  return (
    <InputStyles>
      <input id={id} {...props} />
    </InputStyles>
  );
};

export default Input;
