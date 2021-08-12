import React from "react";
import styled from "styled-components";
import { fadeIn } from "onLoad";
import { ReactComponent as CheckSvg } from 'assets/icon-check.svg';

const Container = styled.div`
	font-size: ${props=>props.theme.fontSizes.normal};
	display:flex;
	background-color: black;
	animation: ${fadeIn} 0.5s linear alternate both;
	position:relative;
	width:min-content;
	cursor: pointer;
	&>span{
		position: absolute;
		left:1rem;
		top:1rem;
		color:white;
		opacity:0.6;
	}
	&:hover{
		img{
			opacity:0.9;
		}
	}
	/* &::before{
		content:"check";
		position: absolute;
		right:1rem;
		bottom:1rem;
		font-weight: 500;
		color:white;
		z-index:1;
	} */
`;
const Img = styled.img`
	width:31vw;
	height:31vw;
	object-fit:cover;
`;

const Check = styled(CheckSvg)`
	width:3rem;
	height:3rem;
	position: absolute;
	right:1rem;
	bottom:1rem;
	opacity:0.5;
`;

const ModalImage = ({file_url, article, created_at="2021-02-03", is_verificated=true}) => (
	<Container onClick={()=>{alert();}}>
		<span>{created_at.substring(0,10)}</span>
		{is_verificated?<Check/>:<></>}
		<Img alt="img" src={file_url!=="" && file_url!==null && file_url!== undefined? `${file_url}`: require("assets/default-challenge.jpg").default}/>
	</Container>

);

export default ModalImage;
