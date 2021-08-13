import axios from "axios";

// const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

axios.defaults.baseURL = "https://dowith-api.likelion.app";
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46ZG93aXRoIiwic3ViIjoiNyIsImlhdCI6MTYyODg2MjU1MywiZXhwIjoxNjI4ODY2MTUzLCJhdWQiOlsidXJuOmRvd2l0aDp1c2VyIl0sInR5cGUiOiJhY2Nlc3MiLCJwcm92aWRlciI6Imtha2FvIiwibmlja25hbWUiOiJcdWM3ODRcdWM2MDFcdWJlNDgifQ.CAy-Qdx53LZ8Z1oFx09Y4U98E_3nSjBLjKyA3_go-kI'
const token = localStorage.getItem('access');
token ? axios.defaults.headers.common['Authorization'] = `Bearer ${token}` : axios.defaults.headers.common['Authorization'] = `Bearer`;

// const onLoginSuccess = response => {
// 	const { access, refresh } = response.data;
// 	localStorage.setItem("access", access);
// 	localStorage.setItem("refresh", refresh);
// 	axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
// 	console.log(response);
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
// 	// accessToken 만료하기 1분 전에 로그인 연장
// 	setTimeout(()=>{signIn.onSilentRefresh(response)}, JWT_EXPIRY_TIME - 60000);
// }
export const signIn = {
	// onSilentRefresh : (response) => {
	// 	axios.post('/account/refresh', response.data)
	// 		.then(onLoginSuccess)
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// },

	onLogin : () => {
		let code = new URL(window.location.href).searchParams.get("code");
		const data = {
			provider:"kakao",
			code:code
		};
		localStorage.removeItem('refresh');
		axios.post('/account/login', data).then(response => {
			const { access, refresh } = response.data;
			axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
			localStorage.setItem("access", access);
			localStorage.setItem("refresh", refresh);
			alert("로그인 되었습니다!");
			window.location.href="/";
		}).catch(error => {
			console.log(error);
		});
	},
	logout : async () => {
		const refresh = localStorage.getItem('refresh');
		try {
			try{
				await axios.post("account/logout",{refreshToken:refresh});
			}
			catch(e){
				console.log(e);
			}
			try{
				localStorage.removeItem('refresh');
			}catch(e){
				console.log(e);
			}
			try{
				localStorage.removeItem('refresh');
			}catch(e){
				console.log(e);
				localStorage.removeItem('access');
			}
		}catch(e){
			console.log(e);
			localStorage.removeItem('refresh');
			localStorage.removeItem('access');
		}
	},
}


export const getApi ={
	// 현재 로그인된 유저 조회(페이지마다 요청)
	getUser : () => axios.get("account/user").catch((error)=>{console.log(error.response.status); return null}),
	// 메인페이지에서의 인기 챌린지 및 완료된 챌린지 조회
	getChallenge : () => axios.get("challenge"),
	// 오늘 이미 완료(finished)한 챌린지와 아직 수행하지 않은(ongoing) 챌린지 로드
	getChallengeToday : () => axios.get("challenge/today"),
	// 마이페이지에서의 챌린지
	getMyChallenge : () => axios.get("challenge/my"),
	// 챌린지 디테일 1
	getDetail : (challenge_id) => axios.get(`challenge/${challenge_id}`),
	// 챌린지 인증 내거만
	getDetailMy : (challenge_id) => axios.get(`verification/my/${challenge_id}`),
	// 챌린지 인증 전부다
	getDetailAll : (challenge_id) => axios.get(`verification/list/${challenge_id}`),
	// 챌린지 랭크
	getDetailRank : (challenge_id) => axios.get(`challenge/rank/${challenge_id}`),
	
}


export const postApi ={
	// 방장이 인증해주기
	postVerification : (post_id) => axios.post(`/verification/${post_id}`),
	// 챌린지 만들기
	postCreateChallenge : (data) => axios.post(`/challenge`,data, {
		headers: { "Content-Type": `application/json`}
	}),
	// 챌린지 함께하기
	postJoinChallenge : (challenge_id) => axios.post(`/challenge/${challenge_id}`),
	// 챌린지 인증샷 보내기
	postSubmitPost : (challenge_id,data) => axios.post(`/verification/create/${challenge_id}`,data),

	putEditProfile : (data) => axios.put("/account/user",data),
}