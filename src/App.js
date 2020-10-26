import React, { useState, useEffect } from 'react';
import './App.scss';

import Navbar from "./components/Navbar"
import Like from "./components/Like"
import Dislike from "./components/Dislike"

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(res => {
        const item = res.drinks
        setData(...item)
      })
  }, [])
  
  console.log(data)
  
  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        <div className="Drink-item">
          <div className="Drink-img">
            <img src={data.strDrinkThumb} className="App-logo" alt="logo" />
          </div>
        </div>
        <p>
          {data.strDrink}
        </p>
      </div>
      <div className="App-footer">
        <Like stroke="black" fill="red" size={.5} />
        <Dislike stroke="black" fill="red" size={.5} />
      </div>
    </div>
  );
}

export default App;
