import React from "react";
import styled from "styled-components";

const Container = styled.div`
	font-size: 3rem;
	padding:1rem;
	min-height:60rem;
`;

const Presenter = () => (
	<Container>
		이곳은 챌린지 목록이 나오는 곳입니다.
	</Container>
);

// Presenter.propTypes = {
// };

export default Presenter;