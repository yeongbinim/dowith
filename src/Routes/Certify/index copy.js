
import React, {useRef, useEffect} from "react";
import styled from "styled-components";

const Video = styled.video`
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	width: vmax;
	max-height: 100vh;
	z-index:-1;
`;


/*초기 카메라 설정*/
const constraints = {
	audio: {
		echoCancellation: {
			exact: true
		}
	},
	video: {
		width: 1280,
		height: 720
	},
	facingMode: { exact: "environment" }
};
const handleSuccess = (stream, myRef) => {
	console.log('getUserMedia() got stream:', stream);
	window.stream = stream;

	myRef.current.srcObject = stream;
};
const init = async (myRef) =>{
	let stream;
	try {
	  stream = await window.navigator.mediaDevices.getUserMedia(constraints);
	  handleSuccess(stream, myRef);
	  console.log(stream);
	} catch (e) {
	  console.error('navigator.getUserMedia error:', e);
	}
	return stream;
};


/*메인 함수*/
const Camera = () =>{
	let myRef = useRef();
	
	useEffect(()=>{
		let stream;
		init(myRef).then(response=>{stream=response})
		return(()=>{
				stream.getTracks().forEach(function(track) {
				track.stop();
		  		});
	  		});
		},[]);

	return (
		<Video ref={myRef} playsInline={true} autoPlay={true} muted={true}></Video>
	);
}

export default Camera;