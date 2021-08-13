import React from "react";
import styled from "styled-components";
import ProfileCircle from "Components/ProfileCircle";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

import Textarea from "Components/Textarea";
import Button from "Components/SignButton";
import ImageSelect from "Components/ImageSelect";

const H3 = styled.h2`
  width: 90%;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 auto;
  margin-bottom: 3rem;
  border-bottom: 0.1rem solid #c2c2c2;
  text-align: center;
  padding: 2rem 0 1.5rem;
`;

const H2 = styled.h2`
  font-size: 1.7rem;
  line-height: 1.3em;
  font-weight: 600;
  line-height: 2.8rem;
`;

const Strong = styled.span`
  font-weight: 700;
`;

const H4 = styled.h4`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h4};
  line-height: 1.3em;
  font-weight: 400;
  line-height: 2.8rem;
  margin-top: 4rem;
  text-align: center;
  color: #3c68fa;
`;

const Background = styled.div`
  background-color: white;
  width: 100%;
  position: absolute;
  height: 20rem;
  left: 0;
  top: 0;
  z-index: -1;
`;

const Container = styled.div`
  padding: 3rem;
`;

const ImageSection = styled.section`
  width: 100%;
  position: relative;
`;

const InputContainer = styled.div`
  height: 26rem;
  text-align: center;
`;

const ProfileImage = styled.div`
  position: relative;
  top: 2rem;
  width: 15rem;
  height: 15rem;
  border-radius: 15rem;
  background-color: black;
  margin: auto;
`;

const TextContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 5rem;
`;

// const Presenter = ({ data_challenge, data_my, loading, tabs }) =>
const Presenter = ({ loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Dowith</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>Edit | Dowith</title>
      </Helmet>

      <Background />
      <H3>프로필 편집</H3>
      <Container>
        <ImageSection>
          <ProfileImage />
          <H4>프로필 사진 바꾸기</H4>
        </ImageSection>
        <InputContainer>
          <TextContainer>
            닉네임
            <Textarea placeholder="닉네임을 입력해주세요" />
          </TextContainer>
        </InputContainer>
      </Container>
    </>
  );

// Presenter.propTypes = {
// };

export default Presenter;
