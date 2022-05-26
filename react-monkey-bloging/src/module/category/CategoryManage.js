import { Button } from "components/button";
import { IconDelete, IconEdit, IconView } from "components/icon";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { categoryStatus, limitperPage, userRole } from "utils/constants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { InputSearch } from "components/input";
import { useAuth } from "contexts/auth-context";

const CategoryManageStyles = styled.div`
  .search-category {
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

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState();
  const navigate = useNavigate();
  const [filter, setFilter] = useState();
  const [lastDoc, setLastDoc] = useState();
  const [total, setTotal] = useState(0);

  const loadMoreCategoryHandler = async () => {
    if (!lastDoc) return;
    const nextRef = query(
      collection(db, "categories"),
      startAfter(lastDoc),
      limit(limitperPage)
    );
    onSnapshot(nextRef, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategoryList([...categoryList, ...results]);
    });
    const documentSnapshots = await getDocs(nextRef);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastDoc(lastVisible || "");
  };

  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "categories");
      const newRef = filter
        ? query(
            colRef,
            where("name", ">=", filter),
            where("name", "<=", filter + "utf8")
          )
        : query(colRef, limit(limitperPage));
      const documentSnapshots = await getDocs(newRef);
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];

      onSnapshot(colRef, (snapshot) => {
        setTotal(snapshot.size);
      });

      onSnapshot(newRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCategoryList(results);
      });
      setLastDoc(lastVisible);
    }
    fetchData();
  }, [filter]);

  const deleteCategoryHandler = async (docId) => {
    const docRef = doc(db, "categories", docId);
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
        await deleteDoc(docRef);
        Swal.fire("Deleted!", "Category has been deleted.", "success");
      }
    });
  };

  const searchCategoryHandler = debounce((e) => {
    setFilter(e.target.value);
  }, 500);

  const { userInfo } = useAuth();
  if (userInfo.role !== userRole.ADMIN) return null;

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
        <InputSearch
          placeholder="Search category..."
          onChange={searchCategoryHandler}
        ></InputSearch>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryList?.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <span className="italic text-gray-400">{category.slug}</span>
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
      {total > categoryList?.length && (
        <div className="load-more-data">
          <Button
            type="button"
            kind="ghost"
            className="load-more-btn"
            onClick={loadMoreCategoryHandler}
          >
            See more+
          </Button>
        </div>
      )}
    </CategoryManageStyles>
  );
};

export default CategoryManage;
