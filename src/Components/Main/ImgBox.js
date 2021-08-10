import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "onLoad";

const ImageBox = styled(Link)`
  display:flex;
  flex-direction:column;
  & > span {
    margin-top: 0.7em;
  }
  animation: ${fadeIn} 1s linear alternate both;
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

const ImgBox = ({thumbnail_url, title="기본 타이틀", participated_count, id}) => {
  return (
  <ImageBox to={`/challenge/${id}`}>
    <Image bgUrl={thumbnail_url!=="" && thumbnail_url!==null && thumbnail_url!== undefined? `${thumbnail_url}`: require("assets/default-challenge.jpg").default}/>
    <Title>{title}</Title>
    <Body>총 {participated_count}명이 참여 중</Body>
  </ImageBox>);
};

export default ImgBox;
