import { useState } from 'react';
import { connect } from 'react-redux';

// import './search-results.styles.scss';

import RecipeCard from '../../components/recipe-card/recipe-card';

const MyLikes = ({ likedRecipes }) => {

    const [recipes, setRecipes] = useState({ amount: 16 });

    let likedRecipesReduced = likedRecipes.slice(0, recipes.amount);

    const handleClick = () => {
        let newAmount;
        if (likedRecipes.length > recipes.amount + 16) {
            newAmount = recipes.amount + 16;
        } else {
            newAmount = likedRecipes.length;
        }

        setRecipes({ amount: newAmount });
    }
    
    return (
        <div className="search-results">
            <div className="search-results__space" />
            <div className="search-results__header">
                <h1>My Favorite Recipes</h1>
                <h2>{`${likedRecipes.length} Results`}</h2>
            </div>
            <div className="results">
                {likedRecipesReduced.map(recipe => <RecipeCard recipe={recipe} key={recipe._id} />)}
                {likedRecipesReduced.length === 0 ? <p className="results__no-results">Check out our 100+ recipes for inspiration</p> : null}   
            </div>
            { (likedRecipes.length > recipes.amount)
                ? <div className="search-results__loading">
                    <button className="search-results__loading-btn" onClick={handleClick}>LOAD MORE</button>
                  </div>
                : null
            }
        </div>
    );
};

const mapStateToProps = state => ({
    likedRecipes: state.likes.likedRecipes
});

export default connect(mapStateToProps)(MyLikes);