import React from "react";
import styled, {keyframes} from "styled-components";
import ProfileCircle from "Components/ProfileCircle";
import { ReactComponent as Track } from 'assets/icon-track.svg';
import { ReactComponent as Coin } from 'assets/icon-coin.svg';

const Back = styled(Track)`
	position:absolute;
	left:0;
	top:50%;
	transform:translate(0,-55%);
	z-index:0;
	width:24rem;
`;

const Section1 = styled.section`
	position:relative;
	padding:7rem 2rem 0rem;
	width:105%;
	max-width:70rem;
	margin: 0 auto 10rem;
	border-radius: 10px;
	display:flex;
	flex-direction: column;
	align-items:center;
	background-color: ${({theme:{colors}})=>colors.background};
	& > h3{
		position: relative;
		z-index:1;
		font-size: ${({theme:{fontSizes}})=>fontSizes.h3};
		margin-top: 1rem;
		strong{
			font-weight:700;
		}
	}
`;


const Load = keyframes`
  0% {
    transform:scaleX(-80%);
  }
  33%{
	transform:scaleX(80%) translate(0,-20%);
  }
  66%{
	transform:scaleX(-80%) translate(0,0);
  }
  100% {
    transform:scaleX(80%);
  }
`;

const CoinImg = styled(Coin)`
	width:7rem;
	animation: ${Load} 1s 1 linear alternate both;
`;

const CoinBox = styled.div`
	position: relative;
	width:35rem;
	margin: 0 auto;
	box-shadow: 0 5px 10px #cccccc;
	border-radius: 10px;
	background-color: white;
	padding:2rem 4rem;
	transform:translate(0, 50%);
	display:flex;
	justify-content:space-around;
	align-items:center;
	& > div{
		display:flex;
		flex-direction:column;
		align-items:center;
		font-size: ${({theme:{fontSizes}})=>fontSizes.normal};
		span:last-child{
			font-weight:700;
			margin-top:0.8rem;
		}
	}
`;


const Section2 = styled.section`
	position:relative;
	z-index:1;
`
const Button = styled.div`
	font-size: ${({theme:{fontSizes}})=>fontSizes.h3};
	padding:2rem;
	text-align:center;
	cursor: pointer;
	width:100%;
	border-bottom: ${props=>props.active ? "8px solid #dddddd":"none"};
`;
const ButtonBox = styled.div`
	display:flex;
`;

const Presenter = ({coin=0, name="김민지", complete=0,ongoing=0,tabs}) => {
	return (
	<>
		<Section1>
			<Back/>
			<ProfileCircle size="14rem"/>
			<h3><strong>{name}</strong>님</h3>
			<CoinBox>
				<CoinImg/>
				<div>
					<span>내 포인트</span>
					<span>{coin}P</span>
				</div>
			</CoinBox>
		</Section1>
		<Section2>
			<ButtonBox>
				<Button active={tabs.currentIdx === 0} onClick={() => {tabs.changeItem(0);}}>챌린지 목록 ({ongoing})</Button>
				<Button active={tabs.currentIdx === 1} onClick={() => {tabs.changeItem(1);}}>완료된 챌린지 ({complete})</Button>
			</ButtonBox>
			{tabs.currentItem}
		</Section2>
	</>
	);
};

// Presenter.propTypes = {
// };

export default Presenter;