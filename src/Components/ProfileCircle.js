import React from "react";
import styled from "styled-components";

const CircleContainer = styled.div`
	background-image: url(${props => props.bgUrl});
  	background-position: center center;
  	background-size: cover;
  	width: 5rem;
  	height: 5rem;
`;

const Circle = ({imageUrl="assets/default-human.png"}) => {
  return <CircleContainer bgUrl={imageUrl}/>;
};

export default Circle;