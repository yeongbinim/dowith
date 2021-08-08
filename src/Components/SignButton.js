import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  background-color: #b9b9b9;
  outline-style: none;
  border-radius: 24px;
  opacity: 1;
  height: 48px;
  width: 100%;
  max-height: 50px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #3c68fa;
  }
`;

const Button = () => {
  return <ButtonContainer />;
};

export default Button;