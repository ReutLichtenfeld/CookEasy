import searchResultsTypes from './search-results.types';

const initialState = {
    keyWord: undefined,
    results: [],
    page: 1,
    total: 0,
    isFetching: false,
    error: undefined
};

const searchResultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case searchResultsTypes.FETCH_RESULTS_START:
            return {
                ...state,
                isFetching: true,
                keyWord: action.payload,
                results: [],
                page: 1
            };
        case searchResultsTypes.LOAD_NEXT_PAGE:
            return {
                ...state,
                isFetching: true,
                keyWord: action.payload.keyWord,
                page: action.payload.page
            }
        case searchResultsTypes.FETCH_RESULTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                results: state.results.concat(action.payload.results),
                total: action.payload.total
            };
        case searchResultsTypes.FETCH_RESULTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default searchResultsReducer;