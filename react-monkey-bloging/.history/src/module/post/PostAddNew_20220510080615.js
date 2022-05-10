import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Field } from "components/field";
import { Label } from "components/label";
import { Input } from "components/input";
import { Button } from "components/button";
import { Checkbox, Radio } from "components/checkbox";
import { Dropdown } from "components/dropdown";
import slugify from "slugify";
import { postStatus } from "utils/constants";
import ImageUpload from "components/image/ImageUpload";
import useFirebaseImage from "hooks/useFirebaseImage";
import { Toggle } from "components/toggle";

const PostAddNewStylis = styled.div``;

const PostAddNew = () => {
  const { control, watch, setValue, getValues, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      category: "",
      hot: false,
    },
  });
  const watchStatus = watch("status");
  const watchCategory = watch("category");
  const watchHot = watch("hot");
  console.log(
    "🚀 ~ file: PostAddNew.js ~ line 32 ~ PostAddNew ~ watchHot",
    watchHot
  );
  const addPostHandler = async (values) => {
    const cloneValues = { ...values };
    values.slug = slugify(values.slug || values.title);
    values.status = Number(values.status);
    // const colRef = collection(db,"posts");
    // await addDoc(colRef,{
    //   image:
    // });
  };

  const { image, progress, handleSelecteImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues);

  return (
    <PostAddNewStylis>
      <h1 className="dashboard-heading">Add new post</h1>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Title</Label>
            <Input
              name="title"
              control={control}
              placeholder="Enter your title"
              required
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
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Image</Label>
            <ImageUpload
              name="image"
              progress={progress}
              image={image}
              onChange={handleSelecteImage}
              handleDeleteImage={handleDeleteImage}
            ></ImageUpload>
          </Field>
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </div>
          </Field>
        </div>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Feature Post</Label>
            <Toggle
              on={watchHot == false}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Field>
          <Field></Field>
        </div>
        <Button type="submit" className="mx-auto">
          Add new post
        </Button>
      </form>
    </PostAddNewStylis>
  );
};

export default PostAddNew;
