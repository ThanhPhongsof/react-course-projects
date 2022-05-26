import { Button } from "components/button";
import { IconDelete, IconEdit, IconView } from "components/icon";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { useAuth } from "contexts/auth-context";
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
import { debounce } from "lodash";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { limitperPage, postStatus, userRole } from "utils/constants";

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

  const deletePostHandler = async (postId) => {
    const docRef = doc(db, "posts", postId);
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
          await deleteDoc(docRef);
          Swal.fire("Deleted!", "Post has been deleted.", "success");
        } catch (error) {
          Swal.fire(
            "Deleted Fail!",
            `Post hasn't been deleted. ${error.message}`,
            "danger"
          );
        }
      }
    });
  };

  const searchPostHandler = debounce((e) => {
    setFilter(e.target.value);
  }, 250);

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
  const { userInfo } = useAuth();
  if (userInfo.role !== userRole.ADMIN) return null;
  return (
    <PostManageStyles>
      <DashboardHeading
        title="All posts"
        desc="Manage all posts"
      ></DashboardHeading>
      <div className="flex justify-start gap-5 mb-10">
        <div className="w-full max-w-[300px]">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 border-solid rounded-lg"
            placeholder="Search post..."
            onChange={(e) => searchPostHandler(e)}
          />
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
                  <div className="flex-1 whitespace-pre-wrap">
                    <h3 className="font-semibold max-w-[300px] ">
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
                  <IconView
                    onClick={() => navigate(`/${post.slug}`)}
                  ></IconView>
                  <IconEdit
                    onClick={() =>
                      navigate(`/manage/update-post?id=${post.id}`)
                    }
                  ></IconEdit>
                  <IconDelete
                    onClick={() => deletePostHandler(post.id)}
                  ></IconDelete>
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
