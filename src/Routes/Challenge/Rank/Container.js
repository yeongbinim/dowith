import React from "react";
import {useState, useEffect} from "react";
import { getApi } from "api";
import Presenter from "./Presenter";

const Container = ({user, id}) => {
  const [Rank, setRank] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const mount = async() => {
    try {
		const {data}= await getApi.getDetailRank(id);
		setRank(data);
    } catch {
    	seterror("Can't find this challenge.");
    } finally {
		  setloading(false);
    }
  };
  useEffect(() => mount(), [user]);
  return (
	error? `${error}`:
    <Presenter dataRank={Rank} loading={loading}/>
  );
}
export default Container;