import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import Certify from "Routes/Certify";
import Challenge from "Routes/Challenge";
import Signin from "Routes/Signin";
import Signup from "Routes/Signup";
import Join1 from "Routes/Join1";
import Header from "Components/Header";

const RouterC = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/certify" exact={true} component={Certify} />
      <Route path="/challenge" exact={true} component={Challenge} />
      <Route path="/signin" exact={true} component={Signin} />
      <Route path="/signup" exact={true} component={Signup} />
      <Route path="/join1" exact={true} component={Join1} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default RouterC;
