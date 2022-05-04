import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;
const menuLink = [
  {
    url: "/#",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" />
          </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="/#" className="menu-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
