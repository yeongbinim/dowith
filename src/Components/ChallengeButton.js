import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const ALink = styled(Link)`
	width:100%;
	border-radius:1rem;
	overflow:hidden;
	background-color: white;
	position:fixed;
	z-index: 999;
	left:0;
	bottom:-1.5rem;
	&:hover{
		opacity:0.7;
	}
	&>div{
		padding:2.5rem 0 4rem;
		color:white;
		text-align:center;
		background-color: ${props=>props.status === false ? "#dddddd" :props.theme.colors.main};
		font-size: ${props=>props.theme.fontSizes.h3};
	}
`;

const Div = styled.div`
	width:100%;
	border-radius:1rem;
	background-color: white;
	position:fixed;
	overflow:hidden;
	z-index: 999;
	left:0;
	bottom:-1.5rem;
	&>div:hover{
		opacity:${props=>props.status === false ? 1 : 0.7};
	}
	&>div{
		cursor:${props=>props.status === false ? "default":"pointer"};;
		padding:2.5rem 0 4rem;
		color:white;
		text-align:center;
		background-color: ${props=>props.status === false ? "#dddddd" :props.theme.colors.main};
		font-size: ${props=>props.theme.fontSizes.h3};
	}
`;

const ChallengeButton = ({url, content, status, clickEvent})=> {
	if (!status){
		return <Div status={false}><div>{content}</div></Div>
	}else{
		return clickEvent? <Div onClick={clickEvent} status={true}><div>{content}</div></Div>: <ALink to={url}><div>{content}</div></ALink>
	}
};
	
ChallengeButton.propTypes = {
    url:PropTypes.string,
    status:PropTypes.bool.isRequired,
	content:PropTypes.string.isRequired,
	clickEvent:PropTypes.func,
};

export default ChallengeButton;