import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */
const makeSpaceshipsSelector = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.spaceships,
  );

const makeLoadingSelector = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.loading,
  );

const makePageSelector = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.currentPage,
  );
/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSpaceshipsSelector,
  makeLoadingSelector,
  makePageSelector,
};
