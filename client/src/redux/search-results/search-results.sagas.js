import { takeLatest, call, put, all } from 'redux-saga/effects';

import { fetchResultsSuccess, fetchResultsFailure } from './search-results.actions';
import { getRecipes } from '../../utils/axios';

import searchResultsTypes from './search-results.types';

export function* fetchResults(action) {
    try {
        const keyWord = action.payload.keyWord ? action.payload.keyWord : action.payload;
        const page = action.payload.page ? action.payload.page : 1;
        
        const results = yield call(getRecipes, { limit: 16, keyWords: keyWord, page });

        yield put(fetchResultsSuccess(results.data.data.data, results.data.data.total));
    } catch (error) {
        yield put(fetchResultsFailure(error.message));
    }
};

export function* fetchResultsStart() {
    yield takeLatest(searchResultsTypes.FETCH_RESULTS_START, fetchResults);
};

export function* loadNextPage() {
    yield takeLatest(searchResultsTypes.LOAD_NEXT_PAGE, fetchResults);
};

export function* resultsSagas() {
    yield all([
        call(fetchResultsStart),
        call(loadNextPage)
    ]);
};