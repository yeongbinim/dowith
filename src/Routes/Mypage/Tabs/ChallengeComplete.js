import React from "react";
import styled from "styled-components";
import ImageChallenge from "Components/ImageChallenge";

const Container = styled.div`
	margin-top:3rem;
	font-size: ${props => props.theme.fontSizes.normal};
	display:grid;
	grid-template-columns: repeat(auto-fill, minmax(24rem, auto));
	grid-auto-rows: max-content;
`;

const Presenter = ({
	finished = [
        {
            id: 3,
            title: "ccc",
            thumbnail_url: "",
        },
		{
            id: 1,
            title: "ccc",
            thumbnail_url: "",
        },
		{
            id: 2,
            title: "ccc",
            thumbnail_url: "",
        },
		{
            id: 4,
            title: "ccc",
            thumbnail_url: "",
        },
		{
            id: 5,
            title: "ccc",
            thumbnail_url: "",
        },
	]
}
) => (
	<Container>
		{finished.map(challenge=><ImageChallenge key={challenge.id} id={challenge.id} title={challenge.title} thumbnail_url={challenge.thumbnail_url} status={"완료"}/>)}
	</Container>
);

// Presenter.propTypes = {
// };

export default Presenter;