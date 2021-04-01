import { connect } from 'react-redux';

import RecipeCard from '../../components/recipe-card/recipe-card';

const TopMostPopular = ({ topRecipes }) => (
    <div className="top-recipes">
        <h1 className="homepage__section-title">
            Our Top Most Popular Recipes
        </h1>
        <div className="top-recipes__row">
            {topRecipes.map(recipe => <RecipeCard recipe={recipe} key={recipe._id} />)}
        </div>
    </div>
);

const mapStateToProps = state => ({
    topRecipes: state.topRecipes.topRecipes
});

export default connect(mapStateToProps)(TopMostPopular);