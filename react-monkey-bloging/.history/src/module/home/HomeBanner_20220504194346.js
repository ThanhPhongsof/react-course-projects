import { Button } from "components/button";
import React from "react";
import styled, { css } from "styled-components";

const HomeBannerStyles = styled.div`
  height: 520px;
  padding: 40px 0;

  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-content {
    max-width: 600px;
    color: white;
  }
  .banner-heading {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .banner-desc {
    line-height: 1.75;
    margin-bottom: 40px;
  }
  .banner-button {
    color: ${(props) => props.theme.primary};
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              illum doloribus suscipit, sunt esse, nam debitis laborum sit
              repellat, explicabo impedit earum repudiandae hic deserunt? Iusto
              dolor perspiciatis necessitatibus tempore.
            </p>
            <Button type="button" className="banner-button" to="/sign-in">
              Get Started
            </Button>
          </div>
          <div className="banner-image">
            <img src="/img-banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
