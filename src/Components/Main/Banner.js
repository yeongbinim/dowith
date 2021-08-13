import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Block } from "assets/icon-block.svg";
import { ReactComponent as Fire } from "assets/icon-fire.svg";
import { fadeIn } from "onLoad";

const BannerContainer = styled(Link)`
  animation: ${fadeIn} 1s linear alternate both;
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const TextContainer = styled.div`
  background-color: ${(props) =>
    props.reverse ? "#E4E9FB" : props.theme.colors.main};
  padding: 2rem 3rem;
  min-height: 10rem;
  font-size: 1.4rem;
  font-weight: 400;
  height: 100%;
  border: 1px solid ${(props) => (props.reverse ? "#E4E9FB" : "none")};
  box-shadow: 0 5px 10px ${(props) => (props.reverse ? "#cccccc" : "none")};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Textbox = styled.div`
  z-index: 1;
  position: relative;
  color: ${(props) => (props.reverse ? "black" : "#E4E9FB")};
  display: flex;
  flex-direction: column;
  & > span:not(:last-child) {
    margin-bottom: 1.2em;
  }
`;

const SvgFire = styled(Fire)`
  position: absolute;
  z-index: 0;
  right: 5%;
  width: 10rem;
  height: 10rem;
  top: 50%;
  transform: translate(0, -50%);
`;

const SvgBlock = styled(Block)`
  position: absolute;
  z-index: 0;
  right: 5%;
  width: 10rem;
  height: 10rem;
  top: 53%;
  transform: translate(0, -50%);
`;

// const TextBold = styled.span`
//   font-weight: bold;
// `;

const Banner = ({ reverse, contents, isLogin=true }) => {
  
  return (
    <BannerContainer onClick={(e)=>{
      if(!isLogin){
        e.preventDefault();
        alert("로그인이 필요한 서비스입니다");
      }}} to={isLogin ? (reverse ? "/createchallenge" : "/introduce"):null}>
      <TextContainer reverse={reverse}>
        <Textbox reverse={reverse}>
          <span style={{ fontSize: "1.6rem", fontWeight: "400" }}>
            {contents[0]}
          </span>
          <span style={{ fontSize: "1.9rem", fontWeight: "600" }}>
            {contents[1]}
          </span>
          <br />
          <span style={{ fontSize: "1.4rem", fontWeight: "400" }}>
            {contents[2]}
          </span>
          <span style={{ fontSize: "1.4rem", fontWeight: "400" }}>
            {contents[3]}
          </span>
        </Textbox>
        {reverse ? <SvgBlock /> : <SvgFire />}
      </TextContainer>
    </BannerContainer>
  );
};

// Presenter.propTypes = {
// };

export default Banner;