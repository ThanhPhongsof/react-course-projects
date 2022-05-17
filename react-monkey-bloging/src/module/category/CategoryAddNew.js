import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const CategoryAddNewStyles = styled.div``;

const CategoryAddNew = () => {
  const { control } = useForm({
    mode: "onChange",
  });
  return (
    <CategoryAddNewStyles>
      <DashboardHeading
        title="New category"
        desc="Add new category"
      ></DashboardHeading>
      <form>
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
            <Input
              name="name"
              control={control}
              placeholder="Enter your category name"
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              name="slug"
              control={control}
              placeholder="Enter your slug"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <div className="flex-wrap-gap-5">
              <Radio name="status" control={control} checked={true}>
                Approved
              </Radio>
              <Radio name="status" control={control}>
                Unapproved
              </Radio>
            </div>
          </Field>
        </div>
        <Button type="submit" kind="primary" className="mx-auto">
          Add new category
        </Button>
      </form>
    </CategoryAddNewStyles>
  );
};

export default CategoryAddNew;
