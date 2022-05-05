import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2``;

const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
