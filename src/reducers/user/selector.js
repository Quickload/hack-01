import { createSelector } from 'reselect';

export const getUserState = state => state && state.user;

export const getIsFetching = createSelector(
  getUserState,
  user => (user && user.isFetching) || false
);

export const getUser = createSelector(
  getUserState,
  user => (user && user.user) || null
);
