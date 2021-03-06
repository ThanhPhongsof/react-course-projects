import { Button } from "components/button";
import { InputSearch } from "components/input";
import { useAuth } from "contexts/auth-context";
import { db } from "firebase-app/firebase-config";
import { collection, limit, onSnapshot, query } from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { limitperPage, userRole } from "utils/constants";
import UserTable from "./UserTable";

const UserManageStyles = styled.div`
  .search-user {
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    input {
      padding: 16px 20px;
      border-width: 1px;
      border-color: rgb(209, 213, 219);
      border-radius: 8px;
    }
  }
`;

const UserManage = () => {
  const searchUserHandler = () => {};

  const { userInfo } = useAuth();
  if (userInfo.role !== userRole.ADMIN) return null;

  return (
    <UserManageStyles>
      <DashboardHeading title="Users" desc="Manage your user">
        <Button type="button" kind="ghost" height="60px" to="/manage/add-user">
          Create user
        </Button>
      </DashboardHeading>
      <div className="search-user">
        <InputSearch
          placeholder="Search user ..."
          onChange={searchUserHandler}
        ></InputSearch>
      </div>
      <UserTable></UserTable>
    </UserManageStyles>
  );
};

export default UserManage;
