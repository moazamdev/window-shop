import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";

const HatsPage = () => (
  <div><h1>Hats Page</h1></div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <HomePage />
      </Switch>
    </div>
  );
}

export default App;
