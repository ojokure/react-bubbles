import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavLink exact to="/">
            Log In
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

export default App;
