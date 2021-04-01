import searchResultsTypes from './search-results.types';

export const fetchResultsStart = keyWord => ({
    type: searchResultsTypes.FETCH_RESULTS_START,
    payload: keyWord
});

export const fetchResultsSuccess= (results, total) => ({
    type: searchResultsTypes.FETCH_RESULTS_SUCCESS,
    payload: { results, total }
});

export const fetchResultsFailure = error => ({
    type: searchResultsTypes.FETCH_RESULTS_FAILURE,
    payload: error
});

export const loadNextPage = (keyWord, page) => ({
    type: searchResultsTypes.LOAD_NEXT_PAGE,
    payload: { keyWord, page }
});
