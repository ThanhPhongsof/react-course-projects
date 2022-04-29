import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  background-color: ${(props) => props.primary};
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      Signup
    </SignUpPageStyles>
  );
};

export default SignUpPage;
