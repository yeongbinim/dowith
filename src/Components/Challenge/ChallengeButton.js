import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const ALink = styled(Link)`
	color:pink;
`;

const ChallengeNow = (id)=> (
	<ALink to={`/certify/${id}`}>전체 랭킹 보기</ALink>
);

export default ChallengeNow;
