import './category-page.styles.scss';

import RecipeCard from '../../components/recipe-card/recipe-card';

const CategoryPage = (category, categoryImg, results) => {
    const word = 'Vegeterian';
    const description = 'Healthy and Nutritious'
    const img = 'vegeterian-category.jpg';

    const recipe1 = {
        img: 'pizza.jpg',
        title: 'Pizza',
        rating: 4,
        description: 'The best pizza ever',
        author: 'Dor Melamed'
    }
    const recipes = [recipe1, recipe1, recipe1, recipe1, recipe1, recipe1, recipe1];
    

    return (
        <div className="category-page">
            <div className="category-page__space" />

            <div className="category-page__header">
                <div className='category-page__img' style={{backgroundImage: `url(${img})`}} />
                <div className="category-page__title-container">
                    <h1>{`${word} Recipes`}</h1>
                    <h2>{`${description}`}</h2>
                </div>
            </div>

            <div className="results">
                {recipes.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}   
            </div>
        </div>
    );
}

export default CategoryPage;