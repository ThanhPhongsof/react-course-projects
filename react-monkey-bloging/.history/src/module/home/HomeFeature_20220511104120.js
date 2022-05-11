import Heading from "components/layout/Heading";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import PostFeatureItem from "module/post/PostFeatureItem";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRel = collection(db, "posts");
    const queries = query(
      colRel,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(3)
    );
    onSnapshot(queries, (snapshot) => {
      const result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id(),
          ...doc.data,
        });
      });
    });
  }, []);
  if (posts.length <= 0) return null;

  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout">
          <PostFeatureItem></PostFeatureItem>
        </div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
