import styled, {keyframes} from "styled-components";

const ProgressBarStyle = styled.div`
  height: 2rem;  
  position: relative;
  background: #eeeeee;
  overflow: hidden;
  margin:1rem 0;
  border-radius: 2.5rem;
  &::after{
    content:"${props => props.width}% 완료";
    font-size:${({theme:{fontSizes}}) => fontSizes.small};
    position:absolute;
    right:2em;
    top:50%;
    transform:translate(0,-50%);
  }
  & > div {
    position: relative;
    width: ${props => `${props.width}%` };
    height: 100%;
    overflow: hidden;
  }
`;

const Load = keyframes`
  0% {
    width : 0;
  }
  100% {
    width: 100%;
  }
`;

const Fillbar = styled.div`
  background-color: #3d69fa;
  height: 100%;
  z-index:1;
  width: 0;
  border-radius: 2.5rem;
  animation: ${Load} 1000ms 1 linear alternate both;
`;

export default function ProgressBar({ width , animationSpeed }){
  return (
    <ProgressBarStyle width={width} animationSpeed={animationSpeed} >
      <div>
        <Fillbar/>
      </div>
    </ProgressBarStyle>
  )
}