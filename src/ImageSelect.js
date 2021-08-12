import React, { setState } from "react";
import styled from "styled-components";
import axios, { post } from "axios";

// const ImgSelect = styled.div`
//   background-color: none;
//   height: 30rem;
//   width: 50rem;
//   border: 1px solid red;
//   margin-bottom: 3rem;
// `;

const SelectBtn = styled.button`
  width: 10rem;
  height: 3rem;
  margin: auto;
  border: 1px solid #3c68fa;
  background-color: #fff;
  border-radius: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #3c68fa;
  cursor: pointer;
  &:hover {
    background-color: #3c68fa;
    color: #fff;
  }
`;

class ImageSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
    };
  }

  handleFileOnChange = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  fileUpload(file) {
    const url = "http://3.36.83.46";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  }

  render() {
    let imagePreview = null;
    if (this.state.file !== "") {
      imagePreview = (
        <img className="imagePreview" src={this.state.imagePreviewUrl}></img>
      );
    }

    return (
      <div>
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          onChange={this.handleFileOnChange}
        />
        <br />
        {/* <ImgSelect>{imagePreview}</ImgSelect> */}

        {imagePreview}
        <br />
        <SelectBtn type="submit" onClick="fileUpload">
          업로드하기
        </SelectBtn>
      </div>
    );
  }
}

export default ImageSelect;
