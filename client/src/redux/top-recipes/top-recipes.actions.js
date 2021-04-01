import topRecipesTypes from './top-recipes.types';

export const fetchTopRecipesStart = () => ({
    type: topRecipesTypes.FETCH_TOPRECIPES_START
});

export const fetchTopRecipesSuccess= topRecipes => ({
    type: topRecipesTypes.FETCH_TOPRECIPES_SUCCESS,
    payload: topRecipes
});

export const fetchTopRecipesFailure = error => ({
    type: topRecipesTypes.FETCH_TOPRECIPES_FAILURE,
    payload: error
});