import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {fadeIn} from "onLoad";


const ALink = styled(Link)`
	color:pink;
`;

const Section = styled.section`
	padding:2rem;
	display:flex;
	position:relative;
	flex-direction:column;
  	font-size: ${props => props.theme.fontSizes.normal};
	border-bottom: 1px solid #dddddd;
	& > *{
    	margin-top:1.5rem;
  	}
	animation: ${fadeIn} 1s linear alternate both;
`;

const H3 = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight:700;
`;


const ChallengeNow = ({
	total_accumulated_fine,
	elapsed_days,
	total_challenge_period,
	days_left,
	id,
	challenge_status
}) => (
	  challenge_status==="시작 전" ? (<span>
		아직 챌린지가 시작하지 않았어요! {days_left}일 남음!
	  </span>):(
	  	<Section>
			<H3>챌린지 현황</H3>
			<span>오늘은 챌린지 {elapsed_days}일째! 누적상금은 {total_accumulated_fine}P 입니다!</span>
			<span>{(elapsed_days/total_challenge_period)*100}%</span>
			<ALink to={`/challenge/rank/${id}`}>전체 랭킹 보기</ALink>
		</Section>)
	);

export default ChallengeNow;
