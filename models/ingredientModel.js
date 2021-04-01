const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        price: {
            type: Number
        },
        amount: {
            type: Number
        }
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
