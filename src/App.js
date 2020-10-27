import React, { useState, useEffect, useReducer } from 'react';
import { fetchCocktail } from './domain/cocktails.service'
import { default as cocktailReducer, initialState}  from './domain/cocktails.reducer'
import './App.scss';

import Navbar from "./components/Navbar"
import DrinkCard from "./components/DrinkCard";
import Like from "./components/Like"
import Dislike from "./components/Dislike"

import {Route, Switch} from "react-router-dom";

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
          default: return setCocktails([...cocktails, data])
      }
  }

  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route path="/" exact component={() => (
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
            )} />
          <Route path="/likes" component={() => (
            <>
              <div className="App-content">
                <p>Likes list</p>
              </div>
              <div>Delete list</div>
            </>
          )} />
        </Switch>
    </div>
  );
}

export default App;
