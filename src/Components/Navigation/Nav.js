import { signIn } from "api";
import { Link ,withRouter } from "react-router-dom";
import styled from "styled-components";

const Container= styled.nav`
	max-width:600px;
	width:70vw;
	/* width:100%; */
`;

const UL = styled.ul`
	display : flex;
	flex-direction:column;
	list-style: none;
	&>li:last-child{
		position:absolute;
		width:100%;
		bottom:1rem;
	}
`;

const List = styled.li`
	background-color: ${props=> props.current? props.theme.colors.main : "transparent"};
	color:${props=> props.current? "white": "black"};
	transition : background-color .5s ease-in-out;
`;

const SLink = styled(Link)`
	font-size:${({theme:{fontSizes}})=>fontSizes.h3};
	text-decoration: none;
	display:block;
	padding: 2rem 2rem;
`;

const CLink = styled.span`
	font-size:${({theme:{fontSizes}})=>fontSizes.h3};
	text-decoration: none;
	display:block;
	padding: 2rem 2rem;
	cursor:pointer;
`;

const clickLogout = async() =>{
	try{
		await signIn.logout();
	  }catch{
		console.log("error");
	  }
	  finally{
		window.location.reload();
	}
}

export default withRouter(({location:{pathname}, onClick, user}) => (
	<Container onClick={onClick}>
		<UL>
			<List current={pathname === "/challenge"}>
				<SLink to="/challenge">챌린지 전체보기</SLink>
			</List>
			<List current={pathname === "/introduce"}>
				<SLink to="/introduce">두윗 소개 페이지</SLink>
			</List>
			{user === undefined || user === null? <>
				<List current={pathname === "/signin"}>
					<SLink to="/signin">로그인</SLink>
				</List>
				{/* <List current={pathname === "/kakao"}>
					<SLink to="/kakao">카카오</SLink>
				</List> */}
			</>:
				<>
				<List current={pathname === "/createchallenge"}>
					<SLink to="/createchallenge">챌린지 개설하기</SLink>
				</List>
				<List current={pathname === "/mypage"}>
					<SLink to="/mypage">마이페이지</SLink>
				</List>
				<List>
					<CLink onClick={clickLogout}>로그아웃</CLink>
				</List>
			</>
			}
		</UL>
	</Container>
));