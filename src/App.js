import React, { useState, useEffect, useReducer } from 'react';
import { fetchCocktail } from './domain/cocktails.service'
import { default as cocktailReducer, initialState}  from './domain/cocktails.reducer'

import Navbar from "./components/Navbar"
import Like from "./components/Like"
import Dislike from "./components/Dislike"
import DrinkCard from './components/DrinkCard';

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

  const handleLike = (cocktail) => {
      setCocktails([...cocktails,cocktail])
  }

  const handleDislike = (cocktail) => {
    fetchCocktail(dispatch, cocktail)
  }

  console.log(state)
  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        <DrinkCard cocktail={state.cocktail}/>
      </div>
      <div className="App-footer">
        <Like stroke="black" fill="red" size={.25} onClick={() => handleLike(state.cocktail ? [state.cocktail] : [])} />
        <Dislike stroke="black" fill="red" size={.25} onClick={() => handleDislike(state.cocktail ? [state.cocktail] : [])} />
      </div>
    </div>
  );
}

export default App;
