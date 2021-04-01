import './recipe-card.styles.scss';

const RecipeCard = ({recipe}) => {
    const {picture, name, ranking, description, author} = recipe;

    // Determing amount of stars
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
        </div>
    );
};

export default RecipeCard;