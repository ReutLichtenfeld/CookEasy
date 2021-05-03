import { connect } from 'react-redux';

import { removeRecipeFromLikes } from '../../redux/likes/likes.actions';

import { ReactComponent as DeleteIcon } from '../../img/close-circle-outline.svg';

import './dropdown-item.styles.scss';

const DropdownItem = ({ item, removeRecipeFromLikes }) => {
    const { picture, name } = item;

    const handleDeleteClick = () => {
        removeRecipeFromLikes(item);
    }

    return (
        <div className="dropdown-item">
            <div className="dropdown-item__img" style={{backgroundImage: `url(/img/recipes/${picture}.jpg)`}} />
            <h1 className="dropdown-item__title">{`${name}`}</h1>
            <button className="dropdown-item__delete-btn" onClick={handleDeleteClick}>
                <DeleteIcon className="dropdown-item__delete-icon" />
            </button>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeRecipeFromLikes: recipe => dispatch(removeRecipeFromLikes(recipe))
});

export default connect(null, mapDispatchToProps)(DropdownItem);