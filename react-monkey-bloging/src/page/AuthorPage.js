import Layout from "components/layout/Layout";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import PostFeatureItem, {
  PostFeatureItemSkeleton,
} from "module/post/PostFeatureItem";
import React, { useEffect, useState } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";

const AuthorPage = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRel = collection(db, "posts");
    const queries = query(colRel, where("user.slug", "==", slug));
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
  if (!slug) return <PageNotFound></PageNotFound>;
  const isLoading = !posts;
  return (
    <Layout>
      <div className="container">
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
    </Layout>
  );
};

export default AuthorPage;
