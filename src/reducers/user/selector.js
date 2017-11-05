import { createSelector } from 'reselect';

export const getUserState = state => state && state.user;

export const getIsFetchingUser = createSelector(
  getUserState,
  user => (user && user.isFetching) || false
);

export const getUser = createSelector(
  getUserState,
  user => (user && user.user) || null
);
