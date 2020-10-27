import React, { useState, useEffect } from 'react';
import './App.scss';

import Navbar from "./components/Navbar"
import Like from "./components/Like"
import Dislike from "./components/Dislike"

function App() {
  const [data, setData] = useState([])
  const [likes, setLikes] = useState([])
  
  const fetchCocktails = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(res => {
        const item = res.drinks
        setData(...item)
      })
  }
  
  useEffect(() => {
    fetchCocktails()
    
    //update localStorage with drink name
    localStorage.setItem('like', JSON.stringify(likes))
  }, [likes])
  
  console.log(data)

  const handleLike = (data, type = 'like') => {
    console.log(type)
      switch (type) {
          case 'dislike':
            return fetchCocktails()
          case 'like':
          default: return setLikes([...likes,data.strDrink])
      }
  }
  
  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        <div className="Drink-card">
          <div className="Drink-img">
            <img src={data.strDrinkThumb} className="App-logo" alt="logo" />
          </div>
          <div className="Drink-data">
            <p className="Drink-title">
              {data.strDrink}
            </p>
          </div>
        </div>
      </div>
      <div className="App-footer">
        <Like stroke="black" fill="red" size={.5} onClick={() => handleLike(data, 'like')} />
        <Dislike stroke="black" fill="red" size={.5} onClick={() => handleLike(data, 'dislike')} />
      </div>
    </div>
  );
}

export default App;
