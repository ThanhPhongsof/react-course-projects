import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button``;

const Button = ({ children, ...props }) => {
  return <ButtonStyles {...props}>{children}</ButtonStyles>;
};

export default Button;
