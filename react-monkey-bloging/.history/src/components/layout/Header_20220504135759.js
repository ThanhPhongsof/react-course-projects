import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  .header-main {
    display: flex;
    align-items: center;
  }
  .logo {
    display: block;
    max-width: 50px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
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
            <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
          </a>
          <ul className="menu">
            {menuLink?.map((item) => (
              <li className="menu-item" key={item.title}>
                <a href={item.url} className="menu-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="header-right">
            <div className="search">
              <input type="text" className="search-input" />
              <span className="search-icon">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="7.66669"
                    cy="7.05161"
                    rx="6.66669"
                    ry="6.05161"
                    stroke="#999999"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
