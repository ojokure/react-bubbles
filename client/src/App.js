import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App(props) {
  const onLogOut = () => {
    localStorage.removeItem("token");
    props.history.replace("/");
  };
  return (
    <Router>
      <div className="App">
        <div>
          <NavLink exact to="/" onClick={onLogOut}>
            Log Out
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/colors">
            BubblePage
          </NavLink>
        </div>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/colors" component={BubblePage} />
      </div>
    </Router>
  );
}

export default withRouter(App);
