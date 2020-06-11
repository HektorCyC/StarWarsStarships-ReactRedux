import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { loadSpaceshipsSuccess, loadSpaceshipsError } from './actions';
import { LOAD_SPACESHIPS, CHANGE_PAGE } from './constants';
import { makePageSelector } from './selectors';
import request from 'utils/request';

export function* loadSpaceships() {
  const page = yield select(makePageSelector());
  const requestURL = `https://swapi.dev/api/starships/?page=${page}`;

  try {
    let data = yield call(request, requestURL);
    yield put(loadSpaceshipsSuccess(data));
  } catch (e) {
    yield put(loadSpaceshipsError(e));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_SPACESHIPS, loadSpaceships);
  yield takeLatest(CHANGE_PAGE, loadSpaceships);
}
