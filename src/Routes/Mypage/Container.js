import React, {useState} from "react";
import Presenter from "./Presenter";
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

const Container = () => {
	const contents = [<ChallengeList/>, <ChallengeComplete/>];
	const tabs = useTabs(0, contents);
	return <Presenter tabs ={tabs}/>
  };
  
export default Container;
