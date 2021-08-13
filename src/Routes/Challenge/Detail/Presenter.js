import React,{useState} from "react";
import Helmet from "react-helmet";
import {ChallengeContainer, MyverifyContainer, AllverifyContainer} from "./Components";
import ChallengeButton from "Components/ChallengeButton";
import Loader from "Components/Loader";
import { postApi } from "api";
import BodyBlackout from './Modal/BodyBlackout';
import Modal from './Modal/Modal';

// temp 값
// 0 : 내 챌린지o [시작전]
// 1 : 내 챌린지o [진행중]
// 2 : 내 챌린지o [완료]
// 3 : 내 챌린지x [시작전]
// 4 : 내 챌린지x [진행중, 완료]
// 5 : 로그인 안됨
const setTemp = (status, isLogin, isMy) =>{
  let temp;
  if(isLogin){
    if(isMy){
      if(status === "시작 전"){
        temp = 0;
      }else if(status === "진행 중"){
        temp = 1;
      }else{
        temp = 2;
      }
    }else{
      status === "시작 전" ? temp = 3 : temp = 4;
    }
  }
  else{
    temp = 5;
  }
  return temp;
}

const postSubmit = async(id) =>{
  try{
    const {data} = await postApi.postJoinChallenge(id);
    console.log(data);
  }catch{
    alert("에러");
  }
  finally{
    window.location.reload();
  }
}

const Presenter = ({data_challenge, data_myverify, data_allverify, loading, user, id}) =>{
  const [ isVisible , setIsVisible ] = useState(false);
  const [ imageId , setId ] = useState(null);
  const onSetIsVisible = (active) => { 
    setIsVisible(active);
  }
  if (loading){
    return(<><Helmet><title>Loading | Dowith</title></Helmet><Loader /></>);
  }else{
    let temp = setTemp(data_challenge.challenge_status, user!==null, data_allverify!==null);
  const buttonCondition = [{
      status:false,
      content:`챌린지 시작까지 D-${data_challenge.days_left}`,
      url:null,
      clickEvent:null,
    },{
      status:true,
      content:`챌린지 ${data_challenge.elapsed_days}일차 인증하기`,
      url:`/certify/${id}`,
      clickEvent:null,
    },{
      status:false,
      content:`이미 완료된 챌린지에요`,
      url:null,
      clickEvent:null,
    },{
      status:true,
      content:`챌린지 시작하기`,
      url:null,
      clickEvent:()=>{postSubmit(id);},
    },{
      status:false,
      content:`참여하지 않은 챌린지입니다`,
      url:null,
      clickEvent:null,
    },{
      status:false,
      content:`로그인 후에 이용해 주세요`,
      url:null,
      clickEvent:null,
    }
  ]
  return (
    <>
      <Helmet><title>Challenge | Dowith</title></Helmet>
      <BodyBlackout isVisible={isVisible} onSetIsVisible={onSetIsVisible} />
      <ChallengeContainer data_challenge={data_challenge} temp={temp}/>
      {temp===1 || temp === 2? (<>
        <Modal isMaster={user.id === data_challenge.captain} isVisible={isVisible} onSetIsVisible={onSetIsVisible} id={imageId} list={data_allverify} />
        <MyverifyContainer onSetIsVisible={onSetIsVisible} setId={setId} data_myverify={data_myverify} image_url={user.image_url}/><AllverifyContainer onSetIsVisible={onSetIsVisible} setId={setId} data_allverify={data_allverify}/>
      </>):(<></>)}
      <ChallengeButton {...buttonCondition[temp]}/>
      <div style={{height:'10rem'}}></div>
    </>
  );
  }
};

export default Presenter;



