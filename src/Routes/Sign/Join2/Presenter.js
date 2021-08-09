import React from "react";
import styled from "styled-components";

import Button from "Components/SignButton";

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
  font-size: 1.2rem;
  line-height: 1.3em;
  font-weight: 500;
  line-height: 2.8rem;
`;

const Link = styled.span`
  border-bottom: 0.1rem solid #3c68fa;
  color: "#3c68fa";
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
    <H3>회원가입</H3>
    <Container>
      <H2>
        <Strong>두윗 가입 완료!</Strong>
      </H2>
      <H4>두윗 가입이 완료되었습니다</H4>

      <br />
      <br />

      <InputContainer>
        <ProfileImage />
        <TextContainer>
          <H4>
            <Link style={{ borderBottom: "1px solid #000" }}>닉네임님!</Link>
            <br />
            두윗과 함께 챌린지에 도전해요!
          </H4>
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
