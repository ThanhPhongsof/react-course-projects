import { Button } from "components/button";
import { IconDelete, IconEdit, IconView } from "components/icon";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  endAt,
  onSnapshot,
  query,
  startAt,
  where,
} from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { categoryStatus } from "utils/constants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { debounce, orderBy } from "lodash";

const CategoryManageStyles = styled.div`
  .search-category {
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-end;
    input {
      padding: 16px 20px;
      border-width: 1px;
      border-color: rgb(209, 213, 219);
      border-radius: 8px;
    }
  }
`;

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState();
  const [categoryCount, setCategoryCount] = useState(0);
  const navigate = useNavigate();
  const [filter, setFilter] = useState();
  useEffect(() => {
    const colRef = collection(db, "categories");
    const newRef = filter
      ? query(
          colRef,
          where("name", ">=", filter),
          where("name", "<=", filter + "utf8")
        )
      : colRef;
    onSnapshot(newRef, (snapshot) => {
      let results = [];
      setCategoryCount(Number(snapshot.size));
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategoryList(results);
    });
  }, [filter]);

  const deleteCategoryHandler = async (docId) => {
    const colRef = doc(db, "categories", docId);
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
        await deleteDoc(colRef);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const searchCategoryHandler = debounce((e) => {
    setFilter(e.target.value);
  }, 500);

  return (
    <CategoryManageStyles>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button
          type="button"
          kind="ghost"
          height="60px"
          to="/manage/add-category"
        >
          Create category
        </Button>
      </DashboardHeading>
      <div className="search-category">
        <input
          type="text"
          placeholder="Search category..."
          onChange={searchCategoryHandler}
        />
      </div>
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
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <span className="italic text-gray">{category.slug}</span>
                </td>
                <td>
                  {Number(category.status) == categoryStatus.APPROVED && (
                    <LabelStatus type="success">Approved</LabelStatus>
                  )}
                  {Number(category.status) == categoryStatus.UNAPPROVED && (
                    <LabelStatus type="warning">Unapproved</LabelStatus>
                  )}
                </td>
                <td>
                  <div className="group-icon">
                    <IconView></IconView>
                    <IconEdit
                      onClick={() =>
                        navigate(`/manage/update-category?id=${category.id}`)
                      }
                    ></IconEdit>
                    <IconDelete
                      onClick={() => deleteCategoryHandler(category.id)}
                    ></IconDelete>
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
