import { combineReducers } from 'redux';

import searchResultsReducer from './search-results/search-results.reducers';
import topRecipesReducer from './top-recipes/top-recipes.reducers';
import likesReducer from './likes/likes.reducers';

const rootReducer = combineReducers({
    searchResults: searchResultsReducer,
    topRecipes: topRecipesReducer,
    likes: likesReducer
});

export default rootReducer;