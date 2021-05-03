import { React, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LikesDropdown from '../likes-dropdown/likes-dropdowm';

import logo from '../../img/logo-pink.png';
import { ReactComponent as SearchIcon } from '../../img/search-icon.svg';
import { ReactComponent as HeartIcon } from '../../img/heart-icon.svg';

import { fetchResultsStart } from '../../redux/search-results/search-results.actions';

import './navbar.styles.scss';

const NavBar = ({ fetchResults }) => {

    const [keyWord, setKeyWord] = useState({ keyWordContent: '' });

    let history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        fetchResults(keyWord.keyWordContent);
        setKeyWord({ keyWordContent: '' });
        history.push('/results');
        window.scrollTo(0, 0);
    }

    const handleChange = event => {
        const {value} = event.target;

        setKeyWord({ keyWordContent: value });
    }

    const handleLogoClick = () => {
        history.push('/');
        window.scrollTo(0, 0);
    }

    const handleLikesClick = () => {
        history.push('/my-likes');
        window.scrollTo(0, 0);
    }

    return (
        <div className="navbar-container">

            <div className='logo-container'>
                <img src={logo} alt='Logo' className='logo' onClick={handleLogoClick}/>
            </div>

            <form onSubmit={handleSubmit} className='search'>
                <input type="text" value={keyWord.keyWordContent} onChange={handleChange} className="search__input" placeholder="Find a Recipe" />
                <button className="search__button">
                    <SearchIcon className="search__icon"/>
                </button>
            </form>

            <div className="user-nav">
                <div className="user-nav__likes">
                    <HeartIcon className="user-nav__likes__icon" onClick={handleLikesClick}/>
                    <div className="user-nav__likes__dropdown">
                        <div className="user-nav__likes__dropdown-content" >
                            <LikesDropdown />
                        </div>
                    </div>
                </div>
                {/* <div className="user-nav__sign">Sign Up / Login</div> */}
            </div>
            
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchResults: keyWord => dispatch(fetchResultsStart(keyWord))
});

export default connect(null, mapDispatchToProps)(NavBar);