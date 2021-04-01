import { takeLatest, call, put, all } from 'redux-saga/effects';

import { fetchTopRecipesSuccess, fetchTopRecipesFailure } from './top-recipes.actions';
import { getRecipes } from '../../utils/axios';

import topRecipesTypes from './top-recipes.types';

export function* fetchTopRecipes() {
    try {
        const topRecipes = yield call(getRecipes, { limit: 4 });
        yield put(fetchTopRecipesSuccess(topRecipes.data.data.data));
    } catch (error) {
        yield put(fetchTopRecipesFailure(error.message));
    }
};

export function* fetchTopRecipesStart() {
    yield takeLatest(topRecipesTypes.FETCH_TOPRECIPES_START, fetchTopRecipes);
};

export function* topRecipesSagas() {
    yield all([call(fetchTopRecipesStart)]);
};