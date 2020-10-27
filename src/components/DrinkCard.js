import React from 'react';
import info from "../info.png";

export default function DrinkCard(props) {
  const cocktail = props.cocktail
  
  return (
    <div className="Drink-card">
      <div className="Drink-img">
        <img src={cocktail ? cocktail.strDrinkThumb : ''} className={cocktail ? cocktail.strDrink : ''} alt="logo" />
      </div>
      <div className="Drink-data">
        <div className="Drink-title">
          <p className="title">{cocktail ? cocktail.strDrink : ''}</p>
          <p className="category">{cocktail ? cocktail.strCategory : ''}</p>
        </div>
        <div className="Drink-info">
          <img src={info} alt="More informations" />
        </div>
      </div>
    </div>
  )
}