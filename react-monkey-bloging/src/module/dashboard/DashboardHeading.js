import React from "react";
import styled from "styled-components";

const DashboardHeadingStyles = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const DashboardHeading = ({ title = "", desc = "", children = "" }) => {
  return (
    <DashboardHeadingStyles>
      <div>
        <h1 className="dashboard-heading">{title}</h1>
        <p className="dashboard-sort-desc">{desc}</p>
      </div>
      {children}
    </DashboardHeadingStyles>
  );
};

export default DashboardHeading;
