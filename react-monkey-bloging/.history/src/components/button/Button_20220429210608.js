import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 20px;
  line-height: none;
  color: white;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  border-radius: 8px;
`;

const Button = ({ children, ...props }) => {
  return <ButtonStyles {...props}>{children}</ButtonStyles>;
};

export default Button;
