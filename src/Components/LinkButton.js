import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled(Link)`
  background-color: #fff;
  outline-style: none;
  color: #3c68fa;
  border: 1px solid #3c68fa;
  border-radius: 28px;
  opacity: 1;
  z-index: 1;
  margin-bottom: 3rem;
  height: 6rem;
  width: 100%;
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #3c68fa;
    color: #fff;
  }
`;

const TextContainer = styled.div`
  background-color: none;
  margin: auto;
  padding: 1.5rem 3rem;
  font-weight: 400;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const LinkButton = ({ contents, url }) => {
  return (
    <ButtonContainer to={url}>
      <TextContainer>
        <span
          style={{
            fontSize: "1.4rem",
            fontWeight: "400",
          }}
        >
          {contents}
        </span>
      </TextContainer>
    </ButtonContainer>
  );
};

export default LinkButton;
