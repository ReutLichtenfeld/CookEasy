const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, 'Name is required'],
        },
        description: {
            type: String,
            required: [true, 'Description is required']
        },
        picture: {
            type: String,
            unique: true,
            required: [true, 'Image is required']
        },
        author: {
            type: String,
            required: [true, 'Author is required']
        },
        ranking: {
            type: Number,
            default: 4,
            min: [1, 'Ranking must be larger than 1'],
            max: [5, 'Ranking must be smaller than 5']
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        difficulty: {
            type: String,
            enum: {
                values: ['easy', 'medium', 'hard'],
                message: 'Difficulty is either: breakfast, lunch or dinner',
            }
        },
        keyWords: [String],
        ingredients: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Ingredient'
            }
        ]
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;