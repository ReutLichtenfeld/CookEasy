import { connect } from 'react-redux';

import './search-results.styles.scss';

import RecipeCard from '../../components/recipe-card/recipe-card';

import { loadNextPage } from '../../redux/search-results/search-results.actions';

const SearchResults = ({keyWord, results, page, isFetching, total, loadNextPage}) => {

    const handleClick = () => {
        let newPage = page + 1;
        loadNextPage(keyWord, newPage);
    }
    
    return (
        <div className="search-results">
            <div className="search-results__space" />
            <div className="search-results__header">
                <h1>{`Recipe Results for ${keyWord}`}</h1>
                <h2>{`${results.length} Results`}</h2>
            </div>
            <div className="results">
                {results.map(recipe => <RecipeCard recipe={recipe} key={recipe._id} />)}
                {results.length === 0 ? <p className="results__no-results">Sorry, but nothing matched your search terms. Please try again with some different keywords.</p> : <div></div>}   
            </div>
            { (total > results.length)
                ? <div className="search-results__loading">
                    { isFetching
                        ? <button className="search-results__loading-btn">LOADING...</button> 
                        : <button className="search-results__loading-btn" onClick={handleClick} >LOAD MORE</button>
                    }
                  </div>
                : <div />
            }
        </div>
    );
};

const mapStateToProps = state => ({
    keyWord: state.searchResults.keyWord,
    results: state.searchResults.results,
    page: state.searchResults.page,
    isFetching: state.searchResults.isFetching,
    total: state.searchResults.total
});

const mapDispatchToProps = dispatch => ({
    loadNextPage: (keyWord, page) => dispatch(loadNextPage(keyWord, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);