import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "onLoad";
import {ReactComponent as Coin} from "assets/icon-coin.svg";


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
  .coinBox{
    z-index:3;
    font-size: ${props=>props.theme.fontSizes.normal};
    background-color: white;
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    position:absolute;
    right:1rem;
    display:flex;
    align-items: center;
    bottom:1rem;
    u{
      text-decoration:none;
      color:${(props)=> (props.isBig ? props.theme.colors.main : "red")};
    }
  }
`;

const CoinSvg = styled(Coin)`
  width:2rem;
  height:2rem;
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
  position:relative;
	background-image: url(${props => props.bgUrl});
	background-position: center center;
	background-size: cover;
	border-radius: 10px;
	padding-bottom: 70%;
	opacity:${props=> (props.status? 0.6: 1)};
`;

const ImgBox = ({thumbnail_url, title, status, id, total_distribute_charge=null ,fee}) => {  
  const isBig = total_distribute_charge - fee >= 0 ? true:false;
  return (
  <ImageBox to={`/challenge/${id}`}>
    <Image status={status!=="진행 중"} bgUrl={thumbnail_url!=="" && thumbnail_url!==null && thumbnail_url!== undefined? `${thumbnail_url}`: require("assets/default-challenge.jpg").default}>
      {
        total_distribute_charge!==null?
        (<div className="coinBox" isBig={isBig}> <CoinSvg/>&nbsp; 포인트&nbsp; <u>{isBig? total_distribute_charge - fee : (total_distribute_charge - fee)*-1}p&nbsp;</u> {isBig?"획득":"차감"}</div>):
        (<></>)
      }
    </Image>
    <Box>
		<h3>{title}</h3>
		<span>{status}</span>
    </Box>
  </ImageBox>);
};

//total_distribute_charge

export default ImgBox;
