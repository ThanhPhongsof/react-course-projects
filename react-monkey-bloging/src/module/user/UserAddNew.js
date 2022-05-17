import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field, FieldCheckboxes } from "components/field";
import { Input } from "components/input";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { Label } from "components/label";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const UserAddNewStyles = styled.div``;

const UserAddNew = () => {
  const { control } = useForm({ mode: "onChange" });
  return (
    <UserAddNewStyles>
      <DashboardHeading
        title="New user"
        desc="Add new user to system"
      ></DashboardHeading>
      <form>
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
              <Radio name="status" control={control}>
                Active
              </Radio>
              <Radio name="status" control={control}>
                Pending
              </Radio>
              <Radio name="status" control={control}>
                Banned
              </Radio>
            </FieldCheckboxes>
          </Field>
          <Field>
            <Label>Role</Label>
            <FieldCheckboxes>
              <Radio name="status" control={control}>
                Admin
              </Radio>
              <Radio name="status" control={control}>
                Moderator
              </Radio>
              <Radio name="status" control={control}>
                Editor
              </Radio>
              <Radio name="status" control={control}>
                User
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button type="submit" kind="primary" className="mx-auto w-[200px]">
          Add new user
        </Button>
      </form>
    </UserAddNewStyles>
  );
};

export default UserAddNew;
