import React from "react";
import Helmet from "react-helmet";
import IllustSection from "Components/Main/IllustSection";
import styled from "styled-components";
import ProfileCircle from "Components/ProfileCircle";
import PropTypes from "prop-types";

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

const Presenter = ({
  dataRank: { my, participations, elapse_days },
  loading = false,
}) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Dowith</title>
      </Helmet>
      {/* <Loader /> */}
    </>
  ) : (
    <>
      <Helmet>
        <title>Rank | Dowith</title>
      </Helmet>
      <IllustSection
        reverse={true}
        contents={[
          "오늘 나는 몇등?",
          "우리 챌린지의 챌린지 현황을",
          "한눈에 확인해보세요",
        ]}
      />
      <Div my={true} key={0}>
        <div>
          <span>{my.rank} 위</span>
          <ProfileCircle image_url={my.image_url} size="4rem" />
          <span>{my.nickname}님</span>
        </div>
        <div>
          {my.verification_count}/{elapse_days}
        </div>
      </Div>
      {participations.map((participation) => (
        <Div key={participation.user_id}>
          <div>
            <span>{participation.rank} 위</span>
            <ProfileCircle image_url={participation.image_url} size="4rem" />
            <span>{participation.nickname}님</span>
          </div>
          <div>
            {participation.verification_count}/{elapse_days}
          </div>
        </Div>
      ))}
    </>
  );

Presenter.propTypes = {
  my: PropTypes.array,
  participations: PropTypes.array,
  elapse_days: PropTypes.number,
};

export default Presenter;
