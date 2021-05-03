export const addRecipeToLikes = (likedRecipes, recipeToAdd) => {
    if (likedRecipes.find(recipe => recipe._id === recipeToAdd._id)) return likedRecipes;

    return [recipeToAdd, ...likedRecipes];
};

export const removeRecipeFromLikes = (likedRecipes, recipeToRemove) => {
    if (!likedRecipes.find(recipe => recipe._id === recipeToRemove._id)) return likedRecipes;

    return likedRecipes.filter(recipe => recipe._id !== recipeToRemove._id);
};