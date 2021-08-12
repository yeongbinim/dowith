import React from "react";
import styled,{keyframes} from "styled-components";

const spinner = keyframes`
	0% {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg);
	}
`;

const Container = styled.div`
	position: fixed;
	z-index: 999;
	height: 2em;
	width: 2em;
	overflow: visible;
	margin: auto;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	&::before{
		content: '';
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.3);
	}
	&:not(:required){
		font: 0/0 a;
		color: transparent;
		text-shadow: none;
		background-color: transparent;
		border: 0;
	}
	&:not(:required):after{
		content: '';
		display: block;
		font-size: 10px;
		width: 1em;
		height: 1em;
		margin-top: -0.5em;
		-webkit-animation: ${spinner} 1500ms infinite linear;
		-moz-animation: ${spinner} 1500ms infinite linear;
		-ms-animation: ${spinner} 1500ms infinite linear;
		-o-animation: ${spinner} 1500ms infinite linear;
		animation: ${spinner} 1500ms infinite linear;
		border-radius: 0.5em;
		box-shadow: rgba(61,105,250,0.8) 1.5em 0 0 0, rgba(61,105,250,0.8) 1.1em 1.1em 0 0, rgba(61,105,250,0.8) 0 1.5em 0 0, rgba(61,105,250,0.8) -1.1em 1.1em 0 0, rgba(61,105,250,0.8) -1.5em 0 0 0, rgba(61,105,250,0.8) -1.1em -1.1em 0 0, rgba(61,105,250,0.8) 0 -1.5em 0 0, rgba(61,105,250,0.8) 1.1em -1.1em 0 0;
	}
`;

const Loader = () => {
  return <Container/>
};

export default Loader;