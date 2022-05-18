import React from "react";
import styled from "styled-components";

const TableStylis = styled.div`
  overflow-x: auto;
  background-color: white;
  border-radius: 10px;
  table {
    width: 100%;
  }
  thead {
    background-color: #f7f7f8;
  }
  th,
  td {
    vertical-align: middle;
  }
  th {
    padding: 20px 30px;
    font-weight: 600;
    text-align: left;
  }
  td {
    padding: 15px 30px;
  }
`;

const Table = ({ children }) => {
  return (
    <TableStylis>
      <table>{children}</table>
    </TableStylis>
  );
};

export default Table;
