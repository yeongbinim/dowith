import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImageBox = styled(Link)`
  display:flex;
  flex-direction:column;
  & > span {
    margin-top: 0.7em;
  }
`;

const Title = styled.span`
  font-size:${({theme:{fontSizes}}) => fontSizes.h3};
  font-weight:700;
`;
const Body = styled.span`
  font-size:${({theme:{fontSizes}}) => fontSizes.normal};
  font-weight:400;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 30rem;
  height: 18rem;
`;

const ImgBox = ({imageUrl, challengeTitle="기본 타이틀",peopleNum=0, id=0}) => {
  return (
  <ImageBox to={`/challenge/${id}`}>
    <Image bgUrl={imageUrl? `경로주소${imageUrl}`: require("assets/default-challenge.jpg").default}/>
    <Title>{challengeTitle}</Title>
    <Body>총 {peopleNum}명이 참여 중</Body>
  </ImageBox>);
};

export default ImgBox;
