import styled from "styled-components";
import { postApi } from "api";

const ModalStyle = styled.div`
  height: 80vh;
  font-size: ${props=>props.theme.fontSizes.normal};
  width: 50rem;
  max-width:90%;
  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 45px;
  display:block;
  z-index: 1011;
  display: ${props => props.isVisible ? "block" : "none" };
  pointer-events: ${props => props.isVisible ? "auto" : "none" };

  .popup-modal__close {
    position: absolute;
    font-size: 2rem;
    right: 0rem;
    top: -3rem;
    cursor: pointer;
    color:white;
  }
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
      <span>nickname: {list[temp].nickname}</span>
      <span>article: {list[temp].article}</span>
      <span>created_at: {list[temp].created_at}</span>
      <span>image_url: {list[temp].image_url ? list[temp].image_url:"null"}</span>
      <span>is_verificated: {list[temp].is_verificated? "true": "false"}</span>
      {isMaster&&!list[temp].is_verificated? <button onClick={()=>postVerification(list[temp].id)}>마스터만 보이는 버튼이다!</button> :<></>}
    </div> 
    : <></>}
  </ModalStyle>
}