/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_SPACESHIPS,
  LOAD_SPACESHIPS_SUCCESS,
  LOAD_SPACESHIPS_ERROR,
  CHANGE_PAGE,
} from './constants';

export const initialState = {
  spaceships: {},
  loading: false,
  error: true,
  currentPage: 1,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_SPACESHIPS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_SPACESHIPS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.spaceships = action.spaceships;
        break;
      case LOAD_SPACESHIPS_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      case CHANGE_PAGE:
        draft.currentPage = action.page;
        draft.loading = true;
        draft.spaceships = {};
        break;
    }
  });

export default homePageReducer;
