import React, {useRef, useEffect} from "react";
import styled from "styled-components";

const Video = styled.video`
	position: absolute;
	transform: translate(-50%,0) rotateY(180deg);
	top: 0;
	left: 50%;
	width: 100vw;
	max-height: 100vh;
	z-index:-1;
`;

/*초기 카메라 설정*/
const constraints = {
	audio: {
		echoCancellation: {
			exact: false
		}
	},
	video: {
		width: 420,
		height: 720
	},
	facingMode: { exact: "environment" }
};
const handleSuccess = (stream, refCamera) => {
	console.log('getUserMedia() got stream:', stream);
	window.stream = stream;
	refCamera.current.srcObject = stream;
};

const init = async (refCamera,) =>{
	let stream;
	try {
	  stream = await window.navigator.mediaDevices.getUserMedia(constraints);
	  handleSuccess(stream, refCamera);
	} catch (e) {
	  console.error('navigator.getUserMedia error:', e);
	}
	return stream;
};

const capture = (mediaStream) => {
	const track = mediaStream.getVideoTracks()[0];
	let imageCapture = new ImageCapture(track);
	imageCapture.takePhoto().then((response)=>{
		console.log(response)
		const objectURL = URL.createObjectURL(response);
		alert(objectURL);
	})
}
const insertImage= (imageData)=> {
	const images = document.querySelector('#images');
	const imgS = document.createElement('img');
	imgS.src = imageData;
	console.log(imgS);
	images.insertBefore(imgS, images.childNodes[0]);
  }

/*메인 함수*/
const Camera = () =>{
	let refCamera = useRef();
	let refCanvas = useRef();
	let stream;
	useEffect(()=>{
		init(refCamera).then(response => {stream=response})
		return(()=>{
				stream.getTracks().forEach(function(track) {
				track.stop();
		  		});
	  		});
		},[]);

	return (<>
		<Video ref={refCamera} playsInline={true} autoPlay={true} muted={true}></Video>
		<canvas ref={refCanvas}></canvas>
		<button onClick={()=>{capture(stream)}}>캡처하기</button>
		<div id="images"></div>
		</>
	);
}

export default Camera;