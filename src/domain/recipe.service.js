import { getCocktailRecipe } from './cocktails.actions';

export function getCockatailRecipe(cocktail) {
    const ingredients = []
    const measures = []
    const recipe = {}

    //get ingredients and measures

    for(const detail in cocktail){
      if(detail.includes('strIngredient')) {
        if(cocktail[detail]){
          ingredients.push(cocktail[detail])
        }
      }
      if(detail.includes('strMeasure')) {
        if(cocktail[detail]){
          measures.push(cocktail[detail])
        }
      }
    }

    // create an associatif array between ingredients and measures

    for(let ingredient = 0; ingredient < ingredients.length; ingredient++){
      recipe[ingredients[ingredient]] = measures[ingredient]
    }

    return recipe
}

export function getInfoRecipe(dispatch) {
  dispatch(getCocktailRecipe())
}