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
	font-size:${props=>props.theme.fontSizes.h4};
	text-decoration: none;
	display:block;
	padding: 1em 1em;
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
		</UL>
	</Container>
));