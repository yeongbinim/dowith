import React from "react";
import styled from "styled-components";
import Textarea from "Components/Textarea";
import Button from "Components/SignButton";

const H3 = styled.h2`
  width: 90%;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 auto;
  margin-bottom: 3rem;
  border-bottom: 0.1rem solid #c2c2c2;
  text-align: center;
  padding: 4rem 0 1.5rem;
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
  font-size: 1.2rem;
  line-height: 1.3em;
  font-weight: 500;
  line-height: 2.8rem;
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

const InputContainer = styled.div`
  height: 26rem;
  background: #fafaff;
  text-align: center;
  margin-bottom: 3rem;
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

const Presenter = () => (
  <>
    <Background />
    <H3>프로필</H3>
    <Container>
      <H2>
        <Strong>프로필 설정</Strong>
      </H2>
      <H4>두윗에게 당신을 소개해주세요!</H4>

      <br />
      <br />

      <InputContainer>
        <ProfileImage />
        <TextContainer>
          <Textarea />
        </TextContainer>
      </InputContainer>

      <br />
      <br />
      <Button />
    </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;