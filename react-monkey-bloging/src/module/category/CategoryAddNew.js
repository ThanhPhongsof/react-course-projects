import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import { db } from "firebase-app/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import slugify from "slugify";
import styled from "styled-components";
import { categoryStatus } from "utils/constants";

const CategoryAddNewStyles = styled.div``;

const CategoryAddNew = () => {
  const { userInfo } = useAuth();
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      slug: "",
      status: 1,
      createAt: new Date(),
    },
  });

  const addPostCategoryHandler = async (values) => {
    if (!isValid) return;
    setLoading(true);
    try {
      const cloneValues = { ...values };

      cloneValues.slug = slugify(cloneValues.slug || cloneValues.name, {
        lower: true,
      });
      cloneValues.status = Number(cloneValues.status);
      const colRef = collection(db, "categories");
      await addDoc(colRef, {
        ...cloneValues,
        userId: userInfo.uid,
        createdAt: serverTimestamp(),
      });
      toast.success("Create new category successfully!");
      reset({
        name: "",
        slug: "",
        status: 1,
      });
    } catch (err) {
      setLoading(false);
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);
  const watchStatus = watch("status");
  return (
    <CategoryAddNewStyles>
      <DashboardHeading
        title="New category"
        desc="Add new category"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(addPostCategoryHandler)} autoComplete="off">
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
            <Input
              name="name"
              control={control}
              placeholder="Enter your category name"
              required
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
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === categoryStatus.APPROVED}
                value={categoryStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === categoryStatus.UNAPPROVED}
                value={categoryStatus.UNAPPROVED}
              >
                Unapproved
              </Radio>
            </div>
          </Field>
        </div>
        <Button
          type="submit"
          kind="primary"
          className="mx-auto"
          isLoading={loading}
          disabled={loading}
        >
          Add new category
        </Button>
      </form>
    </CategoryAddNewStyles>
  );
};

export default CategoryAddNew;
