import { Button } from "components/button";
import { InputSearch } from "components/input";
import { db } from "firebase-app/firebase-config";
import { collection, limit, onSnapshot, query } from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { limitperPage } from "utils/constants";
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
      <div className="load-more-data">
        <Button
          type="button"
          kind="ghost"
          className="load-more-btn"
          onClick={() => {}}
        >
          See more+
        </Button>
      </div>
    </UserManageStyles>
  );
};

export default UserManage;
