import React, { useReducer } from 'react';
import { default as cocktailReducer, initialState}  from '../domain/cocktails.reducer'
import { getCockatailRecipe, getInfoRecipe } from '../domain/recipe.service'
import info from '../info.png'

import '../assets/components/DrinkCard.scss'

export default function DrinkCard({cocktail}) {
    const [state, dispatch] = useReducer(cocktailReducer, initialState)
    const cocktailRecipe = getCockatailRecipe(cocktail)

    const renderRecipe = Object.keys(cocktailRecipe).map((key, index)=>
     <li key={index}>{key} <span>{cocktailRecipe[key]}</span></li>
     )
     
    return(
        <div className="drink-card">
          { !state.getRecipe &&
            <>
                <div className="drink-img">
                    <img src={cocktail ? cocktail.strDrinkThumb : ''} className={cocktail ? cocktail.strDrink : ''} alt="logo" />
                </div>
            </>
          }
          { state.getRecipe &&
            <>
              <div className="drink-recipe">
                <ul>{renderRecipe}</ul>
                <p>{cocktail.strInstructions}</p>
              </div>
            </>
          }
          <div className="drink-data">
            <div className="drink-title">
              <p className="title">{cocktail ? cocktail.strDrink : ''}</p>
              <p className="category">{cocktail ? cocktail.strCategory : ''}</p>
            </div>
          </div>
          <div className="drink-info" onClick={()=> getInfoRecipe(dispatch)}>
            <img src={info} alt="More informations" />
          </div>
        </div>
    )
}