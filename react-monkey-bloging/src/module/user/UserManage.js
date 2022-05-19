import { Button } from "components/button";
import { IconDelete, IconEdit } from "components/icon";
import { InputSearch } from "components/input";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import { collection, limit, onSnapshot, query } from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { limitperPage, userRole, userStatus } from "utils/constants";

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
  const [userList, setUserList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const colRef = collection(db, "users");
    const queries = query(colRef, limit(limitperPage));

    onSnapshot(queries, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(result);
    });
  }, []);

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
      <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>Fullname</td>
            <td>Username</td>
            <td>Email</td>
            <td>Status</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {userList?.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <span className="font-semibold">{user.fullname}</span>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {Number(user.status) == userStatus.PENDING && (
                  <LabelStatus type="warning">Pending</LabelStatus>
                )}
                {Number(user.status) == userStatus.SUCCESS && (
                  <LabelStatus type="success">Success</LabelStatus>
                )}
                {Number(user.status) == userStatus.BANNED && (
                  <LabelStatus type="danger">Banned</LabelStatus>
                )}
              </td>
              <td>
                {Number(user.role) == userRole.ADMIN && (
                  <LabelStatus type="success">Admin</LabelStatus>
                )}
                {Number(user.role) == userRole.MODERATOR && (
                  <LabelStatus type="purple">Moderator</LabelStatus>
                )}
                {Number(user.role) == userRole.EDITOR && (
                  <LabelStatus type="primary">Editor</LabelStatus>
                )}
                {Number(user.role) == userRole.USER && (
                  <LabelStatus>User</LabelStatus>
                )}
              </td>
              <td>
                <div className="group-icon">
                  <IconEdit
                    onClick={navigate(`/manage/update-user?id=${user.id}`)}
                  ></IconEdit>
                  <IconDelete
                  // onClick={() => deleteUserHandler(category.id)}
                  ></IconDelete>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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
