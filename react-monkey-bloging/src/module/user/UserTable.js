import { IconDelete, IconEdit } from "components/icon";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { limitperPage, userRole, userStatus } from "utils/constants";

const UserTable = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState();

  const deleteUserHandler = async (user) => {
    const colRef = doc(db, "users", user.id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteDoc(colRef);
          Swal.fire("Deleted!", "User has been deleted.", "success");
        } catch (error) {
          Swal.fire(
            "Deleted Fail!",
            `User hasn't been deleted. ${error.message}`,
            "danger"
          );
        }
      }
    });
  };

  useEffect(() => {
    const colRef = collection(db, "users");
    const queries = query(colRef);

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

  const renderLabelStatus = (status) => {
    switch (status) {
      case userStatus.PENDING:
        return <LabelStatus type="warning">Pending</LabelStatus>;
      case userStatus.ACTIVE:
        return <LabelStatus type="success">Active</LabelStatus>;
      case userStatus.BANNED:
        return <LabelStatus type="inverse">Banned</LabelStatus>;
      default:
        break;
    }
  };

  const renderLabelRole = (role) => {
    switch (role) {
      case userRole.ADMIN:
        return <LabelStatus type="success">Admin</LabelStatus>;
      case userRole.MODERATOR:
        return <LabelStatus type="purple">Moderator</LabelStatus>;
      case userRole.EDITOR:
        return <LabelStatus type="primary">Editor</LabelStatus>;
      case userRole.USER:
        return <LabelStatus type="default">User</LabelStatus>;
      default:
        break;
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          <td>#</td>
          <td>Info</td>
          <td>Username</td>
          <td>Email address</td>
          <td>Status</td>
          <td>Role</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {userList?.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td className="whitespace-nowrap">
              <div className="flex items-center gap-x-3">
                <img
                  src={user.avartar}
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-md"
                  alt=""
                />
                <div className="flex-1">
                  <h3>{user.fullname}</h3>
                  <time className="text-sm text-gray-400">
                    Create Date:
                    {new Date(
                      user?.createdAt?.seconds * 1000
                    ).toLocaleDateString("vi-VI")}
                  </time>
                </div>
              </div>
            </td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{renderLabelStatus(Number(user?.status))}</td>
            <td>{renderLabelRole(Number(user?.role))}</td>
            <td>
              <div className="group-icon">
                <IconEdit
                  onClick={() => navigate(`/manage/update-user?id=${user.id}`)}
                ></IconEdit>
                <IconDelete
                  onClick={() => deleteUserHandler(user)}
                ></IconDelete>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
