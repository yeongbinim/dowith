import React from "react";
import { Link, NavLink } from "react-router-dom";
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

const TextLink = styled(Link)`
  font-size: 1.2rem;
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

const Presenter = () => (
  <>
    <Background />
    <H3>로그인</H3>
    <Container>
      <H2>
        <Strong style={{ color: "#3c68fa" }}>두윗(Do With)</Strong>
        <Strong>과 </Strong>함께
        <br /> 목표를 향해 달려볼까요?
      </H2>
      <br />
      <br />
      <H4>
        먼저{" "}
        <TextLink to="/signin" style={{ color: "#3c68fa" }}>
          로그인
        </TextLink>
        이 필요해요!
      </H4>
      <br />
      <Textarea />
      <br />
      <Textarea />
      <br />
      <TextLink to="/signiup" style={{ color: "#3c68fa" }}>
        회원가입
      </TextLink>
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
