import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTopRecipesStart } from '../../redux/top-recipes/top-recipes.actions';

import Categorie from './category';
import TopMostPopular from './topMostPopular';

import './homepage.styles.scss';

import img1 from '../../img/header-img/img-1.jpg';
import img2 from '../../img/header-img/img-2.jpg';
import img3 from '../../img/header-img/img-3.jpg';
import img4 from '../../img/header-img/img-4.jpg';
import img5 from '../../img/header-img/img-5.jpg';
import img6 from '../../img/header-img/img-6.jpg';
import img7 from '../../img/header-img/img-7.jpg';
import img8 from '../../img/header-img/img-8.jpg';

const HomePage = ({ fetchTopRecipes }) => {
    useEffect(() => {
        fetchTopRecipes();
    });
    
    return (
        <div className="homepage">

            <div className="header">

                <div className="header__background">
                    <div className="header__background__row">
                        <img src={img1} alt='recipe-1' className='header__background__img'/>
                        <img src={img2} alt='recipe-2' className='header__background__img'/>
                        <img src={img3} alt='recipe-3' className='header__background__img'/>
                        <img src={img4} alt='recipe-4' className='header__background__img'/>
                    </div>
                    <div className="header__background__row">
                        <img src={img5} alt='recipe-5' className='header__background__img'/>
                        <img src={img6} alt='recipe-6' className='header__background__img'/>
                        <img src={img7} alt='recipe-7' className='header__background__img'/>
                        <img src={img8} alt='recipe-8' className='header__background__img'/>
                    </div>
                </div>
                
                <div className="header__title">
                    <div className="header__title__text">
                        <h1>CookEasy <br/></h1>
                        <h4>Over 100 different recipes</h4>
                    </div> 
                </div>
            </div>

            <div className="header__space"></div>

            <h1 className="homepage__section-title">Categories</h1>
            <div className="categories">
                <Categorie name='Healthy' key='1' />
                <Categorie name='Easy' key='2' />
                <Categorie name='Breakfast' key='3' />
                <Categorie name='Lunch' key='4' />
                <Categorie name='Dinner' key='5' />
                <Categorie name='Dessert' key='6' />
                <Categorie name='Chicken' key='7' />
                <Categorie name='Vegeterian' key='8' />    
            </div>

            <TopMostPopular />

        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchTopRecipes: () => dispatch(fetchTopRecipesStart())
});

export default connect(null, mapDispatchToProps)(HomePage);