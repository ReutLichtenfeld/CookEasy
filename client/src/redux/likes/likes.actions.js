import likesTypes from './likes.types';

export const addRecipeToLikes = recipe => ({
    type: likesTypes.ADD_ITEM,
    payload: recipe
});

export const removeRecipeFromLikes = recipe => ({
    type: likesTypes.REMOVE_ITEM,
    payload: recipe
});
