import { React, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import logo from '../../img/logo-pink.png';
import { ReactComponent as SearchIcon } from '../../img/search-icon.svg';
// import { ReactComponent as HeartIconFull } from '../../img/heart-circle.svg';
// import { ReactComponent as HeartIconOutline } from '../../img/heart-circle-outline.svg';

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
                    {/* <HeartIconOutline className="user-nav__likes--not-pressed" />
                    <HeartIconFull className="user-nav__likes--pressed" /> */}
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