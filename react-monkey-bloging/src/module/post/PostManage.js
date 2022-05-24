import { Button } from "components/button";
import { Dropdown } from "components/dropdown";
import { IconDelete, IconEdit, IconView } from "components/icon";
import { LabelStatus } from "components/label";
import { Pagination } from "components/pagination";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { limitperPage, postStatus } from "utils/constants";

const PostManageStyles = styled.div``;

const PostManage = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState();
  const [filter, setFilter] = useState();
  const [lastDoc, setLastDoc] = useState();
  const [total, setTotal] = useState(0);

  const loadMorePostHandler = async () => {
    if (!lastDoc) return;
    const nextRef = query(
      collection(db, "posts"),
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
      setPostList([...postList, ...results]);
    });
    const documentSnapshots = await getDocs(nextRef);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastDoc(lastVisible || "");
  };

  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "posts");
      const newRef = filter
        ? query(
            colRef,
            where("title", ">=", filter),
            where("title", "<=", filter + "utf8")
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
        setPostList(results);
      });
      setLastDoc(lastVisible);
    }
    fetchData();
  }, [filter]);

  const renderLabelStatus = (status) => {
    switch (status) {
      case postStatus.PENDING:
        return <LabelStatus type="warning">Pending</LabelStatus>;
      case postStatus.APPROVED:
        return <LabelStatus type="success">Approved</LabelStatus>;
      case postStatus.REJECTED:
        return <LabelStatus type="danger">Reject</LabelStatus>;
      default:
        break;
    }
  };

  return (
    <PostManageStyles>
      <DashboardHeading
        title="All posts"
        desc="Manage all posts"
      ></DashboardHeading>
      <div className="flex justify-end gap-5 mb-10">
        <div className="w-full max-w-[200px]">
          <Dropdown>
            <Dropdown.Select placeholder="Category"></Dropdown.Select>
          </Dropdown>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>Post</td>
            <td>Category</td>
            <td>Author</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {postList?.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td className="whitespace-nowrap">
                <div className="flex items-center gap-x-3">
                  <img
                    src={post.image}
                    alt={post.name}
                    className="w-[66px] h-[55px] rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold max-w-[100px] whitespace-nowrap">
                      {post.title}
                    </h3>
                    <time className="text-sm text-gray-500">
                      Create Date:
                      {new Date(
                        post?.createdAt?.seconds * 1000
                      ).toLocaleDateString("vi-VI")}
                    </time>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-gray-500">{post.category?.name}</span>
              </td>
              <td>
                <span className="text-gray-500">{post.user?.username}</span>
              </td>
              <td>{renderLabelStatus(Number(post?.status))}</td>
              <td>
                <div className="group-icon">
                  <IconView></IconView>
                  <IconEdit></IconEdit>
                  <IconDelete></IconDelete>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {total > postList?.length && (
        <div className="load-more-data">
          <Button
            type="button"
            kind="ghost"
            className="load-more-btn"
            onClick={loadMorePostHandler}
          >
            See more+
          </Button>
        </div>
      )}
    </PostManageStyles>
  );
};

export default PostManage;
