import React from "react";
import styled from "styled-components";

const DashboardHeadingStyles = styled.div`
  margin-bottom: 2.5rem;
`;

const DashboardHeading = ({ title = "", desc = "" }) => {
  return (
    <DashboardHeadingStyles>
      <h1 className="dashboard-heading">{title}</h1>
      <p className="dashboard-sort-desc">{desc}</p>
    </DashboardHeadingStyles>
  );
};

export default DashboardHeading;
