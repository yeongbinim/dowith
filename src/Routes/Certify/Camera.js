import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import { postApi } from "api";
import { ReactComponent as Camera1 } from "assets/icon-camera1.svg";
import { ReactComponent as Camera2 } from "assets/icon-camera2.svg";

const VideoContainer = styled.div`
	width:100%;
	height:100vh;
	position:absolute;
	display:flex;
	flex-direction:column;
	justify-content:stretch;
	top:0;
	left:0;
	z-index:1059;
	background-color: white;
`;


const Video = styled.video`
	position:relative;
	transform: translate(-50%,0) rotateY(180deg);
	top: 0;
	left: 50%;
	width: 100vw;
	max-width:450px;
`;

const Logo = styled(Camera1)`
	width:80px;
	height:80px;
	position:absolute;
	left:50%;
	top:50%;
	transform:translate(-50%,-50%);
`;
const Button = styled(Camera2)`
	width:80px;
	height:80px;
	position:fixed;
	left:50%;
	bottom:40px;
	transform:translate(-50%,0);
	cursor:pointer;
`;

const TopContainer = styled.div`
	height:30vw;
	position:relative;
`;

const BottomContainer = styled.div`
	height:40vw;
	position:relative;
`;

/*초기 카메라 설정*/
const constraints = {
	audio: {
		echoCancellation: {
			exact: false
		}
	},
	video: {
		width: 500,
		height: 500
	},
	facingMode: { exact: "environment" }
};
const handleSuccess = (stream, refCamera) => {
	console.log('getUserMedia() got stream:', stream);
	window.stream = stream;
	refCamera.current.srcObject = stream;
};

const init = async (refCamera) =>{
	let stream;
	try {
	  stream = await window.navigator.mediaDevices.getUserMedia(constraints);
	  handleSuccess(stream, refCamera);
	} catch (e) {
	  console.error('navigator.getUserMedia error:', e);
	}
	return stream;
};



const capture = (mediaStream, id) => {
	const track = mediaStream.getVideoTracks()[0];
	let imageCapture = new ImageCapture(track);
	imageCapture.takePhoto().then((response)=>{
		console.log(response)
		// const objectURL = URL.createObjectURL(response);
		const formData = new FormData();
		formData.append('article', "hihi");
		formData.append('image_url', response);
		postApi.postSubmitPost(id,formData).then(()=>{alert("오늘의 인증샷 제출완료!"); window.history.back();}).catch((error)=>{alert(error);window.history.back();});
	})
}
/*메인 함수*/
const Camera = ({id}) =>{
	let refCamera = useRef();
	let stream;
	useEffect(()=>{
		init(refCamera).then(response => {stream=response})
		return(()=>{
				stream.getTracks().forEach(function(track) {
				track.stop();
		  		});
	  		});
		},[]);

	return (<VideoContainer>
			<TopContainer>
				<Logo/>
			</TopContainer>
			<Video ref={refCamera} playsInline={true} autoPlay={true} muted={true}/>
			<BottomContainer><Button onClick={()=>{capture(stream,id)}}/></BottomContainer>
		</VideoContainer>
	);
}

export default Camera;