import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  border: 1px solid #cfcfcf;
  outline-style: none;
  border-radius: 1rem;
  opacity: 1;
  width: 100%;
  max-width: 50rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  font-size:${props=>props.theme.fontSizes.normal};
  ::placeholder {
    color: #c1c1c1;
  }
`;

const Textarea = ({ placeholder, value="" , onChange=()=>{}, required }) => {
  return <TextInput placeholder={placeholder} onChange={onChange} value={value} required={required}/>;
};

export default Textarea;
