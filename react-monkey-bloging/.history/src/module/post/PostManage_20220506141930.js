import { Table } from "components/table";
import React from "react";

const PostManage = () => {
  return (
    <div>
      <h1 className="dashboard-heading">Manage post</h1>
      <div className="mb-10 flex justify-end">
        <div className="w-full max-w-[300px]">
          <input
            type="text"
            className="w-full p-4 rounded-lg border border-solid border-gray-300"
            placeholder="Search post"
          />
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
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PostManage;
