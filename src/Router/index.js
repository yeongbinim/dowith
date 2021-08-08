import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Main/Home";
import Challenge from "Routes/Main/Home2";
import Introduce from "Routes/Main/Introduce";
import Certify from "Routes/Certify";
import Signin from "Routes/Sign/Signin";
import Signup from "Routes/Signup";
import Join1 from "Routes/Sign/Join1";
import Join2 from "Routes/Join2";
import CreateChallenge from "Routes/Main/CreateChallenge";
import Header from "Components/Navigation/Header";


const RouterC = () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/certify" exact={true} component={Certify} />
			<Route path="/introduce" exact={true} component={Introduce} />
			<Route path="/createchallenge" exact={true} component={CreateChallenge} />
			<Route path="/challenge" exact={true} component={Challenge} />
			<Route path="/signin" exact={true} component={Signin} />
			<Route path="/signup" exact={true} component={Signup} />
			<Route path="/join1" exact={true} component={Join1} />
			<Route path="/join2" exact={true} component={Join2} />
			<Redirect from="*" to="/"/>
		</Switch>
	</Router>);
export default RouterC;
