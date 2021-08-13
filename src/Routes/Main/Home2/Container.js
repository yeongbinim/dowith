import React from "react";
import {useState, useEffect} from "react";
import { getApi } from "api";
import Presenter from "./Presenter";

const Container = ({isLogin}) => {
  const [Challenge, setChallenge] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const mount = async() => {
    try {
		const {data}= await getApi.getChallenge();
		setChallenge(data);
    } catch {
    	seterror("Can't find all challenge.");
    } finally {
		setloading(false);
    }
  };
  useEffect(() => mount(), []);
  return (
	error? `${error}`:
  <Presenter isLogin= {isLogin} data_allchallenge={Challenge} loading={loading}/>
  );
}
export default Container;