import React,{useRef} from "react";
import styled from "styled-components";
import Camera from "./Camera";


const Button = styled.div`
	cursor:pointer;
	position:fixed;
	width:max-content;
	background-color: white;
	padding:1rem;
`;
const Container = () =>{
	let mediaRecorder;
	let recordedBlobs;
	let myRef = useRef();
	const handleDataAvailable = (event) => {
		console.log('handleDataAvailable', event);
		if (event.data && event.data.size > 0) {
		  recordedBlobs.push(event.data);
		}
	}
	const startRecording = () =>{
		recordedBlobs = [];
		let options = {
			mimeType: 'video/webm;codecs=vp9,opus'
		};
		if (!MediaRecorder.isTypeSupported(options.mimeType)) {
			console.error(`${options.mimeType} is not supported`);
			options = {
				mimeType: 'video/webm;codecs=vp8,opus'
			};
			if (!MediaRecorder.isTypeSupported(options.mimeType)) {
				console.error(`${options.mimeType} is not supported`);
				options = {
					mimeType: 'video/webm'
				};
				if (!MediaRecorder.isTypeSupported(options.mimeType)) {
					console.error(`${options.mimeType} is not supported`);
					options = {
						mimeType: ''
					};
				}
			}
		}
		try {
			mediaRecorder = new MediaRecorder(window.stream, options);
		} catch (e) {
			console.error('Exception while creating MediaRecorder:', e);
			return;
		}
		console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
		mediaRecorder.ondataavailable = handleDataAvailable;
		mediaRecorder.start();
		console.log('MediaRecorder started', mediaRecorder);
	}
	const stopRecording = async (mediaRecorder,myRef) =>{
		await mediaRecorder.stop();
		const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
		// const url = window.URL.createObjectURL(superBuffer);
		const url = window.URL.createObjectURL("assets/default-human.png");
		alert(url);
		// myRef.current.src = url;
		// myRef.current.controls = true;
		setTimeout(()=>myRef.current.play(),1000);
	}
	const downloadRecord = (id) => {
		const blob = new Blob(recordedBlobs, {type: 'video/webm'});
		const url = window.URL.createObjectURL(blob);
		// uploadToServer(blob,id,url);
		setTimeout(() => {
			window.URL.revokeObjectURL(url);
		}, 100);
	}

	return (<>
		<Button style={{right:"1rem",bottom:"1rem"}} onClick={()=>{startRecording();}}>이것을 누르면 녹화시작</Button>
		<Button style={{left:"1rem",bottom:"1rem"}} onClick={()=>{stopRecording(mediaRecorder, myRef);}}>이것을 누르면 녹화종료</Button>
		<Camera/>
		<video ref={myRef}></video>
		</>
	);
}



export default Container;









// function uploadToServer(blob,id,url) {
//     let fd = new FormData(window.document.getElementById("form"));
//     fd.append('file', blob);
//     console.log(blob);
//     $.ajax({
//         url: "/next_question/"+id,
//         type: "POST",
//         data: fd,
//         processData: false,
//         contentType: false,
//         success : function (response) {
//             console.log(response);
//         },
//         error: function (jqXHR, textStaut, errorMesssage) {
//             alert('Error' + JSON.stringify(errorMesssage));
//         }
//     });
// }