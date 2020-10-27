import * as React from "react"
import drinkio from "./../drinkio.png"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
// import Logo from "./Logo";

export default function Navbar() {
    return (
        <header className="App-header">
          <div className="App-router">
            <span>&nbsp;</span>
            <Link to="/">
              <img src={drinkio} alt="DrinkIO"/>
            </Link>
            <Link to="/likes">Likes</Link>
          </div>
          {/*<Logo />*/}
        </header>
    )
}