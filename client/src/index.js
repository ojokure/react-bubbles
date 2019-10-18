import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render( <Router> <App /> </Router>  , rootElement);
