import React, { useReducer } from 'react';
import { default as cocktailReducer, initialState}  from '../domain/cocktails.reducer'
import info from '../info.png'
import '../assets/components/DrinkCard.scss'

export default function DrinkCard({cocktail, onClick}) {
    const [state] = useReducer(cocktailReducer, initialState)
    return(
        <div className="Drink-card">
          {!state.getRecipe && 
            <>
                <div className="Drink-img">
                    <img src={cocktail ? cocktail.strDrinkThumb : ''} className={cocktail ? cocktail.strDrink : ''} alt="logo" />
                </div>
                <div className="Drink-data">
                    <div className="Drink-title">
                    <p className="title">{cocktail ? cocktail.strDrink : ''}</p>
                    <p className="category">{cocktail ? cocktail.strCategory : ''}</p>
                    </div>
                </div>
            </>
          }
            <div className="Drink-info" onClick={onClick}>
              <img src={info} alt="More informations" />
            </div>
        </div>
    )
}