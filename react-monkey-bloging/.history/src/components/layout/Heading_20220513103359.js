import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2`
  font-size: 18px;
  position: relative;
  margin: 30px 0;
  font-weight: 600;
  @media screen and (max-width: 1023.98px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
