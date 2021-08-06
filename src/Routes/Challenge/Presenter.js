import React from "react";
import styled from "styled-components";
import Image from "Components/Image";
import Banner from "Components/Banner";

const H3 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const H4 = styled.h4`
  font-size: 1.3rem;
  line-height: 1.3em;
  font-weight: 400;
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
  padding: 1rem;
`;

const IllustSection = styled.div`
  width: 100%;
  height: 18rem;
  margin-bottom: 1rem;
  background-color: grey;
`;

const Ul = styled.ul`
  margin: 1rem 0;
  display: flex;
  overflow-x: scroll;
  & > li:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Presenter = () => (
  <>
    <Background />
    <IllustSection />

    <Container>
      <H3>인기있는 챌린지</H3>
      <H4>많은 분들이 참여하고 있는 챌린지에요! 우리 함께 달려볼까요?</H4>
      <Ul>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
      </Ul>

      <Banner reverse />

      <H3>두윗두윗 츄.. 완료된 챌린지</H3>
      <H4>함께여서 더욱 즐거웠던 두윗 챌린지들을 추억해보세요!</H4>

      <Ul>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
        <li>
          <Image />
        </li>
      </Ul>
    </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;
