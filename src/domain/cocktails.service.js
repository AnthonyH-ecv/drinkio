import { fetchCocktailSuccess, fetchCocktailError, getCocktailRecipe } from './cocktails.actions';

export function fetchCocktail(dispatch, cocktails) {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
                return res;
            })
        .then(res => res.drinks && res.drinks[0])
        .then(cocktail => {
            if (cocktails.find(c => c.idDrink === cocktail.idDrink)) {
                console.log("retry");
            } else {
                dispatch(fetchCocktailSuccess(cocktail, cocktails));
            }
        })
        .catch(error => dispatch(fetchCocktailError(error)))
}

export function getInfoRecipe(dispatch) {
    dispatch(getCocktailRecipe())
}