import React from "react";
import styled from "styled-components";
import { fadeIn } from "onLoad";

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 70vw;
  border-bottom: 1px solid #dddddd;
  animation: ${fadeIn} 0.5s linear alternate both;
  @media only screen and (min-width: ${({theme:{deviceSizes}}) => deviceSizes.tabletL}) {
    height: 35vw;
  }
`;

const TitleImage = ({thumbnail_url}) => {
  return (
    <Image bgUrl={thumbnail_url!=="" && thumbnail_url!==null && thumbnail_url!== undefined? `${thumbnail_url}`: require("assets/default-challenge.jpg").default}/>
	);
};

export default TitleImage;
