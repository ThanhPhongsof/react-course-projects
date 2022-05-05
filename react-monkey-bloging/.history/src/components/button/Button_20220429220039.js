import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  color: white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  height: ${(props) => props.height || "70px"};
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {children}
    </ButtonStyles>
  );
};

export default Button;