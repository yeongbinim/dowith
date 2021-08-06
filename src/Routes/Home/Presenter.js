import React from "react";
import styled from "styled-components";
import Image from "Components/Image";
import Banner from "Components/Banner";
import ProgressBar from 'Components/ProgressBar';

const H2 = styled.h2`
  font-size: ${({theme:{fontSizes}})=>fontSizes.h2};
  line-height:1.3em;
  font-weight:400;
  color : ${props=>(props.isColor? props.theme.colors.main : 'black')};
`;

const H3 = styled.h3`
  font-size: ${({theme:{fontSizes}})=>fontSizes.h3};
  font-weight:700;
  color : ${props=>(props.isColor? props.theme.colors.main : 'black')};
`;

const H5 = styled.h5`
  font-size: ${({theme:{fontSizes}})=>fontSizes.h5};
  font-weight:500;
  color : ${props=>(props.isColor? props.theme.colors.main : 'black')};
  margin-left: 1em;
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
  padding: 2rem;
`;
const Section = styled.section`
  border-radius: 8px;
  border:1px solid #eeeeee;
  background-color: white;
  box-shadow: 0 5px 10px #cccccc;
  margin: 1rem 0;
`;
const SectionDiv = styled.div`
  padding:2em;
  display:flex;
  flex-direction:column;
  font-size:1.2rem;
  & > p:last-child{
    align-self: flex-end;
    margin-right: 1em;
    font-size:${({theme:{fontSizes}})=>fontSizes.normal};
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
        <H3>민지님은 오늘도 달리는 중</H3>
        <span><br/><br/>플라스틱 컵 대신 텀블러 사용하기</span>
        <span><br/><br/>스터디 카페 출석하기</span>
      </SectionDiv>
      <SectionDiv>
        <H5 isColor={true}>오늘의 챌린지 완료율 (%)</H5>
        <ProgressBar width={ 70 } animationSpeed={10}/>
        <p>목표달성까지 얼마 남지 않았어요!</p>
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
