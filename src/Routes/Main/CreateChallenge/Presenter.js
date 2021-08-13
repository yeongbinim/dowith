import React, { useState } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ChallengeButton from "Components/ChallengeButton";
import IllustSection from "Components/Main/IllustSection";
import Textarea from "Components/Textarea";
import ImageSelect from "Components/ImageSelect";
import Image from "assets/icon-example.png";
import { postApi } from "api";

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
  width: 100%;
  overflow-x: hidden;
`;

const FormSection = styled.form`
  position: relative;
  margin-top: 2rem;
  z-index: 1;
  & > ul {
    margin-bottom: 2rem;
  }
`;

const Ul = styled.ul`
  position: relative;
  display: flex;
  margin-bottom: 2rem;
  margin-right: 1rem;
  justify-content: space-around;
`;

const Li = styled.li`
  margin-bottom: 1rem;
  width: 100%;
  &:first-child {
    margin-right: 4rem;
  }
  & > span {
    padding: 1rem;
  }
`;

const DateSection = styled.div`
  width: 100%;
  height: 16rem;
`;

const InputNum = styled.input`
  border: none;
  border-bottom: 0.3rem solid #3c68fa;
  outline: none;
  &:disabled {
    background: none;
  }
`;

const DateInput = styled.input`
  margin-top: 1rem;
  position: relative;
  width: 100%;
  padding: 2rem;
  border: 1px solid #c1c1cc;
  border-radius: 1rem;
  font-size: ${(props) => props.theme.fontSizes.normal};
  &::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`;

const Numberarea = styled.input`
  border: 1px solid #cfcfcf;
  outline-style: none;
  border-radius: 1rem;
  opacity: 1;
  width: 100%;
  max-width: 50rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.fontSizes.normal};
  ::placeholder {
    color: #c1c1c1;
  }
`;

const Presenter = () => {
  const [img, SetImg] = useState(undefined);
  const [title, SetTitle] = useState("");
  const [body, SetBody] = useState("");
  const [date1, SetDate1] = useState(undefined);
  const [date2, SetDate2] = useState(undefined);
  const [num, SetNum] = useState(0);

  const imgHandler = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    SetImg(e.target.files[0]);
  };
  const titleHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    SetTitle(e.target.value);
  };
  const bodyHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    SetBody(e.target.value);
  };
  const date1Handler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    SetDate1(e.target.value);
  };
  const date2Handler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    SetDate2(e.target.value);
  };
  const numHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    SetNum(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", body);
    formData.append("fee", num);
    formData.append("start_date", date1);
    formData.append("end_date", date2);
    formData.append("thumbnail_url", img);
    postApi
      .postCreateChallenge(formData)
      .then((response) => {
        alert("챌린지가 개설되었습니다!");
        window.history.back();
      })
      .catch(() => {
        alert("오류");
      });
  };

  return (
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
          "함께 하고 싶은 챌린지 트랙을 직접 만들어보세요!",
        ]}
      />
      <Container>
        <FormSection onSubmit={submitHandler}>
          <H2>챌린지 대표 이미지 설정하기</H2>
          <ImageSelect onChange={imgHandler} />
          <br />
          <br />
          <br />
          <H2>챌린지의 이름은 무엇인가요?</H2>
          <Textarea
            placeholder="챌린지를 잘 나타내는 이름을 지어주세요!"
            value={title}
            onChange={titleHandler}
            required={true}
          />
          <br />
          <br />
          <br />
          <H2>챌린지를 한 줄로 소개해주세요!</H2>
          <Textarea
            placeholder="건강한 하루를 위해 매일 매일 운동 20분 하기!"
            value={body}
            onChange={bodyHandler}
            required={false}
          />
          <br />
          <br />
          <br />
          <H2>챌린지의 기간을 설정해주세요</H2>
          <DateSection>
            <Ul>
              <Li>
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "1.4rem",
                  }}
                >
                  챌린지 시작 날짜
                </span>
                <br />
                <DateInput
                  type="date"
                  value={date1}
                  onChange={date1Handler}
                  required
                />
              </Li>
              <Li>
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "1.4rem",
                  }}
                >
                  챌린지 끝 날짜
                </span>
                <br />
                <DateInput
                  type="date"
                  value={date2}
                  onChange={date2Handler}
                  required
                />
              </Li>
            </Ul>
          </DateSection>
          <H2>챌린지를 참여하기 위한 포인트를 설정해주세요</H2>
          <Numberarea
            type="number"
            min={100}
            max={5000}
            placeholder="포인트를 적당하게 설정하면 더 많은 두윗러들과 함께 달릴 수 있어요!"
            value={num}
            onChange={numHandler}
            required
          />
          <br />
          <br />
          <br />
          <H2>두윗이 제안하는 챌린지의 벌금이에요!</H2>
          <span
            style={{
              fontWeight: "400",
              fontSize: "1.4rem",
            }}
          >
            인증 실패마다 산정되는 벌금은 <br />
            <span
              style={{
                color: "#3c68fa",
                fontWeight: 600,
                lineHeight: 2,
              }}
            >
              (챌린지 참여 포인트) / (챌린지 기간)
            </span>
            입니다!
          </span>
          <br />
          <br />
          <br />
          <br />
          <H4>- 왜 챌린지 벌금이 정해져있나요?</H4>
          <span
            style={{
              fontWeight: "400",
              fontSize: "1.4rem",
            }}
          >
            챌린지 기간과 참여 포인트를 설정하면 그에 맞는 적절한 벌금 설정을
            도와드려요. <br />
            과도한 벌금은 사기를 떨어뜨리고, 너무 적은 벌금은 동기 부여를 약하게
            만들 수 있어요!
          </span>
          <br />
          <br />
          <br />
          <H2>챌린지 장은 어떤 일을 하나요?</H2>
          <span
            style={{
              fontWeight: "400",
              fontSize: "1.4rem",
            }}
          >
            ex) 플라스틱 컵 대신 텀블러 사용하기 챌린지
          </span>
          <br />
          <img src={Image} width="100%" height="30%" z-index="-1" />
          <H4>- 챌린지에 올라오는 인증사진 살펴보기</H4>
          <span
            style={{
              fontWeight: "400",
              fontSize: "1.4rem",
            }}
          >
            해당 챌린지에 적합하지 않는 사진이 올라오면 인증을 무효처리할 수
            있어요!
          </span>
          <div style={{ height: "10rem" }}></div>
          <ChallengeButton
            content="챌린지 개설하기"
            status={true}
            type="submit"
            clickEvent={() => {}}
          />{" "}
        </FormSection>
      </Container>
    </>
  );
};

// Presenter.propTypes = {
// };

export default Presenter;