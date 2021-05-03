import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import DropdownItem from '../dropdown-item/dropdown-item';

import "./likes-dropdown.styles.scss";

const LikesDropdown = ({ likedRecipes }) => {

    let history = useHistory();

    let likedRecipesReduced = likedRecipes.slice(0, 6);

    const handleMyFavoritesClick = () => {
        history.push('/my-likes');
        window.scrollTo(0, 0);
    };

    return (
        <div className="likes-dropdown">
            { likedRecipes.length !== 0
                ? <div>
                    { likedRecipesReduced.map(recipe => <DropdownItem item={recipe} key={recipe._id}/>) }
                    <button className="likes-dropdown__btn" onClick={handleMyFavoritesClick}>My favorite recipes</button>
                  </div> 
                : <button className="likes-dropdown__btn">Recommended recipes</button>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    likedRecipes: state.likes.likedRecipes
});

export default connect(mapStateToProps)(LikesDropdown);