import React from "react";
import styled from "styled-components";
import TitleImage from "Components/Challenge/TitleImage";
import TitleSection from "Components/Challenge/TitleSection";
import ChallengeNow from "Components/Challenge/ChallengeNow";
import MyBoard from "Components/Challenge/MyBoard";
import ModalImage from "Components/Challenge/ModalImage";

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
},temp}) => (
	<>
		<TitleContainer>
			<TitleImage thumbnail_url={thumbnail_url}/>
			<TitleSection total_challenge_period={total_challenge_period} life={life} fee={fee} challenge_status={challenge_status} title={title} description={description} captain_name={captain_name} participated_count={participated_count} create_date={create_date} end_date={end_date} start_date={start_date} />
		</TitleContainer>
		<ChallengeNow total_challenge_period = {total_challenge_period} id={id} total_accumulated_fine={total_accumulated_fine} elapsed_days={elapsed_days} days_left={days_left} challenge_status={challenge_status} temp={temp}/>
		{/* {<ChallengeButton content="챌린지 개설하기" status={true} clickEvent={()=>{alert()}} />} */}
	</>
);



const H3 = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight:600;
  padding:0 0.5rem;
`;
const H4 = styled.h4`
  	font-size: ${props => props.theme.fontSizes.normal};
  	font-weight:400;
`;
const MyContainer = styled.div`
	font-size: ${props => props.theme.fontSizes.normal};
  	padding:4rem 2vw;
`;
const PhotoContainer = styled.div`
	overflow-x: scroll;
	width:110%;
`;
const PhotoBox = styled.div`
	width:max-content;
	display:flex;
	& > div{
		margin-right:1vw;
	}
`;
const Dummy = styled.div`
  width:40vw;
  height:1rem;
  background:none;
  @media only screen and (min-width: 1000px) {
    width:60vw;
  }
`;

const ListBox = styled.div`
	width:100%;
	display:flex;
	flex-wrap:wrap;
	& > div{
		margin-right:1vw;
		margin-bottom:1vw;
	}
`;

export const MyverifyContainer = ({data_myverify:{
		verification_complete_count,
		verification_failed_count,
		total_challenge_ratio,
		verifications,
	},image_url
}) => (
	<MyContainer>
		<H3>챌린지 인증 보드</H3>
		<MyBoard image_url={image_url} verification_complete_count={verification_complete_count} verification_failed_count={verification_failed_count} total_challenge_ratio={total_challenge_ratio}/>
		<br/><br/>
		<H4>나의 인증샷</H4>
		<br/>
		<PhotoContainer>
			<PhotoBox>
				{verifications.map(({created_at,file_url,article,is_verificated})=><ModalImage created_at={created_at} article={article} is_verificated={is_verificated} file_url={file_url}/>)}
				<Dummy/>
			</PhotoBox>
		</PhotoContainer>
	</MyContainer>
);

export const AllverifyContainer = ({data_allverify}) => (
	<MyContainer>
		<H4>인증샷 전체보기</H4>
		<br/>
		<ListBox>
			{data_allverify.map(({id, created_at,file_url,article,is_verificated})=><ModalImage key={id} created_at={created_at} article={article} is_verificated={is_verificated} file_url={file_url}/>)}
		</ListBox>
	</MyContainer>
);

// Presenter.propTypes = {
// };