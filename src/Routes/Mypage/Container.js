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


// const contents = [() => (<section>챌린지 목록</section>), () => (<section>완료된 챌린지</section>)]
const contents = [<ChallengeList/>, <ChallengeComplete/>];
const Container = () => {
	const tabs = useTabs(0, contents);
	return <Presenter tabs ={tabs} />
  };
  
export default Container;
