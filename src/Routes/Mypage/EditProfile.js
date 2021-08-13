import React,{useState} from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Textarea from "Components/Textarea";
import ImageSelect from "Components/ImageSelect";
import {postApi} from "api";
import ChallengeButton from "Components/ChallengeButton";

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


const Background = styled.div`
  background-color: white;
  width: 100%;
  position: absolute;
  height: 20rem;
  left: 0;
  top: 0;
  z-index: -1;
`;

const Container = styled.form`
  padding: 3rem;
`;

const ImageSection = styled.section`
  width: 100%;
  position: relative;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const InputContainer = styled.div`
  height: 26rem;
  display:flex;
  flex-direction:column;
  align-items:center;
`;


const TextContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 5rem;
`;

// const Presenter = ({ data_challenge, data_my, loading, tabs }) =>
const Presenter = ({ loading }) =>{
  const [img, SetImg] = useState(undefined);
  const [nickname, SetNickname] = useState("");
  const imgHandler = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    SetImg(e.target.files[0]);
  };
  const nicknameHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    SetNickname(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('image_url', img);
    postApi.putEditProfile(formData).then((response)=>{alert("프로필이 변경되었습니다."); window.history.go(-1);}).catch(()=>{alert("오류")});
  };

  return (loading ? (
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
      <Container onSubmit={submitHandler}>
        <ImageSection>
          <ImageSelect onChange={imgHandler}/>
        </ImageSection>
        <InputContainer>
          <TextContainer>
            <Textarea placeholder="닉네임을 입력해주세요" value={nickname} onChange={nicknameHandler} required={true}/>
          </TextContainer>
        </InputContainer>
      </Container>
      <ChallengeButton status={true} content="완료" url={null} clickEvent={submitHandler}/>
    </>
  ));
}
// Presenter.propTypes = {
// };

export default Presenter;