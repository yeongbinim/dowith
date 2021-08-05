import React from "react";
import styled from "styled-components";
import Image from "Components/Image";
import Banner from "Components/Banner";
const H2 = styled.h2`
  font-size:1.8rem;
  line-height:1.3em;
  font-weight:400;
`;
const H3 = styled.h2`
  font-size:1.5rem;
  font-weight:700;
`;
const Strong = styled.span`
  font-weight:700;
`;
const Background = styled.div`
  background-color:white;
  width:100%;
  position:absolute;
  height:20rem;
  left:0;
  top:0;
  z-index:-1;
`;
const Container = styled.div`
  padding: 1rem;
`;
const Section = styled.section`
  border-radius: 8px;
  border:1px solid #eeeeee;
  background-color: white;
  box-shadow: 0 5px 10px #cccccc;
  margin: 1rem 0;
`;
const SectionDiv = styled.div`
  padding:1rem;
  display:flex;
  flex-direction:column;
  font-size:1.2rem;
  & > span:not(:last-child) {
    margin-bottom:1rem;
  }
`;

const Ul = styled.ul`
  margin: 1rem 0;
  display:flex;
  overflow-x:scroll;
  & > li:not(:last-child) {
    margin-right:1rem;
  }
`;

const Presenter = () => (
  <>
  <Background/>
  <Container>
    <H2>
      안녕하세요, <Strong>민지님</Strong><br/>오늘도 힘차게 달려볼까요?
    </H2>
    <Section>
      <SectionDiv style={{borderBottom:"1px solid #eeeeee"}}>
        <span>민지님은 오늘도 달리는 중</span>
        <span>플라스틱 컵 대신 텀블러 사용하기</span>
        <span>스터디 카페 출석하기</span>
      </SectionDiv>
      <SectionDiv>
        <div>progressbar</div>
      </SectionDiv>
    </Section>
    <Banner />
    <H3>인기있는 챌린지</H3>
    <Ul>
      <li><Image/></li>
      <li><Image/></li>
      <li><Image/></li>
      <li><Image/></li>
      <li><Image/></li>
      <li><Image/></li>
    </Ul>
    <H3>완료된 챌린지</H3>
    <Ul>
      <li><Image/></li>
      <li><Image/></li>
      <li><Image/></li>
      <li><Image/></li>
      <li><Image/></li>
      <li><Image/></li>
    </Ul>
  </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;
