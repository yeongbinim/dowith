import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {fadeIn} from "onLoad";
import Rail from "./Rail";

const ALink = styled(Link)`
	position:absolute;
	right:1rem;
	top:2rem;
	&:hover{
		color:${props=>props.theme.colors.main}
	}
`;

const Section = styled.section`
	padding:2rem;
	display:flex;
	position:relative;
	flex-direction:column;
  	font-size: ${props => props.theme.fontSizes.normal};
	border-bottom: 1px solid #eeeeee;
	min-height:20rem;
	& > *{
    	margin:1rem 0;
  	}
	animation: ${fadeIn} 1s linear alternate both;
`;

const H2 = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight:600;
`;

const Ment = styled.div`
	font-size: ${props => props.theme.fontSizes.h3};
	display:flex;
	justify-content:center;
	padding:1rem;
	span{
	}
	u{
		text-decoration:none;
		color:${props=>props.theme.colors.main};
	}
	&>*{
		margin-right:3rem;
	}
`;

const ChallengeNow = ({
	total_accumulated_fine,
	elapsed_days,
	total_challenge_period,
	days_left,
	id,
	challenge_status,temp
}) => (
	  challenge_status==="시작 전" ? (<Section>
		  	<H2>챌린지 현황</H2>
			<span style={{color:"gray"}}>아직 챌린지가 시작하지 않았어요! {days_left}일 남음!</span>
	  </Section>):(
	  	<Section>
			<H2>챌린지 현황</H2>
			<Rail percent={(elapsed_days/total_challenge_period)*100}/>
			<Ment>
				<span>오늘은 <u>챌린지 {elapsed_days}일째</u></span>
				<span>총 벌금 <u>{total_accumulated_fine}P</u></span>
			</Ment>
			{temp===1 || temp===2 ? <ALink to={`/challenge/rank/${id}`}>전체 랭킹 보기</ALink>:<></>}
		</Section>)
	);

export default ChallengeNow;
