import React from "react";
import styled from "styled-components";
import Image from "Components/Main/ImgBox";
import Banner from "Components/Main/Banner";
import IllustSection from "Components/Main/IllustSection";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

const H2 = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h2};
  line-height: 1.3em;
  font-weight: 400;
  color: ${(props) => (props.isColor ? props.theme.colors.main : "black")};
  & > span {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.normal};
  }
  & > strong {
    font-weight: 700;
  }
`;

const Container = styled.div`
  padding: 2rem;
  overflow-x: hidden;
`;

const Section = styled.section`
  position: relative;
  z-index: 1;
  & > ul {
    margin-bottom: 5rem;
  }
`;
const Ul = styled.ul`
  margin: 1rem 0;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 105%;
  & > li:not(:last-child) {
    margin-right: 1rem;
  }
`;
const Dummy = styled.div`
  width: 25vw;
  height: 1rem;
  background: none;
  @media only screen and (min-width: 1000px) {
    width: 60vw;
  }
`;



const Presenter = ({isLogin,loading, data_allchallenge}) => loading ? (<><Helmet><title>Loading | Dowith</title></Helmet><Loader /></>) : ( 
  <>
  <Helmet><title>List | Dowith</title></Helmet>
  <IllustSection />
  <Container>
    <Section>
      <H2>마감임박 챌린지<br/><span>아직 시작하지 않은 챌린지에요! 참여해보세요!</span></H2>
      <Ul>
      {data_allchallenge.gathering.map(challenge => <li key={challenge.id}><Image title={challenge.title} thumbnail_url={challenge.thumbnail_url} participated_count={challenge.participated_count} id={challenge.id}/></li>)}
      <li><Dummy/></li>
      </Ul>
      <Banner isLogin={isLogin} reverse={true} contents={["원하는 챌린지가 없다면?","두윗에서는 직접 챌린지를 만들 수 있어요!","챌린지장이 되어 두윗러들과 함께 달려보아요!",">> 챌린지 트랙 만들러가기"]}/>
      <br/><br/>
      <H2>진행중인 챌린지<br/><span>아쉽게도 먼저 시작한 챌린지에요~ 구경하고 가세요!</span></H2>
      <Ul>
      {data_allchallenge.ongoing.map(challenge => <li key={challenge.id}><Image title={challenge.title} thumbnail_url={challenge.thumbnail_url} participated_count={challenge.participated_count} id={challenge.id}/></li>)}
      <li><Dummy/></li>
      </Ul>
      <H2>완료된 챌린지<br/><span>함께여서 더욱 즐거웠던 두윗 챌린지들을 추억해보세요!</span></H2>
      <Ul>
      {data_allchallenge.complete.map(challenge => <li key={challenge.id}><Image title={challenge.title} thumbnail_url={challenge.thumbnail_url} participated_count={challenge.participated_count} id={challenge.id}/></li>)}
      <li><Dummy/></li>
      </Ul>
    </Section>
  </Container>
  </>
);

export default Presenter;
