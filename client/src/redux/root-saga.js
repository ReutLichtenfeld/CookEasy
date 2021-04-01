import { all, call } from 'redux-saga/effects';

import { topRecipesSagas } from './top-recipes/top-recipes.sagas';
import { resultsSagas } from './search-results/search-results.sagas';

export default function* rootSaga() {
    yield all([
        call(resultsSagas),
        call(topRecipesSagas)
    ]);
};