import axios from "axios";

const api = axios.create({
	baseURL : "http://localhost:8000/",
	params: {
	}
})
api.defaults.withCredentials = true;

export const mainPage ={
	// 메인페이지에서의 인기 챌린지 및 완료된 챌린지 조회
	getChallenge : () => api.get("challenge/main"),
	// 오늘 이미 완료(finished)한 챌린지와 아직 수행하지 않은(ongoing) 챌린지 로드
	getTodayList : () => api.get("challenge/today")
}

