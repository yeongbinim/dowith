import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "onLoad";


const ImageBox = styled(Link)`
  display:flex;
  width: 100%;
  padding:1rem;
  flex-direction:column;
  z-index:1;
  position:relative;
  overflow:hidden;
  animation: ${fadeIn} 1s linear alternate both;
  & > span {
    margin-top: 0.7em;
  }
`;

const Box = styled.div`
	padding:1rem;
	display:flex;
	justify-content:space-between;
  	span{
		color : ${props=>props.theme.colors.main};
	}
`;

const Image = styled.div`
	width:100%;
	background-image: url(${props => props.bgUrl});
	background-position: center center;
	background-size: cover;
	border-radius: 10px;
	padding-bottom: 70%;
	opacity:${props=> (props.status? 0.6: 1)};
`;

const ImgBox = ({thumbnail_url, title, status, id}) => {
  return (
  <ImageBox to={`/challenge/${id}`}>
    <Image status={status!=="진행 중"} bgUrl={thumbnail_url!=="" && thumbnail_url!==null && thumbnail_url!== undefined? `${thumbnail_url}`: require("assets/default-challenge.jpg").default}/>
    <Box>
		<h3>{title}</h3>
		<span>{status}</span>
    </Box>
  </ImageBox>);
};

export default ImgBox;
