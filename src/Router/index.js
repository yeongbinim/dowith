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
import Header from "Components/Navigation/Header";
import Detail from "Routes/Challenge/Detail";
import DetailRank from "Routes/Challenge/Rank";

const RouterC = () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/certify" component={Certify} />
			<Route path="/introduce" component={Introduce} />
			<Route path="/createchallenge" component={CreateChallenge} />
			<Route path="/challenge" exact={true} component={Home2} />
			<Route path="/signin" component={Signin} />
			<Route path="/signup" component={Signup} />
			<Route path="/join1" component={Join1} />
			<Route path="/join2" component={Join2} />
			<Route path="/challenge/:id" exact={true} component={Detail} />
			<Route path="/challenge/rank/:id" component={DetailRank} />
			<Redirect from="*" to="/"/>
		</Switch>
	</Router>);
export default RouterC;
