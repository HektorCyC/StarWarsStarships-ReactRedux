import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { loadSpaceshipsSuccess, loadSpaceshipsError } from './actions';
import {LOAD_SPACESHIPS} from './constants';
import request from 'utils/request';

export function* loadSpaceships() {
  try {
    const requestURL = `https://swapi.dev/api/starships/?page=1`;
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
}
