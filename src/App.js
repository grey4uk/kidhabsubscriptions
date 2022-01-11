import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Subscriptions } from "./components/Subscriptions/Subscriptions.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Subscriptions />
          </Route>
          <Route path={`/:language`}>
            <Subscriptions />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
