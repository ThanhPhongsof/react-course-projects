import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Field } from "components/field";
import { Label } from "components/label";
import { Input } from "components/input";

const PostAddNewStylis = styled.div``;

const PostAddNew = () => {
  const { control, handelSubmit } = useForm({
    mode: "onChange",
  });
  return (
    <PostAddNewStylis>
      <h1 className="dashboard-heading">Add new post</h1>
      <form>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Title</Label>
            <Input
              name="title"
              control={control}
              placeholder="Enter your title"
            />
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              name="slug"
              control={control}
              placeholder="Enter your slug"
            />
          </Field>
        </div>
        <div className="grid grid-cols-2"></div>
      </form>
    </PostAddNewStylis>
  );
};

export default PostAddNew;
