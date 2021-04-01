import topRecipesTypes from './top-recipes.types';

const initialState = {
    topRecipes: [],
    isFetching: false,
    error: undefined
};

const topRecipesReducer = (state = initialState, action) => {
    switch(action.type) {
        case topRecipesTypes.FETCH_TOPRECIPES_START:
            return {
                ...state,
                isFetching: true,
            };
        case topRecipesTypes.FETCH_TOPRECIPES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                topRecipes: action.payload
            };
        case topRecipesTypes.FETCH_TOPRECIPES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default topRecipesReducer;