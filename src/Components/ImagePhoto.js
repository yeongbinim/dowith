import React from "react";
import styled from "styled-components";

const PhotoContainer = styled.div`
	background-image: url(${props => props.bgUrl});
  	background-position: center center;
  	background-size: cover;
  	width: ${props=>props.size};
  	height: ${props=>props.size};
	border-radius: 100%;
	position: relative;
	z-index:1;
`;

const Photo = ({image_url, size="5rem"}) => {
  return <PhotoContainer size={size} bgUrl={ image_url!=="" && image_url!==null && image_url!== undefined? `${image_url}`: require("assets/default-human.png").default}/>
};

export default Photo;