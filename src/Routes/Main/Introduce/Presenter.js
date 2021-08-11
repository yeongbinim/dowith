import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import IllustSection from "Components/Main/IllustSection";
import ButtonLink from "Components/LinkButton";
import { ReactComponent as Image1 } from "assets/icon-introduce1.svg";
import { ReactComponent as Image2 } from "assets/icon-introduce2.svg";

const H2 = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h3};
  line-height: 1.3em;
  font-weight: 600;
  color: ${(props) => (props.isColor ? props.theme.colors.main : "black")};
  & > span {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.normal};
  }
  & > strong {
    font-weight: 700;
  }
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const H4 = styled.h4`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h4};
  line-height: 1.3em;
  font-weight: 700;
  line-height: 2.8rem;
  color: #3c68fa;
`;

const Container = styled.div`
  padding: 2rem;
`;

const Section = styled.section`
  position: relative;
  z-index: 1;
  & > ul {
    margin-bottom: 5rem;
  }
`;

const Centerspan = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h4};
  text-align: center;
`;

const Button = styled.div`
  margin: auto;
  margin-top: 7rem;
`;

const Presenter = () => (
  <>
    <Helmet>
      <title>Introduce | Dowith</title>
    </Helmet>
    <IllustSection reverse={false} create={true} contents={[]} />
    <Container>
      <Section>
        <H2>두윗(Do With)은 어떤 서비스인가요?</H2>

        <Centerspan>
          우리 삶 속에 일어나는 크고 작은 챌린지들을 응원하는 서비스에요.
          <br />
          두윗과 함께라면 목표를 향해 힘껏 달리며 목표를 성취하는 기쁨을 누릴 수
          있어요!
          <br />
          두윗에서는 목표를 향한 레이스를 혼자가 아니라 함께한다는 점이 매우
          중요한데요.
          <br />
          두윗에서는 크고 작은 챌린지들을 함께 할 수 있는 많은 두윗러들을 만날
          수 있답니다!
          <br />
        </Centerspan>

        <Centerspan>
          나를 위한 변화뿐만 아니라, 지구와 더 나은 미래를 생각하는 챌린지까지!{" "}
          <br />
          다양한 챌린지들을 두윗러들과 함께 달려보세요!
        </Centerspan>
        <br />
        <Image1 width="20rem" height="16rem" z-index="-1" />

        <H2>챌린지는 어떻게 이루어지나요?</H2>

        <Image2 width="50rem" height="16rem" z-index="-1" />

        <Centerspan>
          챌린지는 두윗에서 준비한 챌린지 이외에도 원하는 챌린지를 직접 만들 수
          있어요! <br />
          두윗러들과 함께 목표 달성을 위해 달려보세요!
        </Centerspan>
        <br />
        <br />

        <H2>두윗의 챌린지 상금과 벌금제도가 궁금해요!</H2>
        <Centerspan>
          우리 삶 속에 일어나는 크고 작은 챌린지들을 응원하는 서비스에요.
          <br />
          두윗과 함께라면 목표를 향해 힘껏 달리며 목표를 성취하는 기쁨을 누릴 수
          있어요!
          <br />
          두윗에서는 목표를 향한 레이스를 혼자가 아니라 함께한다는 점이 매우
          중요한데요.
          <br />
          두윗에서는 크고 작은 챌린지들을 함께 할 수 있는 많은 두윗러들을 만날
          수 있답니다!
          <br />
        </Centerspan>

        <Button>
          <ButtonLink to="/" contents={["메인 화면으로 돌아가기"]} />
          <ButtonLink to="/challenge" contents={["전체 챌린지 둘러보기"]} />
          <ButtonLink to="/createchallenge" contents={["챌린지 만들러가기"]} />
        </Button>
      </Section>
    </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;
