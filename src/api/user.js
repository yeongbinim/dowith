import axios from "axios";

const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

const api = axios.create({
	baseURL : "",
	params: {
	}
})
api.defaults.withCredentials = true;

const onLoginSuccess = response => {
	const { access } = response.data;
	api.defaults.headers.common['Authorization'] = `Bearer ${access}`;
	
	// accessToken 만료하기 1분 전에 로그인 연장
	setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
},

export const login ={
	onSilentRefresh : () => {
		api.post('/silent-refresh', data)
			.then(onLoginSuccess)
			.catch(error => {
				// ... 로그인 실패 처리
			});
	},
	onLogin : (username, password) => {
		const data = {
			username,
			password
		};
		api.post('/login', data).then(response => {
			onLoginSuccess(response);
		}).catch(error => {
	
		})
	}	
}

