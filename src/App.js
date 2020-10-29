import React, { useState, useEffect, useReducer } from 'react';
import { fetchCocktail, getInfoRecipe } from './domain/cocktails.service'
import { default as cocktailReducer, initialState}  from './domain/cocktails.reducer'
import './App.scss';

import Navbar from "./components/Navbar"
import Like from "./components/Like"
import Dislike from "./components/Dislike"
import DrinkCard from './components/DrinkCard';



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

  console.log(state)
  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        <DrinkCard cocktail={state.cocktail} onClick={()=> getInfoRecipe(dispatch)}/>
      </div>
      <div className="App-footer">
        <Like stroke="black" fill="red" size={.25} onClick={() => handleLike(state.cocktail ? [state.cocktail] : [], 'like')} />
        <Dislike stroke="black" fill="red" size={.25} onClick={() => handleLike(state.cocktail ? [state.cocktail] : [], 'dislike')} />
      </div>
    </div>
  );
}

export default App;
