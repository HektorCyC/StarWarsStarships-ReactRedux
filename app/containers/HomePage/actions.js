/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_SPACESHIPS,
  LOAD_SPACESHIPS_SUCCESS,
  LOAD_SPACESHIPS_ERROR,
} from './constants';

export function loadSpaceships() {
  return {
    type: LOAD_SPACESHIPS,
  };
}

export function loadSpaceshipsSuccess(spaceships) {
  return {
    type: LOAD_SPACESHIPS_SUCCESS,
    spaceships,
  };
}
export function loadSpaceshipsError(error) {
  return {
    type: LOAD_SPACESHIPS_ERROR,
    error,
  };
}
