import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImgSelect = styled.input.attrs((props) => ({
  type: "file",
}))`
  background-color: #c4c4c4;
  height: 20rem;
  width: 40rem;
  border: none;
`;

const ImageSelect = () => {
  return <ImgSelect />;
};

export default ImageSelect;
