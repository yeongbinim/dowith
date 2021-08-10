import React from "react";
import styled from "styled-components";
import { ReactComponent as Message } from 'assets/icon-message.svg';
import { ReactComponent as Tro } from 'assets/icon-tro.svg';
import {fadeIn} from "onLoad";

const IllustSection = styled.div`
	padding: 5rem;
	width:100%;
	height:28rem;
	display:flex;
	flex-direction:column;
	border-bottom:1px solid #eeeeee;
	position:relative;
	animation: ${fadeIn} 1s linear alternate both;
`;

const Msg = styled(Message)`
	position:absolute;
	right:1rem;
	bottom:1rem;
	width:21rem;
	height:20rem;
	z-index:-1;
`;
const Trop = styled(Tro)`
	position:absolute;
	right:1rem;
	bottom:3rem;
	width:21rem;
	height:20rem;
	z-index:-1;
`;

const ImgBox = ({reverse=false, contents=["두윗은 여러분과 함께 달리는 중!","인기 챌린지와 역대 챌린지를", "확인해보세요"]}) => {
  return (<IllustSection>
	  	{reverse? <Trop/> : <Msg/>}
		<span style={{fontSize:"1.8rem",fontWeight:"400"}}>{contents[0]}</span>
		<br/>
    	<span style={{fontSize:"2.4rem",fontWeight:"600"}}>{contents[1]}</span>
		<br/>
        <span style={{fontSize:"2.1rem",fontWeight:"400"}}>{contents[2]}</span>
  </IllustSection>);
};

export default ImgBox;
