import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import Certify from "Routes/Certify";
import Header from "Components/Header";

const RouterC = () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact={true} component={Home}/>
			<Route path="/certify" exact={true} component={Certify}/>
			<Redirect from="*" to="/"/>
		</Switch>
	</Router>
);

export default RouterC;