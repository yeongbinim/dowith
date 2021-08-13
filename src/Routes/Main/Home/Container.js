import React from "react";
import {useState, useEffect} from "react";
import { getApi,signIn } from "api";
import Presenter from "./Presenter";
import Header from "Components/Navigation/Header";

let temp = 0;
const Container = ({user}) => {
  const [Challenge, setChallenge] = useState(null);
  const [ChallengeToday, setChallengeToday] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const mount2 = async() =>{
	try{
		const {data} = await getApi.getChallengeToday();
		setChallengeToday(data);
	}catch {
		console.log("가입한 챌린지가 없다.");
	}finally {
		setloading(false);
	};
	}
  const mount = async() => {
    try {
		const {data}= await getApi.getChallenge();
		setChallenge(data);
    } catch {
    	seterror("Can't find all challenge.");
    } finally {
		user ? mount2() : setloading(false);
    }
  };
  useEffect(()=>mount(), [user]);
  let code = new URL(window.location.href).searchParams.get("code");
  if(code && temp == 0){temp=1; signIn.onLogin();}
  return (
	error? `${error}`:
    <><Header user={user}/><Presenter data_todaychallenge={ChallengeToday} data_allchallenge={Challenge} loading={loading} user={user}/></>
  );
}
export default Container;