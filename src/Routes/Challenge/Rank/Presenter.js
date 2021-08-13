import React from "react";
import Helmet from "react-helmet";
import IllustSection from "Components/Main/IllustSection";
import styled from "styled-components";
import ProfileCircle from "Components/ProfileCircle";
import Loader from "Components/Loader";

const Div = styled.div`
  font-size: ${(props) => props.theme.fontSizes.normal};
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.my ? props.theme.colors.main : "white"};
  border-bottom: 1px solid #dddddd;
  color: ${(props) => (props.my ? "white" : "black")};
  & > div:first-child {
    display: flex;
    align-items: center;
    span:first-child {
      margin-right: 3rem;
    }
    span:last-child {
      margin-left: 1rem;
    }
  }
`;

const Presenter = ({dataRank,loading}) =>
loading ? 
    (<><Helmet><title>Loading | Dowith</title></Helmet><Loader /></>) : 
    (
      <>
        <Helmet><title>Rank | Dowith</title></Helmet>
        <IllustSection reverse={true} contents={["오늘 나는 몇등?","우리 챌린지의 챌린지 현황을", "한눈에 확인해보세요"]}/>
        {dataRank.my ? <Div my={true} key={0}>
          <div>
            <span>{dataRank.my.rank} 위</span>
            <ProfileCircle image_url={dataRank.my.image_url} size="4rem"/>
            <span>{dataRank.my.nickname}님</span>
          </div>
          <div>
            {dataRank.my.verification_count}/{dataRank.elapse_days}
          </div>
        </Div> : <>아직 까지 인증된 기록이 없습니다.</>}
        {dataRank.participations.map(participation=>(<Div key={participation.user_id}>

          <div>
            <span>{participation.rank} 위</span>
            <ProfileCircle image_url={participation.image_url} size="4rem" />
            <span>{participation.nickname}님</span>
          </div>
          <div>
            {participation.verification_count}/{dataRank.elapse_days}
          </div>
        </Div>
      ))}
    </>
  );


export default Presenter;
