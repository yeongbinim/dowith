import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  border: 1px solid #cfcfcf;
  outline-style: none;
  border-radius: 3rem;
  opacity: 1;
  height: 48px;
  width: 100%;
  max-height: 50px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  ::placeholder {
    color: #c1c1c1;
  }
`;

const Textarea = ({ placeholder }) => {
  return <TextInput placeholder={placeholder} />;
};

export default Textarea;
