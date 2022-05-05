import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2`
  color: ${(props) => props.theme.tertiary};
  font-size: 18px;
  position: relative;
  margin-bottom: 30px;
  font-size: "Poppins", sans-serif;
`;

const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
