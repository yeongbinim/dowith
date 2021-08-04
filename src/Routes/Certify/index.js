import React, {useRef, useEffect} from "react";
import styled from "styled-components";

const Video = styled.video`
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	width: vmax;
	max-height: 100vh;
`;

const Camera = () =>{
	let myRef = useRef();

	const constraints = {
		audio: {
			echoCancellation: {
				exact: true
			}
		},
		video: {
			width: 1280,
			height: 720
		}
	};
	const handleSuccess = (stream) => {
		console.log('getUserMedia() got stream:', stream);
		window.stream = stream;
		// stream.getTracks().forEach(function(track) {
		// 	track.stop();
		//   });
		myRef.current.srcObject = stream;
	};
	
	const init = async (constraints) =>{
		try {
		  const stream = await window.navigator.mediaDevices.getUserMedia(constraints);
		  handleSuccess(stream);
		} catch (e) {
		  console.error('navigator.getUserMedia error:', e);
		}
	};
	useEffect(() => init(constraints), []);

	return (
		<Video ref={myRef} playsInline={true} autoPlay={true} muted={true}></Video>
	);
}

export default Camera;