import React from "react";
import styled from "styled-components";
import ProfileCircle from "Components/ProfileCircle";

const Container = styled.div`
	display:flex;
	padding:2rem 0 1rem;
	align-items: center;
	justify-content:space-between;
	font-size: ${props=>props.theme.fontSizes.normal};
`;
const Board = styled.div`
	margin-left: 3rem;
	width:100%;
	background-color: #F3F7FA;
	border-radius: 15px;
	display:flex;
	justify-content: space-around;
	padding:2.5rem 1rem;
	&>div{
		display:flex;
		flex-direction:column;
		align-items:center;
		p{
			margin-top: 1.5rem;
			color:${props=>props.theme.colors.main};
		}
	}
`;

const MyBoard = ({image_url, verification_complete_count, verification_failed_count, total_challenge_ratio}) => (
<Container>
	<ProfileCircle image_url={image_url} size={'7rem'}/>
	<Board>
		<div><span>인증 완료</span><p>{verification_complete_count}</p></div>
		<div><span>인증 실패</span><p>{verification_failed_count}</p></div>
		<div><span>나의 달성률</span><p>{total_challenge_ratio}%</p></div>
	</Board>
</Container>);

export default MyBoard;
