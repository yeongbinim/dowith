import React from "react";
import styled from "styled-components";
import ChallengeButton from "Components/ChallengeButton";

const Container = styled.div`
	padding:1rem;
`;

const Presenter = () => (
	<Container>
		<ChallengeButton content="챌린지 개설하기" status={true} clickEvent={()=>{alert()}} />
	</Container>
);

// Presenter.propTypes = {
// };

export default Presenter;