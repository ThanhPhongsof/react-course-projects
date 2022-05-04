import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  height: 520px;
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, vitae
        enim blanditiis esse assumenda dolor natus optio ea praesentium sunt
        possimus odio error perferendis quos fugiat voluptate animi? Non,
        quidem!
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
