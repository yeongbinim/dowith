import React from "react";
import styled from "styled-components";

const CircleContainer = styled.div`
	background-image: url(${props => props.bgUrl});
  	background-position: center center;
  	background-size: cover;
  	width: ${props=>props.size};
  	height: ${props=>props.size};
	border-radius: 100%;
	position: relative;
	z-index:1;
`;

const Circle = ({imageUrl, size="5rem"}) => {
  return <CircleContainer size={size} bgUrl={imageUrl? `경로주소${imageUrl}`: require("assets/default-human.png").default}/>
};

export default Circle;