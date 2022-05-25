import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";

const TextareaStyles = styled.div`
  position: relative;
  width: 100%;
  textarea {
    width: 100%;
    padding: 16px 20px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.grayBasic};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    font-size: 14px;
    resize: none;
    min-height: 300px;
  }
  textarea:-webkit-input-placeholder {
    color: #b2b3bd;
    font-weight: 500;
    transition: all 0.2s linear;
  }
  textarea::-moz-input-placeholder {
    color: #b2b3bd;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

/**
 *
 * @param {*} placeholder(optional) - Placeholder of Textare
 * @param {*} name(optional) - name of Textare
 * @param {*} control - control from react hook form
 * @returns Textare
 */
const Textarea = ({
  name = "",
  type = "text",
  children,
  control,
  ...props
}) => {
  const { field } = useController({ control, name, defaultValue: "" });

  return (
    <TextareaStyles hasIcon={children ? true : false}>
      <textarea id={name} type={type} {...props} {...field} />
      {children ? <div className="input-icon">{children}</div> : null}
    </TextareaStyles>
  );
};

export default Textarea;
