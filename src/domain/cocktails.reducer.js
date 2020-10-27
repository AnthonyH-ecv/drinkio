import { types } from './cocktails.actions';

export const initialState = {
    pending: false,
    cocktail: null,
    cocktailLiked: null,
    error: null
}

export default function reducer (state, action) {
    switch (action.type) {
        case types.FETCH_COCKTAIL_PENDING:
            return {
                ...state,
                pending: true
            }
        case types.FETCH_COCKTAIL_SUCCESS:
            return {
                ...state,
                pending: false,
                cocktail: action.payload.cocktail,
                cocktailLiked: action.payload.cocktailLiked
            }
        case types.FETCH_COCKTAIL:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}