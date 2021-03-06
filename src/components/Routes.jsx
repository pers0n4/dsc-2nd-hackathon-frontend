import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Auth/signin";
import SignUp from "./Auth/signup";
import Write from "./Edit/write";
import Map from "./Map";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Map} />
      <Route path="/write" component={Write} />
      <Route path="/auth/signup" component={SignUp} />
      <Route path="/auth/signin" component={SignIn} />
    </Switch>
  </Router>
);

export default Routes;
