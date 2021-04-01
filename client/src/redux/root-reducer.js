import { combineReducers } from 'redux';

import searchResultsReducer from './search-results/search-results.reducers';
import topRecipesReducer from './top-recipes/top-recipes.reducers';

const rootReducer = combineReducers({
    searchResults: searchResultsReducer,
    topRecipes: topRecipesReducer
});

export default rootReducer;