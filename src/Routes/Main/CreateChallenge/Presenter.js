import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ChallengeButton from "Components/ChallengeButton";
import IllustSection from "Components/Main/IllustSection";
import Textarea from "Components/Textarea";
import ImageSelect from "ImageSelect";
import { ReactComponent as Image } from "assets/icon-example.svg";

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

const Ul = styled.ul`
  position: relative;
  display: flex;
  margin-right: 3rem;
  justify-content: space-around;
`;

const Li = styled.li`
  margin-bottom: 1rem;
  background-color: pink;
  list-style: circle;
`;

const DateSection = styled.div`
  width: 100%;
  height: 16rem;
`;

const InputNum = styled.input`
  border: none;
  border-bottom: 0.3rem solid #3c68fa;
  outline: none;
`;

const DateInput = styled.input`
  padding: 3rem;
  border: none;
`;

const Presenter = () => (
  <>
    <Helmet>
      <title>Create | Dowith</title>
    </Helmet>
    <IllustSection
      reverse={false}
      create={true}
      contents={[
        null,
        "챌린지 트랙 만들기",
        "두윗러들과 함께 하고 싶은 챌린지 트랙을 직접 만들어보세요!",
      ]}
    />
    <Container>
      <Section>
        <H2>챌린지 대표 이미지 설정하기</H2>
        <ImageSelect />
        <br />
        <br />
        <H2>챌린지의 이름은 무엇인가요?</H2>
        <Textarea placeholder="하루에 운동 20분 하기 등 챌린지를 잘 나타내는 이름을 지어주세요!" />
        <br />
        <br />
        <H2>챌린지를 한 줄로 소개해주세요!</H2>
        <Textarea placeholder="건강한 하루를 위해 매일 매일 운동 20분 하기!" />
        <br />
        <br />
        <H2>챌린지의 기간을 설정해주세요</H2>
        <DateSection>
          <Ul>
            <Li>
              챌린지 시작 날짜
              <br />
              <DateInput type="date" />
            </Li>
            <Li>
              챌린지 끝 날짜
              <br />
              <DateInput type="date" />
            </Li>
          </Ul>
        </DateSection>
        <br />
        <br />
        <H2>챌린지를 참여하기 위한 포인트를 설정해주세요</H2>
        <Textarea placeholder="포인트를 적당하게 설정하면 더 많은 두윗러들과 함께 달릴 수 있어요!" />
        <br />
        <br />
        <H2>두윗이 제안하는 챌린지의 벌금이에요!</H2>
        <br />
        <InputNum />
        <br />
        <br />
        <H4>- 왜 챌린지 벌금이 정해져있나요?</H4>
        <span>
          챌린지 기간과 참여 포인트를 설정하면 그에 맞는 적절한 벌금 설정을
          도와드려요. <br />
          과도한 벌금은 사기를 떨어뜨리고, 너무 적은 벌금은 동기 부여를 약하게
          만들 수 있어요!
        </span>
        <br />
        <br />
        <br />
        <H2>챌린지 장은 어떤 일을 하나요?</H2>
        <span>ex) 플라스틱 컵 대신 텀블러 사용하기 챌린지</span>
        <Image width="44rem" height="20rem" z-index="-1" />
        <H4>- 챌린지에 올라오는 인증사진 살펴보기</H4>
        <span>
          해당 챌린지에 적합하지 않는 사진이 올라오면 인증을 무효처리할 수
          있어요!
        </span>
        <br />
        <br />
        <ChallengeButton
          content="챌린지 개설하기"
          status={true}
          clickEvent={() => {
            alert();
          }}
        />{" "}
      </Section>
    </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;
