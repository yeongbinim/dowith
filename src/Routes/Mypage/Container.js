import React from "react";
import Presenter from "./Presenter";
import {useState, useEffect} from "react";
import { getApi } from "api";
import ChallengeList from "./Tabs/ChallengeList";
import ChallengeComplete from "./Tabs/ChallengeComplete";

const useTabs = (initialTab, allTabs) => {
	const [currentIdx, setCurrentIdx] = useState(initialTab);
	if (!allTabs || !Array.isArray(allTabs)) {
	  return;
	}
	return {
		currentIdx: currentIdx,	
	  	currentItem: allTabs[currentIdx],
	  	changeItem: setCurrentIdx
	};
};

const Container = ({user}) => {
	const [myChallenge, setMyChallenge] = useState(null);
	const [error, seterror] = useState(null);
	const [loading, setloading] = useState(true);
	const contents = [<ChallengeList data_challenge={myChallenge}/>, <ChallengeComplete data_challenge={myChallenge}/>];
	const tabs = useTabs(0, contents);

	const mount = async() => {
		try {
			const {data}= await getApi.getMyChallenge();
			setMyChallenge(data);
		} catch {
			seterror("Can't find my data.");
		} finally {
			setloading(false);
		}
	};
	useEffect(() => mount(), [user]);
	
	return (
	error? `${error}`:
	<Presenter tabs ={tabs} loading={loading} data_my={user} data_challenge={myChallenge}/>)
  };
  
export default Container;
