import React from "react";
import styled from "styled-components";

const TableStylis = styled.div`
  overflow-x: auto;
  background-color: white;
  table {
    width: 100%;
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
