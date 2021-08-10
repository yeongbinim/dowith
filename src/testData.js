export const myData = {
	id: 2,
	last_login: "2021-08-07T02:20:25.716626+09:00",
	provider: "aa",
	uid: "aa",
	nickname: "aa",
	registered_on: "2021-08-07T02:20:18.928260+09:00",
	image_url: null,
	point: 5000,
	is_active: true,
	is_admin: true,
	is_superuser: true,
	is_staff: true,
	groups: [],
	user_permissions: []
}


export const detailPage = {
	detail : {
		thumbnail_url : "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE",
		id : 7,
		challenge_status : "진행 중",
		captain_name : "홍여진",
		participated_count : 100,
		total_challenge_period : 4,
		title : "매일 한 끼 샐러드 먹기",
		description : "하루에 한끼 샐러드 먹고 인증샷을 올리기 (영상/사진 가능)",
		fee : 300,
		create_date : "2021-08-01",
		start_date : "2021-08-03",
		end_date : "2021-08-06",
		life : 5,
		total_accumulated_fine : 0,
		elapsed_days : 2,
		days_left : 0,
	},
	detailMy :{
		verification_complete_count : 2,
		verification_failed_count : 0,
		total_challenge_ratio : 100,
		verifications : [
		  {
			file_url : "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE",
			article : "이것은 내가 인증한 것이다.",
			created_at : "2021-08-08T17:10:09.934102+09:00",
			is_verificated : false,
		  },
		  {
			file_url : "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE",
			article : "나는야 멋쟁이",
			created_at : "2021-08-07T12:54:47.660461+09:00",
			is_verificated : false,
		  }
		]
	},
	detailAll:[
		{
			id: 3,
			nickname: "admin",
			user_image_url: null,
			file_url: "http://kk.com",
			article: "alkdgjha;kldg",
			created_at: "2021-08-08T17:34:02.998174+09:00",
			is_verificated: false,
			participation_id: 4
		},
		{
			id: 2,
			nickname: "aa",
			user_image_url: null,
			file_url: "http://l.com",
			article: "adsf",
			created_at: "2021-08-08T17:10:09.934102+09:00",
			is_verificated: false,
			participation_id: 1
		},
		{
			id: 1,
			nickname: "aa",
			user_image_url: null,
			file_url: "http://naver.com",
			article: "test",
			created_at: "2021-08-07T12:54:47.660461+09:00",
			is_verificated: true,
			participation_id: 1
		}
	],
	loading:false
}

export const datailRankPage = {
	detailRank:{
		elapse_days : 5,
		my : {
			user_id: 5,
			verification_count: 3,
			nickname: "유저1",
			image_url: "",
			rank: 1
		},
		participations : [
		  {
			user_id: 3,
			verification_count: 3,
			nickname: "유저1",
			image_url: "",
			rank: 1
		  },
		  {
			user_id: 2,
			verification_count: 1,
			nickname: "유저2",
			image_url: "",
			rank: 2
		  }
		]
	},loading:false
}