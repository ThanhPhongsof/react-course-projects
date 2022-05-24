import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { db } from "firebase-app/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import slugify from "slugify";
import styled from "styled-components";
import { categoryStatus } from "utils/constants";

const CategoryUpdateStyles = styled.div``;

const CategoryUpdate = () => {
  const [params] = useSearchParams();
  const cateogryId = params.get("id");
  const navigate = useNavigate();
  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const watchStatus = watch("status");

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "categories", cateogryId);
      const singleDoc = await getDoc(docRef);
      reset(singleDoc.data());
    }
    fetchData();
  }, [cateogryId]);

  const updatePostCategoryHandler = async (values) => {
    if (!isValid) return;
    try {
      const colRef = doc(db, "categories", cateogryId);
      await updateDoc(colRef, {
        name: values.name,
        slug: slugify(values.slug || values.name, { lower: true }),
        status: Number(values.status),
      });
      toast.success(`Update category successfully!`);
      navigate("/manage/categories");
    } catch (err) {
      toast.error(err);
    }
  };

  if (!cateogryId) return null;
  return (
    <CategoryUpdateStyles>
      <DashboardHeading
        title="Update category"
        desc={`Update your category id: ${cateogryId}`}
      ></DashboardHeading>
      <form
        onSubmit={handleSubmit(updatePostCategoryHandler)}
        autoComplete="off"
      >
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
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Update category
        </Button>
      </form>
    </CategoryUpdateStyles>
  );
};

export default CategoryUpdate;
