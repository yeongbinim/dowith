import axios from "axios";

const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

const access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46ZG93aXRoIiwic3ViIjoiMSIsImlhdCI6MTYyODYyNzYxNiwiZXhwIjoxNjI4NjMxMjE2LCJhdWQiOlsidXJuOmRvd2l0aDp1c2VyIl0sInR5cGUiOiJhY2Nlc3MiLCJwcm92aWRlciI6ImFkbWluIiwibmlja25hbWUiOiIzIn0.HKkqOovlIP3wWqSqwKnJ1hUPQ8gZtbmMWxd2LCbn6ak";
axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';


const onLoginSuccess = response => {
	const { access } = response.data;
	alert(access);
	axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
	// accessToken 만료하기 1분 전에 로그인 연장
	setTimeout(()=>{signIn.onSilentRefresh(response)}, JWT_EXPIRY_TIME - 60000);
}
export const signIn = {
	onSilentRefresh : (response) => {
		axios.post('/account/refresh', response.data)
			.then(onLoginSuccess)
			.catch(error => {
				alert(error);
			});
	},
	onLogin : () => {
		let code = new URL(window.location.href).searchParams.get("code");
		console.log(code);
		const data = {
			provider:"kakao",
			code:code
		};
		return (axios.post('/account/login', data).then(response => {
			onLoginSuccess(response);
		}).catch(error => {
			console.log(error);
			alert(error);
		}));
	}	
}


export const getApi ={
	// 현재 로그인된 유저 조회(페이지마다 요청)
	getUser : () => axios.get("account/user"),
	// 메인페이지에서의 인기 챌린지 및 완료된 챌린지 조회
	getChallenge : () => axios.get("challenge/"),
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
	postVerification : (post_id) => axios.post(`/verification/${post_id}`),
	postCreateChallenge : (data) => axios.post(`/challenge`,data),
	postJoinChallenge : (challenge_id) => axios.post(`/verification/create/${challenge_id}`),
	postSubmitPost : (challenge_id,data) => axios.post(`/challenge/${challenge_id}`,data),
}

