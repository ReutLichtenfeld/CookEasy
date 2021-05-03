import likesTypes from './likes.types';
import { addRecipeToLikes, removeRecipeFromLikes } from './likes.utils';

const initialState = {
    likedRecipes: []
};

const likesReducer = (state = initialState, action) => {
    switch(action.type) {
        case likesTypes.ADD_ITEM:
            return {
                ...state,
                likedRecipes: addRecipeToLikes(state.likedRecipes, action.payload)
            };
        case likesTypes.REMOVE_ITEM:
            return {
                ...state,
                likedRecipes: removeRecipeFromLikes(state.likedRecipes, action.payload)
            };
        default:
            return state;
    }
};

export default likesReducer;