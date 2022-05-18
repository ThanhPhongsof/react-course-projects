import { useDropdown } from "contexts/dropdown-context";
import React from "react";
import styled from "styled-components";

const SelectStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: white;
  border-width: 1px;
  border-color: rgb(241, 241, 243);
  border-radius: 8px;
  cursor: pointer;
`;

const Select = ({
  placeholder = "Please select an option",
  className = "",
}) => {
  const { toggle, show } = useDropdown();
  return (
    <SelectStyles className={className} onClick={toggle}>
      <span>{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </SelectStyles>
  );
};

export default Select;
