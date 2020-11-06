import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.scss';

import Navbar from "./components/Navbar"

import Home from "./pages/Home";
import Likes from "./pages/Likes";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/likes" component={Likes} />
        </Switch>
    </div>
  );
}

export default App;
