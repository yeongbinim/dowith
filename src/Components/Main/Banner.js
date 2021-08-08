import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const BannerContainer = styled(Link)`
  display:block;
  width:100%;
  position:relative;
  z-index:1;
`;

const TextContainer = styled.div`
  background-color: ${(props) => (props.reverse ? "#E4E9FB" : props.theme.colors.main)};
  padding: 2rem 3rem;
  min-height: 10rem;
  font-size: 1.4rem;
  font-weight: 400;
  height:100%;
  border: 1px solid ${(props) => (props.reverse ? "#E4E9FB" : "none")};
  box-shadow: 0 5px 10px ${(props) => (props.reverse ? "#cccccc" : "none")};
  border-radius: 8px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const Textbox = styled.div`
  color: ${(props) => (props.reverse ? "black" : "#E4E9FB")};
  display: flex;
  flex-direction: column;
  & > span:not(:last-child){
    margin-bottom:1.2em;
  }
`;

const SVG = styled.img`
  position:absolute;
  right: 5%;
  width:10rem;
  top:53%;
  transform:translate(0,-50%);
`;

// const TextBold = styled.span`
//   font-weight: bold;
// `;

const Banner = ({reverse, contents}) => {
  return (
    <BannerContainer to={reverse? "/createchallenge" : "/introduce"}>
      <TextContainer reverse={reverse}>
        <Textbox reverse={reverse}>
          <span style={{fontSize:"1.6rem",fontWeight:"400"}}>{contents[0]}</span>
          <span style={{fontSize:"1.9rem",fontWeight:"600"}}>{contents[1]}</span>
          <br/>
          <span style={{fontSize:"1.4rem",fontWeight:"400"}}>{contents[2]}</span>
          <span style={{fontSize:"1.4rem",fontWeight:"400"}}>{contents[3]}</span>
        </Textbox>
        <SVG src={reverse? require("assets/icon-block.svg").default : require("assets/icon-fire.svg").default } alt="img"/>
      </TextContainer>
    </BannerContainer>
  );
};

// Presenter.propTypes = {
// };

export default Banner;
