import { Button } from "components/button";
import { Field } from "components/field";
import ImageUpload from "components/image/ImageUpload";
import { Input } from "components/input";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { Label } from "components/label";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const UserProfileStyles = styled.div`
  .form-img {
    text-align: center;
    margin-bottom: 10px;
    &-upload {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      min-height: 0px;
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

const UserProfile = () => {
  const { control } = useForm({ mode: "onChange" });
  return (
    <UserProfileStyles>
      <DashboardHeading
        title="Account information"
        desc="Update your account information"
      ></DashboardHeading>
      <form>
        <div className="form-img">
          <ImageUpload className="form-img-upload"></ImageUpload>
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
            <Label>Date of birth</Label>
            <Input
              name="birthday"
              control={control}
              placeholder="dd/mm/yyyy"
            ></Input>
          </Field>
          <Field>
            <Label>Mobile number</Label>
            <Input
              name="phone"
              control={control}
              placeholder="Enter your phone number"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              control={control}
              type="email"
              placeholder="Enter your email address"
            ></Input>
          </Field>
          <Field></Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Password</Label>
            <InputPasswordToggle control={control}></InputPasswordToggle>
          </Field>
          <Field>
            <Label>Confirm password</Label>
            <Input
              name="confirmPassword"
              control={control}
              type="password"
              placeholder="Enter your confirm password"
            ></Input>
          </Field>
        </div>
        <Button type="submit" kind="primary" className="mx-auto w-[200px]">
          Update
        </Button>
      </form>
    </UserProfileStyles>
  );
};

export default UserProfile;
