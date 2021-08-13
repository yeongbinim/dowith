import React from "react";
import styled from "styled-components";
import Logo from "assets/icon-logo.png";
import Kakao from "assets/kakao_login_medium_narrow.png";

// const CLIENT_ID = "794a04747a9ab3b3b2ca7a39c40c6c0f";
const CLIENT_ID = "2589e2db71042b3e03d86f96e07aec79";
const REDIRECT_URI = "http://127.0.0.1:3000/account/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const login = async () => {
  window.location.replace(KAKAO_AUTH_URL);
  // const response = await signIn.onLogin();
  // console.log(response);
  // alert(response);
  // window.location.href = "/";
};

const Container = styled.div`
  padding-top: 40px;
  top: 0;
  height: 100%;
  position: relative;
  margin: auto;
  max-width:600px;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #4966ff;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Section = styled.section`
  position: relative;
  margin: auto;
  text-align: center;
  z-index: 1;
  & > ul {
    margin-bottom: 5rem;
  }
`;

const LogoSection = styled.div`
  top: 3rem;
  position: relative;
  margin: auto;
`;

const KakaoSection = styled.div`
  width: 50rem;
  bottom:30px;
  transform:translate(-50%,0);
  left:50%;
  position: fixed;

  cursor: pointer;
`;

const KakaoLogin = () => (
  <>
  <Background>
    <Container>
      
        <Section>
          <LogoSection>
            <div>
              <img src={Logo} width="60%" height="60%" alt="Logo" />
            </div>
          </LogoSection>
          <KakaoSection>
            <div onClick={() => login()}>
              <img src={Kakao} width="45%" height="45%" alt="Kakao" />
            </div>
          </KakaoSection>
        </Section>
      </Container>
    </Background>
  </>
);

export default KakaoLogin;