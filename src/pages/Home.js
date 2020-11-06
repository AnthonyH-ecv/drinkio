import React, { useState, useEffect, useReducer } from 'react';
import DrinkCard from "../components/DrinkCard";
import Like from "../components/Like";
import Dislike from "../components/Dislike";
import {default as cocktailReducer, initialState} from "../domain/cocktails.reducer";
import {fetchCocktail} from "../domain/cocktails.service";

export default function Home(props) {
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
      default: return setCocktails([...cocktails, data])
    }
  }
  
  return (
    <>
      <div className="App-content">
        <DrinkCard
          cocktail={state.cocktail}
        />
      </div>
      <div className="App-footer">
        <Like stroke="black" fill="red" size={.25} onClick={() => handleLike(state.cocktail ? [state.cocktail] : [], 'like')} />
        <Dislike stroke="black" fill="red" size={.25} onClick={() => handleLike(state.cocktail ? [state.cocktail] : [], 'dislike')} />
      </div>
    </>
  )
}