import Heading from "components/layout/Heading";
import React from "react";
import styled from "styled-components";

const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
