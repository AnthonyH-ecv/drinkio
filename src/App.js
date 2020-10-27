import React, { useState, useEffect } from 'react';
import './App.scss';

import Navbar from "./components/Navbar"
import Like from "./components/Like"
import Dislike from "./components/Dislike"

import info from "./info.png"

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
            <img src={data.strDrinkThumb} alt={data.strDrink} />
          </div>
          <div className="Drink-data">
            <div className="Drink-title">
              <p className="title">{data.strDrink}</p>
              <p className="category">{data.strCategory}</p>
            </div>
            <div className="Drink-info">
              <img src={info} alt="More informations" />
            </div>
          </div>
        </div>
      </div>
      <div className="App-footer">
        <Like stroke="black" fill="red" size={.25} onClick={() => handleLike(data, 'like')} />
        <Dislike stroke="black" fill="red" size={.25} onClick={() => handleLike(data, 'dislike')} />
      </div>
    </div>
  );
}

export default App;
