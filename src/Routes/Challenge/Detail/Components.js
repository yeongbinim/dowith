import React from "react";
import styled from "styled-components";
import TitleImage from "Components/Challenge/TitleImage";
import TitleSection from "Components/Challenge/TitleSection";
import ChallengeNow from "Components/Challenge/ChallengeNow";

const TitleContainer=styled.section`
  display:flex;
  flex-direction: column;
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    align-items:stretch;
    align-content:stretch;
  }
`;
export const ChallengeContainer = ({data_challenge:{
	thumbnail_url,
	id,
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
	life,
	total_accumulated_fine,
	elapsed_days,
	days_left
}}) => (
	<>
		<TitleContainer>
			<TitleImage thumbnail_url={thumbnail_url}/>
			<TitleSection total_challenge_period={total_challenge_period} life={life} fee={fee} challenge_status={challenge_status} title={title} description={description} captain_name={captain_name} participated_count={participated_count} create_date={create_date} end_date={end_date} start_date={start_date} />
		</TitleContainer>
		<ChallengeNow total_challenge_period = {total_challenge_period} id={id} total_accumulated_fine={total_accumulated_fine} elapsed_days={elapsed_days} days_left={days_left} challenge_status={challenge_status}/>
	</>
);

export const MyverifyContainer = ({data_myverify}) => (
	<>
		<h2>챌린지 인증 보드</h2>
	</>
);

export const AllverifyContainer = (
	{
		verification_complete_count = 2,
		verification_failed_count = 0,
		total_challenge_ratio = 100,
		verifications = [
		  {
			file_url : "http://l.com",
			article : "나의 사랑 한글날 가나다라 마바사 아자차카 타파하",
			created_at : "2021-08-08T17:10:09.934102+09:00",
			is_verificated : false,
		  },
		  {
			file_url : "http://naver.com",
			article : "나의 사랑 한글날 가나다라 마바사 아자차카 타파하",
			created_at : "2021-08-07T12:54:47.660461+09:00",
			is_verificated : false,
		  }
		]
	}
) => (
	<>
		<h2>챌린지 인증 보드</h2>
	</>
);

// Presenter.propTypes = {
// };