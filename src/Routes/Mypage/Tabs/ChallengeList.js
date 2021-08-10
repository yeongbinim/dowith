import React from "react";
import styled from "styled-components";
import ImageChallenge from "Components/ImageChallenge";

const Container = styled.div`
	margin-top:3rem;
	font-size: ${props => props.theme.fontSizes.normal};
	display:grid;
	grid-template-columns: repeat(auto-fill, minmax(16rem, auto));
	grid-auto-rows: max-content;
	@media only screen and (min-width: 600px){
    	grid-template-columns: repeat(auto-fill, minmax(28rem, auto));
  	}
	
`;




const Presenter = (
	{
		gathering = [
			{
				id : 7,
				title : "챌린챌린지",
				thumbnail_url : "",
        	},
		],
    	ongoing = [
			{
				id: 2,
				title: "챌린챌린지",
				thumbnail_url: "",
			}
    	]
}
) => (
	<Container>
		{ongoing.map(challenge=><ImageChallenge key={challenge.id} id={challenge.id} title={challenge.title} thumbnail_url={challenge.thumbnail_url} status={"진행 중"}/>)}
		{gathering.map(challenge=><ImageChallenge key={challenge.id} id={challenge.id} title={challenge.title} thumbnail_url={challenge.thumbnail_url} status={"시작 전"}/>)}
	</Container>
);

// Presenter.propTypes = {
// };

export default Presenter;