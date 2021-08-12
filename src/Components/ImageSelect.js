import styled from "styled-components";

const ImgSelect = styled.input.attrs((props) => ({
  type: "file",
  name: "imgFile",
  id: "imgFile",
}))`
  background-color: #c4c4c4;
  height: 20rem;
  width: 40rem;
  border: none;
  margin-bottom: 3rem;
`;

const ImageSelect = () => {
  return <ImgSelect />;
};

export default ImageSelect;