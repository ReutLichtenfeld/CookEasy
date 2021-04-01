const Recipe = require('../models/recipeModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getTopRecipes = (req, res, next) => {
    req.query.limit = 4;
    req.query.fields='name,description,picture,ranking,author';
    next();
};

exports.getAllRecipes = async (req, res) => {

    try {
        // Execute query
        const features = new APIFeatures(Recipe.find(), req.query)
            .filterBykeyWords()
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const queryCount = new APIFeatures(Recipe.find(), req.query)
            .filterBykeyWords()
            .filter();
        
        const total = await queryCount.query.countDocuments();

        const recipes = await features.query;
        
        //Send respond
        res.status(200).json({
            status: 'success',
            results: recipes.length,
            data: {
                total,
                data: recipes
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failure',
            error
        });
    }
};

exports.createRecipe = async (req, res) => {
    const newRecipe = await Recipe.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            data: newRecipe
        }
    });
};

exports.getRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    
    res.status(200).json({
        status: 'success',
        data: {
            data: recipe
        }
    });
};

exports.updateRecipe = async (req, res, next) => {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

    if(!recipe){
        res.status(404).json({
            status: 'failure',
            message: 'No recipe was found with that id'
        });
    }
    
    res.status(200).json({
        status: 'success',
        data: {
            data: recipe
        }
    });
};

exports.deleteRecipe = async (req, res) => {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    
    if(!recipe){
        res.status(404).json({
            status: 'failure',
            message: 'No recipe was found with that id'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: recipe
        }
    });
};