import React from "react";
import styled,{keyframes} from "styled-components";
import {fadeIn} from "onLoad";
import { ReactComponent as Run } from 'assets/icon-run.svg';

export const moveHuman = keyframes`
  0% {left:0;transform:rotate(10deg);}
  10%{transform:rotate(-10deg);}
  20%{transform:rotate(10deg);}
  30%{transform:rotate(-10deg);}
  40%{transform:rotate(10deg);}
  50%{transform:rotate(-10deg);}
  60%{transform:rotate(10deg);}
  70%{transform:rotate(-10deg);}
  80%{transform:rotate(10deg);}
  90%{transform:rotate(-10deg);}
  100% {left:80%;transform:rotate(10deg);}
`;
export const moveRoad = keyframes`
  0% {right:-100%}
  100% {right:0}
`;

const Container = styled.div`
	width:100vw;
	left:-2rem;
	overflow-x: hidden;
	height:20rem;
	background-color: #d1e2ff;
	animation: ${fadeIn} 1s linear alternate both;
	position:relative;
`;

const Runner = styled(Run)`
	position:absolute;
	right:0;
	bottom:2rem;
	width:18rem;
	z-index:1;
	height:16rem;
	animation: ${moveHuman}  ${props=>props.speed}ms linear alternate both;
`;

const Percent = styled.div`
	position:relative;
	width:calc(${props=>props.width} - 3rem);
	max-width:100%;
	height:100%;
`;

const Road = styled.div`
	position:absolute;
	width:100%;
	bottom:0;
	right:0;
	z-index:0;
	height:7rem;
  	background: linear-gradient(to right, rgba(60, 104, 250, 0), rgba(60, 104, 250,1));
	animation: ${moveRoad} ${props=>props.speed}ms linear alternate both;
	overflow:visible;
	&>div{
		position:absolute;
		bottom:50%;
		width:300vw;
		left:-100%;
		height:0.5rem;
		background-color: white;
	}
`;

const Rail = ({percent})=>(
	<Container>
		<Percent width={`${percent}%`}>
		<Runner speed={40*percent}/>
		</Percent>
		<Road speed={40*percent}><div></div></Road>
	</Container>
);

export default Rail;
