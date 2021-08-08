import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  background-color: ${({ theme: { colors } }) => colors.black};
  position: sticky;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  top: 0;
`;

const UL = styled.ul`
  display: flex;
  list-style: none;
`;

const List = styled.li`
  border-bottom: 5px solid
    ${(props) => (props.current ? props.theme.colors.main : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.base};
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 1em 0;
  width: 7em;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
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
      <List current={pathname === "/signin"}>
        <SLink to="/signin">로그인</SLink>
      </List>
      <List current={pathname === "/signup"}>
        <SLink to="/signup">회원가입</SLink>
      </List>
    </UL>
  </Header>
));
