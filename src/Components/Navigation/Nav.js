import { Link ,withRouter } from "react-router-dom";
import styled from "styled-components";

const Container= styled.nav`
	max-width:600px;
	width:70vw;
`;

const UL = styled.ul`
	display : flex;
	flex-direction:column;
	list-style: none;
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

export default withRouter(({location:{pathname}, onClick}) => (
	<Container onClick={onClick}>
		<UL>
			<List current={pathname === "/"}>
				<SLink to="/">Home</SLink>
			</List>
			<List current={pathname === "/certify"}>
				<SLink to="/certify">인증화면</SLink>
			</List>
			<List current={pathname === "/challenge"}>
				<SLink to="/challenge">챌린지전체보기</SLink>
			</List>
			<List current={pathname === "/mypage"}>
				<SLink to="/mypage">마이페이지</SLink>
			</List>
			<List current={pathname === "/signin"}>
				<SLink to="/signin">로그인</SLink>
			</List>
			<List current={pathname === "/kakao"}>
				<SLink to="/kakao">카카오</SLink>
			</List>
		</UL>
	</Container>
));