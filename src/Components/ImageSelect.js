import React from "react";
import { post } from "axios";

// const ImgSelect = styled.div`
//   background-color: none;
//   height: 30rem;
//   width: 50rem;
//   border: 1px solid red;
//   margin-bottom: 3rem;
// `;


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
        <img className="imagePreview" src={this.state.imagePreviewUrl} style={{width:"50rem",maxWidth:"90%"}} alt="img_preview"/>
      );
    }

    return (
      <div>
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          onChange={(event)=>{this.handleFileOnChange(event); this.props.onChange(event);}}
        />
        <br />
        {imagePreview}
      </div>
    );
  }
}

export default ImageSelect;