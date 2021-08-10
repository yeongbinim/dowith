import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Main/Home";
import Home2 from "Routes/Main/Home2";
import Introduce from "Routes/Main/Introduce";
import Certify from "Routes/Certify";
import Signin from "Routes/Sign/Signin";
import Signup from "Routes/Sign/Signup";
import Join1 from "Routes/Sign/Join1";
import Join2 from "Routes/Sign/Join2";
import CreateChallenge from "Routes/Main/CreateChallenge";
import Back from "Components/Navigation/Back";
import Detail from "Routes/Challenge/Detail";
import DetailRank from "Routes/Challenge/Rank";
import Mypage from "Routes/Mypage";
import Kakao from "Routes/Kakao";

import {useState, useEffect} from "react";
import { getApi } from "api";

const RouterC = () => {
 	const [user, setUser] = useState(null);
  	const mount = async() => {
		try {
			const {data}= await getApi.getUser();
			setUser(data);
		} catch {
			console.log("Not login");
		};
	}
	useEffect(() => mount(), []);

	return(
	<Router>
		<Back/>
		<Switch>
			<Route path="/" exact={true} render={()=><Home user={user}/>} />
			<Route path="/certify" render={()=><Certify user={user}/>} />
			<Route path="/mypage" render={()=><Mypage user={user}/>} />
			<Route path="/introduce" render={()=><Introduce/>} />
			<Route path="/createchallenge" render={()=><CreateChallenge user={user}/>} />
			<Route path="/challenge" exact={true} render={()=><Home2/>}/>
			<Route path="/signin" render={()=><Signin user={user}/>} />
			<Route path="/signup" render={()=><Signup user={user}/>} />
			<Route path="/kakao" render={()=><Kakao user={user}/>} />
			<Route path="/join1" render={()=><Join1 user={user}/>} />
			<Route path="/join2" render={()=><Join2 user={user}/>} />
			<Route path="/challenge/:id" exact={true} render={()=><Detail user={user}/>} />
			<Route path="/challenge/rank/:id" render={()=><DetailRank user={user}/>} />
			<Redirect from="*" to="/"/>
		</Switch>
	</Router>)};
export default RouterC;
