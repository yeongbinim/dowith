import React from 'react';


// const CLIENT_ID = "794a04747a9ab3b3b2ca7a39c40c6c0f";
const CLIENT_ID = "2589e2db71042b3e03d86f96e07aec79";
const REDIRECT_URI =  "http://127.0.0.1:3000/account/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const login = async() => {
	window.location.replace(KAKAO_AUTH_URL);
	// const response = await signIn.onLogin();
	// console.log(response);
	// alert(response);
	// window.location.href = "/";
};
const KakaoLogin = () => (
	<>
	<br/><br/>
	<div onClick={()=>login()}>
		<span>카카오계정 로그인</span>
	</div></>
);


export default KakaoLogin;
