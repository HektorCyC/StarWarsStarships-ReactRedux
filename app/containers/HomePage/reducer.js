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
} from './constants';

export const initialState = {
  spaceships: {},
  loading: false,
  error: true,
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
    }
  });

export default homePageReducer;
