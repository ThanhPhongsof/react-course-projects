import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 20px;
  line-height: none;
`;

const Button = ({ children, ...props }) => {
  return <ButtonStyles {...props}>{children}</ButtonStyles>;
};

export default Button;
