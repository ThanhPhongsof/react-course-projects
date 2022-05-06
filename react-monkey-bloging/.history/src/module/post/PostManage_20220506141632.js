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
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default PostManage;
