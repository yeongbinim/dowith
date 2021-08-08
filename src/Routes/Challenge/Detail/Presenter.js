import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const Container = styled.div`
	position:relative;
	padding:1rem;
	z-index:1;
`;
const ALink = styled(Link)`
	color:pink;
`;

const Presenter = ({result, loading, error}) =>
loading ? (
    <>
      <Helmet>
        <title>Loading | Dowith</title>
      </Helmet>
      {/* <Loader /> */}
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.title ? result.title : "Challenge "}
          | Dowith
        </title>
      </Helmet>
      이곳은 챌린지 디테일 페이지
	  <ALink to={`/challenge/rank/0`}>전체 랭킹 보기</ALink>
    </Container>
  );

// Presenter.propTypes = {
// };

export default Presenter;