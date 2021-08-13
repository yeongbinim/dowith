import styled from "styled-components";
import { postApi } from "api";
import { ReactComponent as CheckSvg } from 'assets/icon-check.svg';

const ModalStyle = styled.div`
  height: 90vh;
  font-size: ${props=>props.theme.fontSizes.normal};
  width: 50rem;
  max-width:90%;
  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 45px;
  z-index: 1011;
  display: ${props => props.isVisible ? "flex" : "none" };
  pointer-events: ${props => props.isVisible ? "auto" : "none" };
  flex-direction:column;
  align-items:center;
  .popup-modal__close {
    position: absolute;
    font-size: 2rem;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    color:${props=>props.theme.colors.main};
  }
  .nickname{
    margin-bottom: 1rem;
  }
  .created_at{
    text-align: right;
    margin-top: 2rem;
    color:${props=>props.theme.colors.main};
  }
  strong{
    font-weight:600;
  }
`;


const Img = styled.div`
	background-image: url(${props => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width:95vw;
  max-width: 320px;
  height: 320px;
`;

const Button = styled.div`
  position:absolute;
  cursor: ${props=>props.disabled? "default" : "pointer"};
  box-shadow: 0 5px 10px #cccccc;
  padding: 20px 90px;
  bottom:2rem;
  width:max-content;
  left:50%;
  transform: translate(-50%,0);
  border-radius: 20px;
  opacity:${props=>props.disabled? "0.4" : "1"};
  
  &:hover{
    opacity:${props=>props.disabled? "0.4" : "0.6"}
  }
  display:flex;
  align-items: center;
`;

const Check = styled(CheckSvg)`
  width:25px;
  height:25px;
  margin-right: 10px;
`;

const postVerification = (id) =>{
  postApi.postVerification(id).then(()=>{alert("인증완료!");window.location.reload();}).catch(()=>{alert("error")});
}

export default function Modal({ isVisible, onSetIsVisible, id, list, isMaster=false}){
  let temp = -1;
  if(list&&id){
    list.forEach((image,idx)=>{
      if(image.id === id){
        temp = idx;
      }
    });
  }
  return <ModalStyle isVisible={isVisible}>
    <i 
      className="popup-modal__close"
      onClick={() => onSetIsVisible(false) }
    >
		X
    </i>
		{temp>=0 ? 
    <div style={{display:"flex",flexDirection:"column"}}>
      <span className="nickname">닉네임: <strong>{list[temp].nickname}</strong></span>
      <Img bgUrl={ list[temp].image_url!=="" && list[temp].image_url!==null && list[temp].image_url!== undefined? `${list[temp].image_url}`: require("assets/default-challenge.jpg").default}/>
      <span className="created_at">{list[temp].created_at}</span>
      {isMaster&&!list[temp].is_verificated? <Button onClick={()=>postVerification(list[temp].id)}><Check/>인증 완료하기</Button> :<></>}
      {isMaster&&list[temp].is_verificated? <Button disabled={true}><Check/>인증 완료됨</Button> :<></>}
    </div> 
    : <></>}
  </ModalStyle>
}