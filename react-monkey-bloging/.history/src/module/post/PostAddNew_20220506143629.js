import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const PostAddNewStylis = styled.div``;

const PostAddNew = () => {
  const { control, handelSubmit } = useForm();
  return (
    <PostAddNewStylis>
      <h1 className="dashboard-heading">Add new post</h1>
    </PostAddNewStylis>
  );
};

export default PostAddNew;
