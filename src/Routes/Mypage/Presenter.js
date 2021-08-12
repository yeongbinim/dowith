import React from "react";
import styled, {keyframes} from "styled-components";
import ProfileCircle from "Components/ProfileCircle";
import Helmet from "react-helmet";
import { ReactComponent as Track } from 'assets/icon-track.svg';
import { ReactComponent as Coin } from 'assets/icon-coin.svg';
import Loader from "Components/Loader";

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
	padding:7rem 0 0;
	width:100%;
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
	bottom:0rem;
    transform:rotateX(360deg);
  }
  33%{
	transform:rotateX(0deg);
  }
  66%{
	bottom:2rem;
	transform:rotateX(360deg);
  }
  100% {
	bottom:0rem;
    transform:rotateX(0deg);
  }
`;

const CoinImg = styled(Coin)`
	position:relative;
	width:7rem;
	animation: ${Load} 1s 1 linear alternate both;
`;

const CoinBox = styled.div`
	position: relative;
	width:33rem;
	max-width:90%;
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
	min-height:35rem;
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

const Presenter = ({data_challenge, data_my, loading, tabs}) =>
		loading ? (<><Helmet><title>Loading | Dowith</title></Helmet><Loader /></>) : 
		(
			<>
			<Helmet><title>Mypage | Dowith</title></Helmet>
			<div style={{overflowX:"hidden"}}>
				<Section1>
					<Back/>
					<ProfileCircle image_url={data_my.image_url} size="14rem"/>
					<h3><strong>{data_my.nickname}</strong>님</h3>
					<CoinBox>
						<CoinImg/>
						<div>
							<span>내 포인트</span>
							<span>{data_my.point}P</span>
						</div>
					</CoinBox>
				</Section1>
				<Section2>
					<ButtonBox>
						<Button active={tabs.currentIdx === 0} onClick={() => {tabs.changeItem(0);}}>챌린지 목록 ({data_challenge.gathering_ongoing_count})</Button>
						<Button active={tabs.currentIdx === 1} onClick={() => {tabs.changeItem(1);}}>완료된 챌린지 ({data_challenge.finished_count})</Button>
					</ButtonBox>
					{tabs.currentItem}
				</Section2>
			</div>
			</>
		);

// Presenter.propTypes = {
// };

export default Presenter;