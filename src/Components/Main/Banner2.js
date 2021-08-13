import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Money } from "assets/icon-money.svg";
import Money2 from "assets/icon-money2.png";
import { fadeIn } from "onLoad";

const BannerContainer = styled(Link)`
  animation: ${fadeIn} 1s linear alternate both;
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const TextContainer = styled.div`
  background-color: none;
  padding: 2rem 3rem;
  min-height: 10rem;
  font-size: 1.4rem;
  font-weight: 400;
  height: 100%;
  border: 1px solid #e4e9fb;
  box-shadow: 0 5px 10px #cccccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Textbox = styled.div`
  z-index: 1;
  position: relative;
  color: #000000;
  display: flex;
  flex-direction: column;
  & > span:not(:last-child) {
    margin-bottom: 1.2em;
  }
`;

const SvgMoney = styled(Money)`
  position: absolute;
  z-index: 0;
  right: 5%;
  width: 10rem;
  height: 10rem;
  top: 50%;
  transform: translate(0, -50%);
`;
// const TextBold = styled.span`
//   font-weight: bold;
// `;

const Banner = ({ contents }) => {
  return (
    <BannerContainer>
      <TextContainer>
        <Textbox>
          <span
            style={{ fontSize: "1.6rem", fontWeight: "600", color: "#3c68fa" }}
          >
            {contents[0]}
          </span>
          <span style={{ fontSize: "1.4rem", fontWeight: "500" }}>
            {contents[1]}
          </span>
          <br />
          <span
            style={{ fontSize: "1.6rem", fontWeight: "600", color: "#979797" }}
          >
            {contents[2]}
          </span>
          <span style={{ fontSize: "1.4rem", fontWeight: "500" }}>
            {contents[3]}
          </span>
        </Textbox>
        <img
          src={Money2}
          width="120rem"
          height="120rem"
          max-height="500%"
          alt="Money2"
        />
      </TextContainer>
    </BannerContainer>
  );
};

// Presenter.propTypes = {
// };

export default Banner;
