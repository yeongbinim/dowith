import React from 'react';
import {signIn} from "api";


const CLIENT_ID = "794a04747a9ab3b3b2ca7a39c40c6c0f";
const REDIRECT_URI =  "http://127.0.0.1:3000/account/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const login = async() => {
	window.location.href = KAKAO_AUTH_URL;
	await signIn.onLogin();
	// window.location.href = "/";
};
const KakaoLogin = () => (
	<div onClick={login}>
		<span>카카오계정 로그인</span>
	</div>
);


export default KakaoLogin;
