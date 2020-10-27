import React, { useState, useEffect, useReducer } from 'react';
import { fetchCocktail } from './domain/cocktails.service'
import { default as cocktailReducer, initialState}  from './domain/cocktails.reducer'

import Navbar from "./components/Navbar"
import Like from "./components/Like"
import Dislike from "./components/Dislike"

import './App.scss';

function App() {
  const [state, dispatch] = useReducer(cocktailReducer, initialState)
  const [cocktails, setCocktails] = useState([])

  
  useEffect(() => {
    // fetch data
    fetchCocktail(dispatch, cocktails)
    
    //update localStorage with drink name
    localStorage.setItem('like', JSON.stringify(cocktails))

  }, [cocktails])

  const handleLike = (data, type = 'like') => {
      switch (type) {
          case 'dislike':
            return fetchCocktail(dispatch, data)
          case 'like':
          default: return setCocktails([...cocktails,data])
      }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        <div className="Drink-card">
          <div className="Drink-img">
            <img src={state.cocktail ? state.cocktail.strDrinkThumb : ''} className="App-logo" alt="logo" />
          </div>
          <div className="Drink-data">
            <p className="Drink-title">
              {state.cocktail ? state.cocktail.strDrink : ''}
            </p>
          </div>
        </div>
      </div>
      <div className="App-footer">
        <Like stroke="black" fill="red" size={.5} onClick={() => handleLike(state.cocktail ? [state.cocktail] : [], 'like')} />
        <Dislike stroke="black" fill="red" size={.5} onClick={() => handleLike(state.cocktail ? [state.cocktail] : [], 'dislike')} />
      </div>
    </div>
  );
}

export default App;
