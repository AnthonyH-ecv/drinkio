import * as React from "react"
import drinkio from "./../drinkio.png"
// import Logo from "./Logo";

export default function Navbar(props) {
    return (
        <header className="App-header">
          <img src={drinkio} alt="DrinkIO"/>
          {/*<Logo />*/}
        </header>
    )
}