import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const Header = () => {
  return (
    <HeaderStyles>
      <a href="/" srcSet="/imges/logo.png 2x" alt="monkey-blogging" />
    </HeaderStyles>
  );
};

export default Header;
