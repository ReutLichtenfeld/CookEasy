import { connect } from 'react-redux';

import { addRecipeToLikes, removeRecipeFromLikes } from '../../redux/likes/likes.actions';

import { ReactComponent as HeartCircle } from '../../img/heart-circle.svg';
import { ReactComponent as HeartCircleOutline } from '../../img/heart-circle-outline.svg';

import './recipe-card.styles.scss';

const RecipeCard = ({ recipe, addRecipeToLikes, removeRecipeFromLikes, likedRecipes }) => {

    const {picture, name, ranking, description, author, _id} = recipe;

    let isLiked;
    if(likedRecipes.find(recipe => recipe._id === _id)){
        isLiked = true;
    } else {
        isLiked = false;
    }

    // Determening amount of stars
    const fullStars = Math.round(ranking);
    const emptyStars = 5 - fullStars;
    let fullStarsArr = [];
    let emptyStarsArr = [];    
    for (let i = 0; i < fullStars; i++) {
        fullStarsArr.push(true);          
    };
    for (let i = 0; i < emptyStars; i++) {
        emptyStarsArr.push(true);          
    };

    const handleLikeClick = () => {
        if(isLiked) {
            removeRecipeFromLikes(recipe);
        } else {
            addRecipeToLikes(recipe);
        }
    };

    return (
        <div className="recipe-card">
            <div className='recipe-card__img' style={{backgroundImage: `url(/img/recipes/${picture}.jpg)`}} />
            <div className="recipe-card__content">
                <h1>{`${name}`}</h1>
                <div className="recipe-card__ranking">
                    { fullStarsArr.map((value, i) => <div className="recipe-card__ranking__stars" key={i}>&#9733;</div>) }
                    { emptyStarsArr.map((value, i) => <div className="recipe-card__ranking__stars" key={i}>&#9734;</div>) }
                </div>
                <p className="recipe-card__description">{`${description}`}</p>
                <p className="recipe-card__author">{`By ${author}`}</p>
            </div>
            <div className="recipe-card__like-btn" onClick={ handleLikeClick }>
                { isLiked
                    ? <HeartCircle className="recipe-card__like-btn__img" />
                    : <HeartCircleOutline className="recipe-card__like-btn__img" />
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    likedRecipes: state.likes.likedRecipes
});

const mapDispatchToProps = dispatch => ({
    addRecipeToLikes: recipe => dispatch(addRecipeToLikes(recipe)),
    removeRecipeFromLikes: recipe => dispatch(removeRecipeFromLikes(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);