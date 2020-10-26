import * as React from "react"
import Navbar from "./components/Navbar";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <img src={"https://www.thecocktaildb.com/images/media/drink/ysuqus1441208583.jpg"} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
