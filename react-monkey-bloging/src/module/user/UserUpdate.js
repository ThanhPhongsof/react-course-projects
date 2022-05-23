import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field, FieldCheckboxes } from "components/field";
import ImageUpload from "components/image/ImageUpload";
import { Input } from "components/input";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { Label } from "components/label";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { userRole, userStatus } from "utils/constants";
import useFirebaseImage from "hooks/useFirebaseImage";
import { auth, db } from "firebase-app/firebase-config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import slugify from "slugify";
import { useNavigate, useSearchParams } from "react-router-dom";

const UserUpdateStyles = styled.div`
  .form-img {
    margin-bottom: 40px;
    width: 200px;
    height: 200px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 9999px;
    &-upload {
      border-radius: 9999px !important;
    }
  }
`;

const UserUpdate = () => {
  const [params] = useSearchParams();
  const userId = params.get("id");
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  const watchStatus = watch("status");
  const watchRole = watch("role");
  const imageUrl = getValues("avartar");

  const updateUserHandler = async (values) => {
    if (!isValid) return;
    try {
      const colRef = doc(db, "users", userId);
      await updateDoc(colRef, {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
        username: slugify(values.username || values.fullname, {
          lower: true,
          replacement: " ",
          trim: true,
        }),
        avartar: image,
        status: Number(values.status),
        role: Number(values.role),
      });
      toast.success(`Update user successfully!`);
      navigate("/manage/users");
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (!userId) return;
      const colRef = doc(db, "users", userId);
      const docData = await getDoc(colRef);
      reset(docData && docData.data());
    }
    fetchData();
  }, [userId, reset]);

  const {
    image,
    progress,
    handleResetUpload,
    handleSelecteImage,
    handleDeleteImage,
  } = useFirebaseImage(setValue, getValues);

  return (
    <UserUpdateStyles>
      <DashboardHeading
        title="Update user"
        desc={`Update user id: ${userId}`}
      ></DashboardHeading>
      <form onSubmit={handleSubmit(updateUserHandler)}>
        <div className="form-img">
          <ImageUpload
            className="form-img-upload"
            image={imageUrl}
            progress={progress}
            onChange={handleSelecteImage}
            handleDeleteImage={handleDeleteImage}
          ></ImageUpload>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Fullname</Label>
            <Input
              name="fullname"
              control={control}
              placeholder="Enter your fullname"
            ></Input>
          </Field>
          <Field>
            <Label>Username</Label>
            <Input
              name="username"
              control={control}
              placeholder="Enter your username"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              control={control}
              placeholder="Enter your email"
            ></Input>
          </Field>
          <Field>
            <Label>Password</Label>
            <InputPasswordToggle control={control}></InputPasswordToggle>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.ACTIVE}
                value={userStatus.ACTIVE}
              >
                Active
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.PENDING}
                value={userStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.BANNED}
                value={userStatus.BANNED}
              >
                Banned
              </Radio>
            </FieldCheckboxes>
          </Field>
          <Field>
            <Label>Role</Label>
            <FieldCheckboxes>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.ADMIN}
                value={userRole.ADMIN}
              >
                Admin
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.MODERATOR}
                value={userRole.MODERATOR}
              >
                Moderator
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.EDITOR}
                value={userRole.EDITOR}
              >
                Editor
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.USER}
                value={userRole.USER}
              >
                User
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button
          type="submit"
          kind="primary"
          className="mx-auto w-[200px]"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Update user
        </Button>
      </form>
    </UserUpdateStyles>
  );
};

export default UserUpdate;
