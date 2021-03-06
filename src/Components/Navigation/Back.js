import React from "react";
import styled from "styled-components";

const BackButton = styled.div`
	position:absolute;
	left:2rem;
	top:2rem;
	width:5rem;
	height:5rem;
	cursor: pointer;
	&::before{
		position:absolute;
		content:"";
		width:1.3rem;
		height:1.3rem;
		border-left: 0.5rem solid black;
		transform:rotate(45deg);
		border-bottom: 0.5rem solid black;
	}
`;

const Back = () => {
  return (<>
  		<BackButton onClick={()=>{window.history.back();}}/>
	  	<div style={{width:"100%",height:"6rem"}}></div>
	  </>);
};

export default Back;
