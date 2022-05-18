import React from "react";
import styled from "styled-components";
import { useDropdown } from "contexts/dropdown-context";

const OptionStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
`;

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <OptionStyles className="hover:text-primary" onClick={handleClick}>
      {props.children}
    </OptionStyles>
  );
};

export default Option;
