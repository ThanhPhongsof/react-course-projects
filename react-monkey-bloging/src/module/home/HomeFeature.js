import Heading from "components/layout/Heading";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import PostFeatureItem, {
  PostFeatureItemSkeleton,
} from "module/post/PostFeatureItem";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRel = collection(db, "posts");
    const queries = query(
      colRel,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(4)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  const isLoading = !posts;
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Featured posts</Heading>
        {isLoading && (
          <div className="grid-layout">
            {new Array(3).fill(0).map(() => (
              <PostFeatureItemSkeleton key={v4()}></PostFeatureItemSkeleton>
            ))}
          </div>
        )}
        {!isLoading && (
          <div className="grid-layout">
            {posts?.map((post) => (
              <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
            ))}
          </div>
        )}
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
