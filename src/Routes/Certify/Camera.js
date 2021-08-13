import React, { useRef, useEffect } from "react";
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
	audio: true,
	video: {
		width: { ideal: 1280 },
		height: { ideal: 720 },
		facingMode: "environment"
	}
};
const handleSuccess = (stream, refCamera) => {
	console.log('getUserMedia() got stream:', stream);
	window.stream = stream;
	refCamera.current.srcObject = stream;
};

const init = async (refCamera) => {
	let stream;
	try {
		stream = await window.navigator.mediaDevices.getUserMedia(constraints);
		handleSuccess(stream, refCamera);
	} catch (e) {
		console.error('navigator.getUserMedia error:', e);
	}
	return stream;
};

const capture = (refCanvas,refCamera,mediaStream, id)=>{
	const canvas = refCanvas.current;
	canvas.width = "1280";
    canvas.height = "720";
	canvas.getContext('2d').drawImage(refCamera.current,0,0);
	let dataUri = canvas.toDataURL('image/png', 0.92);
    let d = dataUri.split(',')[1];
    let mimeType = dataUri.split(';')[0].slice(5);

    let bytes = window.atob(d);
    let buf = new ArrayBuffer(bytes.length);
    let arr = new Uint8Array(buf);

    for(let i =0; i <bytes.length; i++) {
        arr[i] = bytes.charCodeAt(i);
    }
    let capBlob = new Blob([arr], {type:mimeType});
	console.log(capBlob);
	const formData = new FormData();
	formData.append('article', "hihi");
	formData.append('image_url', capBlob);
	postApi.postSubmitPost(id, formData).then(() => { alert("오늘의 인증샷 제출완료!"); window.history.back(); }).catch((error) => { alert(error); window.history.back(); });
}

// const capture = (mediaStream, id) => {
// 	const track = mediaStream.getVideoTracks()[0];
// 	let imageCapture = new ImageCapture(track);
// 	imageCapture.takePhoto().then((response) => {
// 		mediaStream.getTracks().forEach(function (t) {
// 			t.stop();
// 		});
// 		console.log(response)
// 		const formData = new FormData();
// 		// const data={
// 		// 	article:"dfdfdf",
// 		// 	image_url:response
// 		// }
// 		formData.append('article', "hihi");
// 		formData.append('image_url', response);
// 		postApi.postSubmitPost(id, formData).then(() => { alert("오늘의 인증샷 제출완료!"); window.history.back(); }).catch((error) => { alert(error); window.history.back(); });
// 	});
// }
/*메인 함수*/
const Camera = ({ id }) => {
	let refCamera = useRef();
	let refCanvas = useRef();
	let stream;
	useEffect(() => {
		init(refCamera).then(response => { stream = response })
		return (() => {
			stream.getTracks().forEach(function (track) {
				track.stop();
			});
		});
	}, []);

	return (<VideoContainer>
		<TopContainer>
			<Logo />
		</TopContainer>
		<Video ref={refCamera} playsInline={true} autoPlay={true} muted={true} />
		<BottomContainer><Button onClick={() => { capture(refCanvas,refCamera,stream, id) }} /></BottomContainer>
		<canvas ref={refCanvas} style={{display:"none"}}></canvas>
	</VideoContainer>
	);
}

export default Camera;