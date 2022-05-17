import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import styled from "styled-components";

const UserManageStyles = styled.div``;

const UserManage = () => {
  return (
    <UserManageStyles>
      <DashboardHeading
        title="Users"
        desc="Manage your user"
      ></DashboardHeading>
    </UserManageStyles>
  );
};

export default UserManage;
