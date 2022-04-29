import React from "react";
import styled from "styled-components";

const InputStyles = styled.input`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.grayLight};
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s linear;
  border: 1px solid transparent;
  :focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  ::-webkit-input-placeholder {
    color: #84878b;
    font-weight: 500;
    transition: all 0.2s linear;
  }
  ::-moz-input-placeholder {
    color: #84878b;
  }
`;

const Input = () => {
  return <div></div>;
};

export default Input;
