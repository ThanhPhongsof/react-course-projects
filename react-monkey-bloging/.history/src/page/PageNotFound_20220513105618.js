import React from "react";
import styled from "styled-components";

const PageNotFoundStyles = styled.div``;

const PageNotFound = () => {
  return (
    <PageNotFoundStyles>
      <div className="page-content">
        <img src="/404.png" alt="" className="image" />
      </div>
    </PageNotFoundStyles>
  );
};

export default PageNotFound;
