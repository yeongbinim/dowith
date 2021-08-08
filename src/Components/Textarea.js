import React from "react";
import styled from "styled-components";

const TextareaContainer = styled.div`
  border: 1px solid #cfcfcf;
  outline-style: none;
  border-radius: 24px;
  opacity: 1;
  height: 48px;
  width: 100%;
  max-height: 50px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
`;

const Textarea = () => {
  return <TextareaContainer />;
};

export default Textarea;