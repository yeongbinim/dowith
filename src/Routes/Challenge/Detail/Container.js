import React from "react";
import {useState, useEffect} from "react";
import { getApi } from "api";
import Presenter from "./Presenter";
// import {detailPage} from "testData";

const Container = ({id,user}) => {
  const [detail, setdetail] = useState(null);
  const [detailMy, setdetailMy] = useState(null);
  const [detailAll, setdetailAll] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  const mount3 = async() =>{
      try{
       const {data:dataMy}= await getApi.getDetailMy(id);
        setdetailMy(dataMy);
      }catch {
        console.log("챌린지 시작 안함");
      }finally {
        setloading(false);
    };
  }
  const mount2 = async() =>{
    try{
      const {data:dataAll} = await getApi.getDetailAll(id);
      setdetailAll(dataAll);
    }catch {
      console.log("챌린지 가입 안함");
    }finally {
      mount3();
    };
  }
  const mount = async() => {
    try {
		const {data} = await getApi.getDetail(id);
    console.log(data);
		setdetail(data);
    } catch {
      seterror("Can't find Challenge.");
    } finally {
      mount2();
    }
  };
  useEffect(() => {mount()},[user]);
  return (
	error? `${error}`: 
    <Presenter
		data_challenge={detail} data_myverify={detailMy} data_allverify={detailAll} loading={loading} user={user} id={id}
    />
  );
}
export default Container;