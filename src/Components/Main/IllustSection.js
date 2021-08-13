import React from "react";
import styled,{keyframes} from "styled-components";
import { ReactComponent as Message } from "assets/icon-message.svg";
import { ReactComponent as Tro } from "assets/icon-tro.svg";
import { ReactComponent as Create } from "assets/icon-block.svg";
import { fadeIn } from "onLoad";


export const moveRoad = keyframes`
  0% {right:-100%}
  100% {right:0}
`;

const Road = styled.div`
	position:absolute;
	width:100%;
	bottom:0;
	right:0;
	z-index:-2;
	height:7rem;
  background: linear-gradient(to right, rgba(60, 104, 250, 0), rgba(60, 104, 250,1));
	animation: ${moveRoad} 1s linear alternate both;
	overflow:visible;
	&>div{
		position:absolute;
		bottom:50%;
		width:300vw;
		left:-100%;
		height:0.5rem;
		background-color: white;
	}
`;

const IllustSection = styled.div`
  padding: 5rem;
  width: 100%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eeeeee;
  position: relative;
  overflow-x: hidden;
  animation: ${fadeIn} 1s linear alternate both;
`;

const Msg = styled(Message)`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 21rem;
  height: 20rem;
  z-index: -1;
`;
const Trop = styled(Tro)`
  position: absolute;
  right: 1rem;
  bottom: 3rem;
  width: 21rem;
  height: 20rem;
  z-index: -1;
`;

const CreateBlock = styled(Create)`
  position: absolute;
  right: 0rem;
  bottom: 0rem;
  width: 21rem;
  height: 21rem;
  z-index: -1;
`;

const ImgBox = ({
  reverse = false,
  create = false,
  contents = [
    "두윗은 여러분과 함께 달리는 중!",
    "인기 챌린지와 역대 챌린지를",
    "확인해보세요",
  ],
}) => {
  return (
    <IllustSection>
      {reverse ? <Trop /> : (create ? <CreateBlock /> : <Msg />)}
      <span style={{ fontSize: "1.6rem", fontWeight: "400" }}>
        {contents[0]}
      </span>
      <br />
      <span style={{ fontSize: "2.2rem", fontWeight: "600" }}>
        {contents[1]}
      </span>
      <br />
      <span style={{ fontSize: "2rem", fontWeight: "400" }}>{contents[2]}</span>
      {create ? <Road><div></div></Road> : <></>}
    </IllustSection>
  );
};

export default ImgBox;
