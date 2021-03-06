import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LabelStatusStyles = styled.span`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;

/**
 *
 * @param type - "default" "success" "warning" "danger"
 * @returns
 */
const LabelStatus = ({ children, type = "default" }) => {
  let styleClassName = "text-gray-500 bg-gray-100";
  switch (type) {
    case "success":
      styleClassName = "text-green-500 bg-green-100";
      break;
    case "warning":
      styleClassName = "text-orange-500 bg-orange-100";
      break;
    case "danger":
      styleClassName = "text-red-500 bg-red-100";
      break;
    case "primary":
      styleClassName = "text-gray-100 bg-blue-500";
      break;
    case "info":
      styleClassName = "text-blue-500 bg-blue-200";
      break;
    case "purple":
      styleClassName = "text-purple-500 bg-purple-100";
      break;
    case "pink":
      styleClassName = "text-pink-500 bg-pink-100";
      break;
    case "inverse":
      styleClassName = "text-gray-100 bg-gray-800";
      break;
    default:
      styleClassName = "text-gray-100 bg-gray-500";
      break;
  }
  return (
    <LabelStatusStyles className={styleClassName}>{children}</LabelStatusStyles>
  );
};

LabelStatus.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf([
    "success",
    "warning",
    "danger",
    "default",
    "inverse",
    "primary",
    "info",
    "purple",
    "pink",
  ]).isRequired,
};

export default LabelStatus;
