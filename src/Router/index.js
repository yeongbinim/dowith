import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import Certify from "Routes/Certify";
import Signin from "Routes/Signin";
import Test from "Routes/Test";
import Header from "Components/Header";


const RouterC = () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact={true} component={Home}/>
			<Route path="/certify" exact={true} component={Certify}/>
			<Route path="/signin" exact={true} component={Signin}/>
			<Route path="/test" exact={true} component={Test}/>
			<Redirect from="*" to="/"/>
		</Switch>
	</Router>
);

export default RouterC;