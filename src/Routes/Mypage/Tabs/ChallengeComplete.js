import React from "react";
import styled from "styled-components";
import ImageChallenge from "Components/ImageChallenge";

const Container = styled.div`
	margin-top:3rem;
	font-size: ${props => props.theme.fontSizes.normal};
	display:grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, auto));
    grid-auto-rows: max-content;
    @media only screen and (min-width: 600px){
    	grid-template-columns: repeat(auto-fill, minmax(28rem, auto));
  	}
`;

const Presenter = ({data_challenge}) => (
	<Container>
		{data_challenge.finished.map(challenge=><ImageChallenge fee={challenge.fee} total_distribute_charge={challenge.total_distribute_charge} key={challenge.id} id={challenge.id} title={challenge.title} thumbnail_url={challenge.thumbnail_url} status={"완료"}/>)}
	</Container>
);

// Presenter.propTypes = {
// };

export default Presenter;