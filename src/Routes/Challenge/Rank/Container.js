import React ,{useState, useEffect}from "react";
import Presenter from "./Presenter";
import { getApi } from "api";
import {datailRankPage} from "testData";

const Container = () => {
  // const [Rank, setRank] = useState(null);
  // const [error, seterror] = useState(null);
  // const [loading, setloading] = useState(true);
  // const mount = async() => {
  //   try {
	// 	const {data}= await getApi.getDetailRank(4);
	// 	setRank(data);
  //   } catch {
  //   	seterror("Can't find this challenge.");
  //   } finally {
	// 	  setloading(false);
  //     setTimeout(()=>console.log(Rank),1000);
  //   }
  // };
  // useEffect(() => mount(), []);
  return (
	// error? `${error}`:
    // <Presenter dataRank={Rank} loading={loading}/>
    <Presenter dataRank={datailRankPage.detailRank} loading={datailRankPage.loading}/>
  );
}
export default Container;