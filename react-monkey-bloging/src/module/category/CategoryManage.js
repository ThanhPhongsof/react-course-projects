import { IconDelete, IconEdit } from "components/icon";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CategoryManageStyles = styled.div``;

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState();

  useEffect(() => {
    const colRef = collection(db, "categories");
    onSnapshot(colRef, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        console.log(doc);
        results.push({
          id: doc.id(),
          ...doc.data(),
        });
      });
      console.log(results);
      setCategoryList(results);
    });
  }, []);
  console.log(categoryList);
  return (
    <CategoryManageStyles>
      <DashboardHeading
        title="Categories"
        desc="Manage your category"
      ></DashboardHeading>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryList &&
            categoryList?.map((category) => (
              <tr key={category.id}>
                <td>01</td>
                <td>Front end</td>
                <td>
                  <span className="italic text-gray">front end</span>
                </td>
                <td>
                  <LabelStatus type="success">Approved</LabelStatus>
                </td>
                <td>
                  <div className="group-icon">
                    <IconEdit></IconEdit>
                    <IconDelete></IconDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </CategoryManageStyles>
  );
};

export default CategoryManage;
