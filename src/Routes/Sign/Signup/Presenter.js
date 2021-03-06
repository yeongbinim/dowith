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

const Presenter = () => (
  <>
    <Background />
    <H3>회원가입</H3>
    <Container>
      <H2>
        <Strong>가입 정보 입력</Strong>{" "}
      </H2>
      <H4>두윗과 함께 달릴 준비되셨나요?</H4>

      <br />
      <br />

      <br />
      <Textarea placeholder="이메일을 입력해주세요" />
      <br />
      <Textarea placeholder="비밀번호를 입력해주세요" />
      <br />
      <Textarea placeholder="비밀번호 확인" />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button />
    </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;
