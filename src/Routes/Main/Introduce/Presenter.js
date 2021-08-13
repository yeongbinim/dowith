import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ButtonLink from "Components/LinkButton";
import Banner2 from "Components/Main/Banner2";

import Image0 from "assets/icon-introduce0.png";

import { ReactComponent as Intro } from "assets/icon-intro0.svg";
import { ReactComponent as Image1 } from "assets/icon-introduce1.svg";
import { ReactComponent as ImagePoint } from "assets/icon-introducePoint.svg";

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
  margin-bottom: 2rem;
`;

const Container = styled.div`
  position: relative;
  padding: 2rem;
`;

const Section = styled.section`
  position: relative;
  z-index: 1;
  & > ul {
    margin-bottom: 5rem;
  }
`;

const SectionBox = styled.section`
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 3rem;
`;

const Centerspan = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.normal};
  line-height: 2rem;
  text-align: center;
`;

const ImageSection = styled.div`
  position: relative;
  margin: auto;
  text-align: center;
`;

const Button = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  width:80%;
  position: relative;
`;

const Presenter = () => (
  <>
    <Helmet>
      <title>Introduce | Dowith</title>
    </Helmet>
    {/* <IllustSection reverse={false} create={true} contents={[]} /> */}

    <Intro width="100%" height="28rem" />
    <Container>
      <Section>
        <SectionBox>
          <H2>
            <span style={{ color: "#3c68fa", fontSize: "2rem" }}>
              두윗(Do With)
            </span>
            은 어떤 서비스인가요?
          </H2>

          <Centerspan>
            우리 삶 속에 일어나는 크고 작은 챌린지들을 응원하는 서비스에요.
            <br />
            두윗과 함께라면 목표를 향해 힘껏 달리며 목표를 성취하는 기쁨을 누릴
            수 있어요!
            <br />
            두윗에서는 목표를 향한 레이스를 혼자가 아니라 함께한다는 점이 매우
            중요한데요.
            <br />
            두윗에서는 크고 작은 챌린지들을 함께 할 수 있는 많은 두윗러들을 만날
            수 있답니다!
            <br />
          </Centerspan>
          <br />
          <ImageSection>
            <Image1 width="50rem" height="16rem" z-index="-1" />
          </ImageSection>
          <br />
          <br />
          <Centerspan>
            나를 위한 변화뿐만 아니라, 지구와 더 나은 미래를 생각하는
            챌린지까지! <br />
            다양한 챌린지들을 두윗러들과 함께 달려보세요!
          </Centerspan>

          <br />
          <br />
        </SectionBox>
        <SectionBox>
          <H2>챌린지는 어떻게 이루어지나요?</H2>
          <ImageSection>
            <img
              src={Image0}
              width="100%"
              height="30%"
              max-height="200%"
              alt="Image0"
            />
          </ImageSection>

          <br />
          <br />
          {/* <Image2 width="100%" height="16rem" z-index="-1" /> */}
          {/* <Image3 width="100%" height="100%" display="inline" z-index="-1" /> */}

          <Centerspan>
            챌린지는 두윗에서 준비한 챌린지 이외에도 원하는 챌린지를 직접 만들
            수 있어요! <br />
            두윗러들과 함께 목표 달성을 위해 달려보세요!
          </Centerspan>
          <br />
          <br />
        </SectionBox>
        <SectionBox>
          <H2>두윗의 챌린지 상금과 벌금제도가 궁금해요!</H2>
          <Centerspan>
            두윗의 챌린지에는 두윗러들을 응원하기 위한 상금과 벌금제도가 있어요!
          </Centerspan>
          <ImageSection>
            <ImagePoint width="40rem" height="30rem" z-index="-1" />
          </ImageSection>
        </SectionBox>

        <Banner2
          reverse={true}
          contents={[
            "챌린지 100% 완주시",
            "100% 페이백 + 완주 축하 상금을 받게 됩니다.",
            "챌린지 100% 완주 실패시",
            "인증 실패 벌금을 뺀 나머지 포인트만 페이백을 받게 됩니다.",
          ]}
        />
        <br />
        <br />
        <br />
        <br />
        <SectionBox>
          <Centerspan style={{ fontWeight: "500", color: "#3c68fa" }}>
            두윗과 함께 목표를 향해 달릴 준비 되셨나요?
            <br />
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              <strong>두윗을 시작해보세요!</strong>
            </span>
          </Centerspan>

          <Button>
            <ButtonLink
              url="/"
              contents={["메인 화면으로 돌아가기"]}
            />
            <ButtonLink
              url="/challenge"
              contents={["전체 챌린지 둘러보기"]}
            />
            <ButtonLink
              url="/createchallenge"
              contents={["챌린지 만들러가기"]}
            />
          </Button>
        </SectionBox>
      </Section>
    </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;
