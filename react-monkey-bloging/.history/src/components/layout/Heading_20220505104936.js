import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2`
  color: ${(props) => props.theme.accent};
  font-size: 18px;
  position: relative;
  margin-bottom: 30px;
  font-size: "Poppins", sans-serif;
  &:before {
    content: "";
    width: 50px;
    height: 4px;
    background-color: ${(props) => props.theme.accent};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -150%);
  }
`;

const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
