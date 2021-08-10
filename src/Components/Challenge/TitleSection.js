import React from "react";
import styled from "styled-components";
import { fadeIn } from "onLoad";

const Section = styled.section`
  font-size: ${props => props.theme.fontSizes.normal};
  width:100vw;
  padding:1.5rem 2rem 2rem;
  & > *{
    margin-top:1.5rem;
  }
  border-bottom: 1px solid #dddddd;
  animation: ${fadeIn} 0.5s linear alternate both;
`;

const H2 = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight:700;
  & > span{
    float:right;
    font-size: ${props => props.theme.fontSizes.normal};
    font-weight:400;
    text-decoration: underline;
    color:${props => (props.iscomplete ? "gray" : props.theme.colors.main)};
  }
`;

const H3 = styled.h3`
  font-weight:600;
  & > span{
    font-weight:400;
  }
  u{
    font-weight:500;
    text-decoration: underline;
  }
`;

const TitleSection = ({
	challenge_status,
	captain_name,
	participated_count,
	total_challenge_period,
	title,
	description,
	fee,
	create_date,
	start_date,
	end_date,
}) => (
    <Section>
      <H2 iscomplete={challenge_status==="종료된 챌린지"}>{title}<span>{challenge_status}</span></H2><br/>
      <p>{description}</p><br/>
      <H3>챌린지장 : <span>{captain_name}님</span></H3>
      <H3>참여인원 : <span>{participated_count}명</span></H3>
      {challenge_status === "시작 전" ? <H3>생성 일자 : <span>{create_date}</span></H3> : ""}
      <H3>챌린지장 : <span>{start_date} ~ {end_date} &nbsp;&nbsp;<u>총 {total_challenge_period}일간 진행</u> </span></H3>
      <H3>참여포인트 : <span>{fee}P</span></H3>
    </Section>
	);

export default TitleSection;
