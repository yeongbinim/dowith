import React from "react";
import styled from "styled-components";

const MenuContainer = styled.button`
	border:none;
	cursor:pointer;
	z-index:999;
	background-color:white;
	padding:2rem;
	& > div:not(:last-child){
		width: 3rem;
		margin-bottom: 0.4rem;
		height: 0.4rem;
		background-color: ${({theme:{colors}})=> colors.main};
	}
	& > div:last-child{
		width: 2rem;
		height: 0.4rem;
		background-color: ${({theme:{colors}})=> colors.main};
	}
`;

const Image = ({onClick}) => {
  return (<MenuContainer onClick={onClick}>
	  <div></div>
	  <div></div>
	  <div></div>
  </MenuContainer>);
};

export default Image;
