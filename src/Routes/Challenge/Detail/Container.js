import React ,{useState, useEffect}from "react";
import Presenter from "./Presenter";
import { getApi } from "api";
import {detailPage} from "testData";

const Container = () => {
  // const [detail, setdetail] = useState(null);
  // const [detailMy, setdetailMy] = useState(null);
  // const [detailAll, setdetailAll] = useState(null);
  // const [error, seterror] = useState(null);
  // const [loading, setloading] = useState(true);

  // const mount2 = async() =>{
	// try{
	// 	const {data:dataMy}= await getApi.getDetailMy(4);
	// 	const {data:dataAll} = await getApi.getDetailAll(4);
	// 	setdetailMy(dataMy);
	// 	setdetailAll(dataAll);
	// }catch {
	// 	console.log("챌린지 가입 안함");
	// }finally {
	// 	setloading(false);
	// 	console.log(detail,detailMy,detailAll,loading);
	// };
  // }
  // const mount = async() => {
  //   try {
	// 	const {data} = await getApi.getDetail(4);
	// 	setdetail(data);
  //   } catch {
  //     seterror("Can't find Challenge.");
  //   } finally {
  //     mount2();
  //   }
  // };
  // useEffect(() => {mount()},[]);
  return (
	// error? `${error}`:
    // <Presenter
	// 	data_challenge={detail} data_myverify={detailMy} data_allverify={detailAll} loading={loading}
    // />
    <Presenter
		data_challenge={detailPage.detail} data_myverify={detailPage.detailMy} data_allverify={detailPage.detailAll} loading={detailPage.loading}
    />
  );
}
export default Container;