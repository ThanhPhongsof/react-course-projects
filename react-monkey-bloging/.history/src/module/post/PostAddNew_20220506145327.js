import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Field } from "components/field";

const PostAddNewStylis = styled.div``;

const PostAddNew = () => {
  const { control, handelSubmit } = useForm();
  return (
    <PostAddNewStylis>
      <h1 className="dashboard-heading">Add new post</h1>
      <form>
        <div className="grid grid-cols-2">
          <Field></Field>
        </div>
      </form>
    </PostAddNewStylis>
  );
};

export default PostAddNew;
