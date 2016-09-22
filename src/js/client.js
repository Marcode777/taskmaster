import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

import Display from "../../src/Display";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Display}>
      <IndexRoute component={Display}></IndexRoute>
      <Route path="favorites" component={Favorites}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);