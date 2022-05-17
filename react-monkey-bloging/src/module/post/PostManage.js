import { Button } from "components/button";
import { Dropdown } from "components/dropdown";
import { IconDelete, IconEdit, IconWatch } from "components/icon";
import { Pagination } from "components/pagination";
import { Table } from "components/table";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import styled from "styled-components";

const PostManageStyles = styled.div``;

const PostManage = () => {
  return (
    <PostManageStyles>
      <DashboardHeading
        title="All posts"
        desc="Manage all posts"
      ></DashboardHeading>
      <div className="flex justify-end gap-5 mb-10">
        <div className="w-full max-w-[200px]">
          <Dropdown>
            <Dropdown.Select placeholder="Category"></Dropdown.Select>
          </Dropdown>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <td>Id</td>
            <td>Post</td>
            <td>Category</td>
            <td>Author</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>01</td>
            <td>
              <div className="flex items-center gap-x-3">
                <img
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  alt=""
                  className="w-[66px] h-[55px] rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">One Special 4K Camera</h3>
                  <time className="text-sm text-gray-500">
                    Date: 25 Oct 2021
                  </time>
                </div>
              </div>
            </td>
            <td>
              <span className="text-gray-500">Camera Gear</span>
            </td>
            <td>
              <span className="text-gray-500">Vincent</span>
            </td>
            <td>
              <div className="group-icon">
                <IconWatch></IconWatch>
                <IconEdit></IconEdit>
                <IconDelete></IconDelete>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="mt-10">
        {/* <Pagination></Pagination> */}
        <Button kind="ghost" className="mx-auto w-[200px]">
          See more+
        </Button>
      </div>
    </PostManageStyles>
  );
};

export default PostManage;
