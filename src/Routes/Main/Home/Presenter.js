import React from "react";
import styled from "styled-components";
import Image from "Components/Main/ImgBox";
import Banner from "Components/Main/Banner";
import ProgressBar from 'Components/Main/ProgressBar';
import { Link } from "react-router-dom";
import ProfileCircle from "Components/ProfileCircle";
import Helmet from "react-helmet";
import { fadeIn } from "onLoad";

const H2 = styled.h2`
  position:relative;
  font-size: ${({theme:{fontSizes}})=>fontSizes.h2};
  line-height:1.3em;
  font-weight:400;
  color : ${props=>(props.isColor? props.theme.colors.main : 'black')};
  & > span{
    font-size: ${({theme:{fontSizes}})=>fontSizes.normal};
  }
  & > strong{
    font-weight:700;
  }
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


const Background = styled.div`
  background-color: ${({theme:{colors}})=> colors.background};
  width:100%;
  position:absolute;
  height:calc(100% - 20rem);
  left:0;
  bottom:0;
  z-index:-1;
`;

const Container = styled.div`
  padding: 2rem;
`;

const Section1 = styled.section`
  animation: ${fadeIn} 0.8s linear alternate both;
  margin: 3rem 0;
  display:flex;
  flex-direction: column;
  & > div:first-child{
      margin: 0 0 3rem;
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    align-items:stretch;
    align-content:stretch;
    & > div:first-child{
      margin: 0 2rem 0 0;
    }
  }
`;
const ArticleBox = styled.div`
  width:100%;
  border-radius: 15px;
  border:1px solid #eeeeee;
  background-color: white;
  box-shadow: 0 5px 10px #cccccc;
`;
const Article1 = styled.article`
  padding:2em;
  display:flex;
  flex-direction:column;
  font-size:1.2rem;
  & > span{
    display:flex;
    justify-content:space-between;
    margin-top: 2rem;
    font-size: ${props=>props.theme.fontSizes.normal};
    u{
      text-decoration: none;
      color:gray;
    }
    a{
      color:${props=>props.theme.colors.main};
    }
  }
`;
const Article2 = styled.article`
  padding:1.5em;
  display:flex;
  flex-direction:column;
  font-size:1.2rem;
  & > p:last-child{
    align-self: flex-end;
    margin-right: 1em;
    font-size:${({theme:{fontSizes}})=>fontSizes.normal};
  }
`;

const ALink = styled(Link)`
  font-size: ${({theme:{fontSizes}}) => fontSizes.normal};
  color: ${({theme:{colors}}) => colors.main};
  position: absolute;
  right: 1em;
  top:0.5em;
`;

const Section2 = styled.section`
  position:relative;
  z-index:1;
  & > ul{
    margin-bottom:5rem;
  }
`;
const Ul = styled.ul`
  margin: 1rem 0;
  display:flex;
  overflow-x:scroll;
  overflow-y:hidden;
  width:105%;
  & > li:not(:last-child) {
    margin-right:1rem;
  }
`;
const Dummy = styled.div`
  width:25vw;
  height:1rem;
  background:none;
  @media only screen and (min-width: 1000px) {
    width:60vw;
  }
`;

const Profile = styled(Link)`
  position:absolute;
  right:1rem;
  bottom:0.5rem;
`;


const Presenter = ({
  data_my = {
    nickname:"홍여진",
    image_url:"",
  },
  data_todaychallenge = {
    ongoing:[
      {id : 7, title : "챌린챌린지"},
      {id : 5, title : "식사하기"},
    ],
    finished:[
      {id : 1, title : "누워서 티비보기"},
      {id : 2, title : "밥먹기"},
      {id : 3, title : "게임하기"},
    ],
  },
  data_allchallenge = {
      gathering:[
        {id : 7, title : "챌린챌린지", thumbnail_url : "", participated_count : 4},
        {id : 2, title : "밥먹기" ,thumbnail_url : "", participated_count : 23},
        {id : 3, title : "게임하기" ,thumbnail_url : "", participated_count : 41},
        {id : 5, title : "식사하기" ,thumbnail_url : "", participated_count : 55},
      ],
      ongoing:[
        {id : 7, title : "챌린챌린지" ,thumbnail_url : "", participated_count : 1},
        {id : 2, title : "밥먹기" ,thumbnail_url : "", participated_count : 9},
        {id : 3, title : "게임하기" ,thumbnail_url : "", participated_count : 14},
        {id : 5, title : "식사하기" ,thumbnail_url : "", participated_count : 44},
      ],
      compelete:[
        {id : 7, title : "챌린챌린지" ,thumbnail_url : "", participated_count : 6444},
        {id : 2, title : "밥먹기" ,thumbnail_url : "", participated_count : 455},
        {id : 3, title : "게임하기" ,thumbnail_url : "", participated_count : 1433},
        {id : 5, title : "식사하기" ,thumbnail_url : "", participated_count : 341},
      ]
    },loading = false
}) => 
  loading ? (<><Helmet><title>Loading | Dowith</title></Helmet>{/* <Loader /> */}</>) : ( 
  <>
  <Helmet><title>Home | Dowith</title></Helmet>
  <Background/>
  <Container>
    <H2>
      <Profile to="/mypage"><ProfileCircle/></Profile>
      안녕하세요, <strong>{data_my.nickname}님</strong><br/>오늘도 힘차게 달려볼까요?
    </H2>
    <Section1>
      <ArticleBox>
        <Article1 style={{borderBottom:"1px solid #eeeeee"}}>
          <H3>{data_my.nickname}님은 오늘도 달리는 중</H3><br/>
          {data_todaychallenge.ongoing.map(challenge => (<span key={challenge.id}><p>{challenge.title}</p><Link to={`/challenge/${challenge.id}`}>인증하러가기</Link></span>))}
          {data_todaychallenge.finished.map(challenge => (<span key={challenge.id}><p>{challenge.title}</p><u>오늘의 인증 완료</u></span>))}
        </Article1>
        <Article2>
          <H5 isColor={true}>오늘의 챌린지 완료율 (%)</H5>
          <ProgressBar width={ parseInt((data_todaychallenge.finished.length/(data_todaychallenge.finished.length + data_todaychallenge.ongoing.length))*100)} animationSpeed={10}/>
          <p>목표달성까지 얼마 남지 않았어요!</p>
        </Article2>
      </ArticleBox>
      <Banner contents={["함께 달릴 준비 되셨나요?","두윗과 함께 달려봐요!","달리기 전, 준비 운동 하러가기",">> 클릭시 두위 소개 페이지로 이동합니다."]}/>
    </Section1>
    <Section2>
      <ALink to="/challenge">전체보기</ALink>
      <H2>인기있는 챌린지</H2>
      <Ul>
        {data_allchallenge.gathering.map(challenge => <li key={challenge.id}><Image title={challenge.title} thumbnail_url={challenge.thumbnail_url} participated_count={challenge.participated_count} id={challenge.id}/></li>)}
        <li><Dummy/></li>
      </Ul>
      <H2>두윗두윗 츄 ..완료된 챌린지<br/><span>함께여서 더욱 즐거웠던 두윗 챌린지들을 추억해보세요!</span></H2>
      <Ul>
        {data_allchallenge.compelete.map(challenge => <li key={challenge.id}><Image title={challenge.title} thumbnail_url={challenge.thumbnail_url} participated_count={challenge.participated_count} id={challenge.id}/></li>)}
        <li><Dummy/></li>
      </Ul>
    </Section2>
  </Container>
  </>
);

// Presenter.propTypes = {
// };

export default Presenter;
